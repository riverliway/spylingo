import React, { ReactNode, useState } from 'react'
import { ChatMessage, TogetherChatModel } from 'together-ai-sdk'
import { useAsyncEffect } from '../utils/useAsyncEffect'
import { useAPI } from './apiContext'
import { ArtStyle, useSettings } from './SettingsContext'

interface ChatContext {
  chats: ChatData[]
  createNewChat: (agent: ChatAgent) => void
  sendMessage: (index: number, content: string) => Promise<void>
  introduce: (index: number) => Promise<void>
}

export interface ChatData {
  messages: ChatMessage[]
  agent: ChatAgent
}

interface ChatAgent {
  name: string
  initialChatPrompt: string
  baseImagePrompt: string
  baseImage?: string
  responsiveImage?: string
}

/**
 * A React context that manages the chats of the application.
 */
const ChatContext = React.createContext(undefined as unknown as ChatContext)

/**
 * A custom hook that exposes the ChatContext safely. If a user tries to use this context
 * outside of the ChatInfoProvider, an error is thrown.
 * @returns the ChatContext, which exposes the error state values and their setters
 */
export const useChatInfo = (): ChatContext => {
  const context = React.useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChatInfo must be used in components that are wrapped around the ChatInfoProvider.')
  }
  return context
}

interface ChatInfoProviderProps {
  children: ReactNode
}

/**
 * A component that wraps the children it receives as props around the
 * ChatInfoProvider.Provider
 */
export const ChatInfoProvider: React.FC<ChatInfoProviderProps> = props => {
  const api = useAPI()
  const { artStyle, autoPlayAudio } = useSettings()
  const [chats, setChats] = useState<ChatContext['chats']>([{ messages: [{ role: 'assistant', content: '' }], agent: createHandler() }])

  // Generate the base & thinking image for the handler
  useAsyncEffect(async (): Promise<void> => {
    const handlerBaseImage = await api.image(chats[0].agent.baseImagePrompt)

    setChats(chats => {
      return [{
        ...chats[0],
        agent: {
          ...chats[0].agent,
          baseImage: handlerBaseImage
        }
      }, ...chats.slice(1)]
    })
  }, [])

  const chatAgent = async (index: number, messages: ChatMessage[]): Promise<void> => {
    await api.togetherAi.chat({
      model: TogetherChatModel.Code_Llama_Instruct_70B,
      messages: [{ role: 'system', content: chats[index].agent.initialChatPrompt }, ...messages.slice(0, -1)],
      streamCallback: v => {
        if (v !== 'done') {
          setChats(chats => {
            const newChats = [...chats]
  
            newChats[index].messages[newChats[index].messages.length - 1].content += v.choices[0].delta.content
  
            return newChats
          })
        }
      }
    })
  }

  const generateResponsiveImage = async (index: number): Promise<void> => {
    const imagePrompt = await createImagePrompt(chats[index])

    const image = await api.image(imagePrompt)

    setChats(chats => {
      const newChats = [...chats]

      newChats[index].agent.responsiveImage = image

      return newChats
    })
  }

  const sendMessage = async (index: number, content: string): Promise<void> => {
    const newChats = [...chats]
    newChats[index].messages.push({
      role: 'user',
      content
    })

    newChats[index].messages.push({
      role: 'assistant',
      content: ''
    })

    setChats(newChats)

    await chatAgent(index, newChats[index].messages)

    // Do not await this, as it is not necessary to wait for the image to be generated
    void generateResponsiveImage(index)
  }

  const createImagePrompt = async (chatInfo: ChatData): Promise<string> => {
    const systemPrompt = 'Create a description of an image representing the latest response from the assistant. Include details about what the character is doing and the environment they are in. Describe what the character is wearing and what they are holding.'

    const repsonsiveImagePrompt = await api.togetherAi.chat({
      model: TogetherChatModel.Code_Llama_Instruct_70B,
      messages: [
        { role: 'system', content: chatInfo.agent.initialChatPrompt },
        ...chatInfo.messages,
        { role: 'system', content: systemPrompt}
      ]
    })

    return chatInfo.agent.baseImagePrompt + '. ' + repsonsiveImagePrompt.choices[0].message.content + ' ' + createArtStylePrompt(artStyle)
  }

  const value = {
    chats,
    createNewChat: (agent: ChatAgent) => {
      setChats([...chats, { messages: [], agent }])
    },
    sendMessage,
    introduce: async (index: number): Promise<void> => {
      await chatAgent(index, chats[index].messages)
    }
  }

  return (
    <ChatContext.Provider value={value}>
      {props.children}
    </ChatContext.Provider>
  )
}

const createHandler = (): ChatAgent => {
  return {
    name: 'Handler',
    initialChatPrompt: 'Your name is Handler. You are a super spy who is training the user on how to learn foreign languages. You are very serious. Introduce yourself.',
    baseImagePrompt: 'A serious spy with sunglasses and a suit. Only show one spy. The spy is in the center of the image.',
  }
}

const createArtStylePrompt = (artStyle: ArtStyle): string => {
  switch (artStyle) {
    case ArtStyle.ANIME:
      return 'The image should be drawn in an anime style.'
    case ArtStyle.PIXEL:
      return 'The image should be drawn in a pixel art style.'
    case ArtStyle.WATERCOLOR:
      return 'The image should be drawn in a watercolor style.'
    case ArtStyle.PHOTOREALISTIC:
      return 'The image should be photo realistic.'
  }
}
