import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { ChatMessage as ChatMessageRaw, TogetherChatModel } from 'together-ai-sdk'
import { useAsyncEffect } from '../utils/useAsyncEffect'
import { useAPI } from './apiContext'
import { ArtStyle, useSettings } from './SettingsContext'
import { handlerImage } from '../utils/constants'
import { handlerInitialChatPrompt } from '../utils/prompts'
import { Language } from '../utils/languages'

interface ChatContext {
  chats: ChatData[]
  createNewChat: (agent: ChatAgent) => void
  sendMessage: (index: number, content: string) => Promise<void>
  introduce: (index: number, doneCallback?: () => void) => Promise<void>
  setAppendedContent: (messageIndex: number, content?: React.ReactNode) => void
  setExtraContent: (messageIndex: number, content?: React.ReactNode) => void
  playAudio: (messageIndex: number) => Promise<void>
  translateMessage: (messageIndex: number) => Promise<void>
  clearExtraContent: (messageIndex: number) => void
}

export type ChatMessage = ChatMessageRaw & {
    /**
 * For adding extra content inside the chat bubble
 */
  appendContent?: React.ReactNode
  /**
   * For adding below the bubble
   */
  extraContent?: React.ReactNode
  isPlayingAudio: boolean
}

export interface ChatData {
  messages: ChatMessage[]
  agent: ChatAgent
  quests: Quest[]
}

interface Quest {
  question: string
  answer: string
}

interface ChatAgent {
  name: string
  initialChatPrompt: string
  baseImagePrompt: string
  baseImage?: string
  responsiveImage?: string
  voiceId: string
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
  const streamQueueRef = useRef<{ messageIndex: number, queue: string[], done: () => void, calledDone: boolean }>({ messageIndex: 0, queue: [], done: () => {}, calledDone: false })
  const { artStyle, autoPlayAudio, level, nativeLanguage } = useSettings()
  const [chats, setChats] = useState<ChatContext['chats']>(createInitialChats())

  useEffect(() => {
    setChats(chats => {
      const newChats = [...chats]
      newChats[0].agent.initialChatPrompt = handlerInitialChatPrompt(nativeLanguage)
      return newChats
    })
  }, [nativeLanguage])

