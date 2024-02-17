import React, { ReactNode, useState } from 'react'
import { ChatMessage, TogetherChatModel, TogetherImageModel } from 'together-ai-sdk'
import { useAsyncEffect } from '../utils/useAsyncEffect'
import { useAPI } from './apiContext'

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
  initialPrompt: string
  baseImage?: string
  thinkingImage?: string
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
  const [chats, setChats] = useState<ChatContext['chats']>([{ messages: [{ role: 'assistant', content: '' }], agent: createHandler() }])

  // Generate the base & thinking image for the handler
  useAsyncEffect(async (): Promise<void> => {
    const handlerBaseImage = await api.togetherAi.image({
      model: TogetherImageModel.Stable_Diffusion_XL_1_0,
      prompt: 'A secret agent with sunglasses, a hat, and a trench coat'
    })

    setChats(chats => {
      return [{
        ...chats[0],
        agent: {
          ...chats[0].agent,
          baseImage: handlerBaseImage.output.choices[0].imageBase64
        }
      }, ...chats.slice(1)]
    })

    const handlerThinkingImage = await api.togetherAi.image({
      model: TogetherImageModel.Stable_Diffusion_XL_1_0,
      prompt: 'A secret agent with sunglasses, a hat, and a trench coat. They are thinking strongly about something.'
    })

    setChats(chats => {
      return [{
        ...chats[0],
        agent: {
          ...chats[0].agent,
          thinkingImage: handlerThinkingImage.output.choices[0].imageBase64
        }
      }, ...chats.slice(1)]
    })
  }, [])

  const chatAgent = async (index: number, messages: ChatMessage[]): Promise<void> => {
    console.log(messages)
    await api.togetherAi.chat({
      model: TogetherChatModel.Code_Llama_Instruct_70B,
      messages: [{ role: 'system', content: chats[index].agent.initialPrompt }, ...messages.slice(0, -1)],
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
    initialPrompt: 'Your name is Handler. You are a super spy who is training the user on how to learn foreign languages. You are very serious. Introduce yourself.',
  }
}