  useAsyncEffect(async () => {
    for (let i = 1; i < chats.length; i++) {
      const image = await api.image(chats[i].agent.baseImagePrompt)
      setChats(chats => {
        const newChats = [...chats]

        newChats[i].agent.baseImage = image

        return newChats
      })
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (streamQueueRef.current.queue.length > 0) {
        streamQueueRef.current.calledDone = false
        const messageIndex = streamQueueRef.current.messageIndex

        setChats(chats => {
          const newChats = [...chats]
          newChats[level].messages[messageIndex].content += streamQueueRef.current.queue[0]
          streamQueueRef.current.queue = streamQueueRef.current.queue.slice(1)
          return newChats
        })
      } else if (!streamQueueRef.current.calledDone) {
        streamQueueRef.current.calledDone = true
        streamQueueRef.current.done()
      }
    }, 100)

    return () => clearInterval(interval)
  }, [level])

  const chatAgent = async (index: number, messages: ChatMessage[], doneCallback?: () => void): Promise<void> => {
    let audioChunk = ''

    await api.togetherAi.chat({
      model: TogetherChatModel.Code_Llama_Instruct_70B,
      messages: [{ role: 'system', content: chats[index].agent.initialChatPrompt }, ...messages.slice(0, -1)],
      repetitionPenalty: 1.2,
      streamCallback: v => {
        if (v !== 'done') {
          const newContent = v.choices[0].delta.content
          audioChunk += newContent

          if (autoPlayAudio) {
            streamQueueRef.current.messageIndex = chats[index].messages.length - 1
            streamQueueRef.current.queue.push(newContent)
            streamQueueRef.current.done = doneCallback ?? (() => {})
          } else {
            setChats(chats => {
              const newChats = [...chats]
              newChats[level].messages[chats[index].messages.length - 1].content += newContent
              return newChats
            })
          }

          if (autoPlayAudio && ['.', '!', '?', '。', '！', '？'].some(c => audioChunk.trim().endsWith(c))) {
            api.playAudioStream(audioChunk, chats[index].agent.voiceId)
            audioChunk = ''
          }
        } else {
          if (!autoPlayAudio) {
            doneCallback?.()
          }
          if (autoPlayAudio && audioChunk.trim().length > 0) {
            api.playAudioStream(audioChunk, chats[index].agent.voiceId)
          }
        }
      }
    })
  }

  const playAudio = async (messageIndex: number): Promise<void> => {
    setChats(chats => {
      const newChats = [...chats]
      newChats[level].messages[messageIndex].isPlayingAudio = true
      return newChats
    })
    const messages = chats[level].messages
    await api.playAudio(messages[messageIndex].content, chats[level].agent.voiceId)

    setChats(chats => {
      const newChats = [...chats]
      newChats[level].messages[messageIndex].isPlayingAudio = false
      return newChats
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
      content,
      isPlayingAudio: false
    })

    newChats[index].messages.push({
      role: 'assistant',
      content: '',
      isPlayingAudio: false
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
      setChats([...chats, { messages: [], agent, quests: [] }])
    },
    sendMessage,
    introduce: async (index: number, doneCallback?: () => void): Promise<void> => {
      await chatAgent(index, chats[index].messages, doneCallback)
    },
    setAppendedContent: (messageIndex: number, content?: React.ReactNode) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[messageIndex].appendContent = content
        return newChats
      })
    },
    setExtraContent: (messageIndex: number, content?: React.ReactNode) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[messageIndex].extraContent = content
        return newChats
      })
    },
    playAudio,
    translateMessage: async (messageIndex: number): Promise<void> => {
      const prompt = `You are a translation model. You always translate the previous message into a different language. Translate the following message into ${nativeLanguage}.`
      const content = chats[level].messages[messageIndex].content
      let translatedMessage = ''

      await api.togetherAi.chat({
        model: TogetherChatModel.Code_Llama_Instruct_70B,
        messages: [{ role: 'system', content: prompt }, { role: 'user', content }],
        streamCallback: v => {
          if (v === 'done') return
          translatedMessage += v.choices[0].delta.content

          setChats(chats => {
            const newChats = [...chats]
            newChats[level].messages[messageIndex].extraContent = (
              <div>
                {translatedMessage}
              </div>
            )
            return newChats
          })
        }
      })
    },
    clearExtraContent: (messageIndex: number) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[messageIndex].extraContent = undefined
        return newChats
      })
    }
  }

  return (
    <ChatContext.Provider value={value}>
      {props.children}
    </ChatContext.Provider>
  )
}

const createInitialChats = (): ChatData[] => {
  return [{
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false }],
    agent: createHandler(),
    quests: []
  }, {
    quests: [],
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false }],
    agent: {
      name: 'Mandy',
      voiceId: 'jsCqWAovK2LkecY7zXl4',
      baseImagePrompt: 'Draw an anime girl with pink hair. The character is wearing casual clothes and a skirt.',
      initialChatPrompt: 'Your name is Mandy. You are a young girl who likes vegetables, sports, and playing with your friends. You really like carrots, but do not like spinach. You are allergic to shellfish. Your favorite sport is basketball. Your favorite color is purple. You love animals. You are very friendly. Tell the user about your favoriate animal.',
    }
  }]
}

const createHandler = (): ChatAgent => {
  return {
    name: 'Handler',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    baseImage: handlerImage,
    initialChatPrompt: handlerInitialChatPrompt(Language.English),
    baseImagePrompt: 'Draw an anime character that is a super spy. The character should be serious and should be wearing a suit. The character should be holding a briefcase. The character should be in a city environment. The character should be standing in front of a building. The character should be looking at the user. The character should be drawn in an anime style.',
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
