import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { ChatMessage as ChatMessageRaw, TogetherChatModel } from 'together-ai-sdk'
import { useAsyncEffect } from '../utils/useAsyncEffect'
import { useAPI } from './apiContext'
import { ArtStyle, useSettings } from './SettingsContext'
import { agent1Image, agent2Image, agent3Image, handlerImage } from '../utils/constants'
import { generateCorrectionPrompt, generateHintPrompt, handlerInitialChatPrompt, joeyInitialPrompt, mandyInitialChatPrompt, quest1Prompts, quest2Prompts, quest3Prompts, robertInitialPrompt, translateWordPrompt } from '../utils/prompts'
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
  translateWord: (messageIndex: number, word: string) => Promise<void>
  clearExtraContent: (messageIndex: number) => void
  generateHint: () => void
  clearHint: () => void
  bookmark: (foreignWord: string) => void
  removeBookmark: (foreignWord: string) => void
  correctMessage: (messageIndex: number) => void
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
  finishedGenerating: boolean
  correction?: string
}

export interface ChatData {
  messages: ChatMessage[]
  agent: ChatAgent
  quests: Quest[]
  hint: string
  bookmarks: string[]
}

interface Quest {
  nativeQuestion: string
  nativeAnswer: string
  foreignQuestion: string
  foreignAnswer: string
  complete: boolean
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
  const { artStyle, autoPlayAudio, level, nativeLanguage, foreignLanguage } = useSettings()
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
      if (chats[i].agent.baseImage !== undefined) continue

      const image = await api.image(chats[i].agent.baseImagePrompt)
      setChats(chats => {
        const newChats = [...chats]

        newChats[i].agent.baseImage = image

        return newChats
      })
    }
  }, [])

  useAsyncEffect(async () => {
    if (nativeLanguage !== undefined && foreignLanguage !== undefined) {
      setChats(chats => {
        const newChats = [...chats]
        const nativeQuest1 = quest1Prompts(nativeLanguage)
        const foreignQuest1 = quest1Prompts(foreignLanguage)
        newChats[1].quests = [{
          nativeQuestion: nativeQuest1[0].question,
          nativeAnswer: nativeQuest1[0].answer,
          foreignQuestion: foreignQuest1[0].question,
          foreignAnswer: foreignQuest1[0].answer,
          complete: false
        }, {
          nativeQuestion: nativeQuest1[1].question,
          nativeAnswer: nativeQuest1[1].answer,
          foreignQuestion: foreignQuest1[1].question,
          foreignAnswer: foreignQuest1[1].answer,
          complete: false  
        }, {
          nativeQuestion: nativeQuest1[2].question,
          nativeAnswer: nativeQuest1[2].answer,
          foreignQuestion: foreignQuest1[2].question,
          foreignAnswer: foreignQuest1[2].answer,
          complete: false
        }]

        const nativeQuest2 = quest2Prompts(nativeLanguage)
        const foreignQuest2 = quest2Prompts(foreignLanguage)
        newChats[2].quests = [{
          nativeQuestion: nativeQuest2[0].question,
          nativeAnswer: nativeQuest2[0].answer,
          foreignQuestion: foreignQuest2[0].question,
          foreignAnswer: foreignQuest2[0].answer,
          complete: false
        }, {
          nativeQuestion: nativeQuest2[1].question,
          nativeAnswer: nativeQuest2[1].answer,
          foreignQuestion: foreignQuest2[1].question,
          foreignAnswer: foreignQuest2[1].answer,
          complete: false
        }]

        const nativeQuest3 = quest3Prompts(nativeLanguage)
        const foreignQuest3 = quest3Prompts(foreignLanguage)
        newChats[3].quests = [{
          nativeQuestion: nativeQuest3[0].question,
          nativeAnswer: nativeQuest3[0].answer,
          foreignQuestion: foreignQuest3[0].question,
          foreignAnswer: foreignQuest3[0].answer,
          complete: false
        }, {
          nativeQuestion: nativeQuest3[1].question,
          nativeAnswer: nativeQuest3[1].answer,
          foreignQuestion: foreignQuest3[1].question,
          foreignAnswer: foreignQuest3[1].answer,
          complete: false
        }]

        newChats[1].agent.initialChatPrompt = mandyInitialChatPrompt(foreignLanguage)
        newChats[2].agent.initialChatPrompt = joeyInitialPrompt(foreignLanguage)
        newChats[3].agent.initialChatPrompt = robertInitialPrompt(foreignLanguage)

        return newChats
      })
    }
  }, [nativeLanguage, foreignLanguage])

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

  const checkQuests = async (agentResponse: string): Promise<void> => {
    const quests = chats[level].quests
    if (quests.length === 0) return

    for (let i = 0; i < quests.length; i++) {
      if (quests[i].complete) continue

      const quest = quests[i]
      const prompt = `You are a moderation model. You must say 'YES' if the user's message talks about ${quest.foreignQuestion} or a subject relating to it. You must say 'NO' if it does not. Do not say anything other than 'YES' or 'NO'.`

      const response = await api.togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: prompt }, { role: 'user', content: agentResponse }],
        maxTokens: 10
      })

      if (response.choices[0].message.content.toLowerCase().includes('yes')) {
        setChats(chats => {
          const newChats = [...chats]
          newChats[level].quests[i].complete = true
          return newChats
        })
      
      }
    }
  }

  const chatAgent = async (index: number, messages: ChatMessage[], doneCallback?: () => void): Promise<void> => {
    let cummunitive = ''
    let audioChunk = ''

    const filteredMessages = messages.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }))

    await api.togetherAi.chat({
      model: TogetherChatModel.Qwen_1_5_Chat_72B,
      messages: [{ role: 'system', content: chats[index].agent.initialChatPrompt }, ...filteredMessages],
      repetitionPenalty: 1.2,
      maxTokens: 1000,
      streamCallback: v => {
        if (v !== 'done') {
          const newContent = v.choices[0].delta.content
          audioChunk += newContent
          cummunitive += newContent

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

          checkQuests(cummunitive)
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

  const checkCorrectness = async (index: number, messageIndex: number): Promise<void> => {
    const message = chats[index].messages[messageIndex]
    const prompt = `You are a grammar model. You must say 'YES' if the user's message contains grammar, spelling, or word order mistakes. You must say 'NO' if it does not. Do not say anything other than 'YES' or 'NO'.`

    const response = await api.openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: prompt }, { role: 'user', content: message.content }],
      max_tokens: 10,
    })

    if (response.choices[0].message.content?.toLowerCase().includes('yes')) {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[messageIndex].correction = ''
        return newChats
      })
    }
  }

  const sendMessage = async (index: number, content: string): Promise<void> => {
    const newChats = [...chats]
    newChats[index].messages.push({
      role: 'user',
      content,
      isPlayingAudio: false,
      finishedGenerating: true
    })

    newChats[index].messages.push({
      role: 'assistant',
      content: '',
      isPlayingAudio: false,
      finishedGenerating: false
    })

    setChats(newChats)

    // Do not await this, as it is not necessary to wait for the correctness to be checked
    void checkCorrectness(index, newChats[index].messages.length - 2)

    await chatAgent(index, newChats[level].messages, () => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[chats[level].messages.length - 1].finishedGenerating = true
        return newChats
      })
    })

    // Do not await this, as it is not necessary to wait for the image to be generated
    void generateResponsiveImage(index)
  }

  const createImagePrompt = async (chatInfo: ChatData): Promise<string> => {
    const systemPrompt = 'Create a description of an image representing the latest response from the assistant. Include details about what the character is doing and the environment they are in. Describe what the character is wearing and what they are holding.'

    const repsonsiveImagePrompt = await api.togetherAi.chat({
      model: TogetherChatModel.Qwen_1_5_Chat_72B,
      messages: [
        { role: 'system', content: chatInfo.agent.initialChatPrompt },
        ...chatInfo.messages.map(m => ({ role: m.role, content: m.content })),
        { role: 'system', content: systemPrompt}
      ]
    })

    return chatInfo.agent.baseImagePrompt + '. ' + repsonsiveImagePrompt.choices[0].message.content + ' ' + createArtStylePrompt(artStyle)
  }

  const value = {
    chats,
    createNewChat: (agent: ChatAgent) => {
      setChats([...chats, { messages: [], agent, quests: [], hint: '', bookmarks: [] }])
    },
    sendMessage,
    introduce: async (index: number, doneCallback?: () => void): Promise<void> => {
      await chatAgent(index, chats[index].messages, () => {
        setChats(chats => {
          const newChats = [...chats]
          newChats[level].messages[chats[level].messages.length - 1].finishedGenerating = true
          return newChats
        })
        doneCallback?.()
      })
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
      const content = chats[level].messages[messageIndex].content
      let translatedMessage = ''

      await api.translate(content, nativeLanguage, d => {
        translatedMessage += d
        setChats(chats => {
          const newChats = [...chats]
          newChats[level].messages[messageIndex].extraContent = (
            <div>
              {translatedMessage}
            </div>
          )
          return newChats
        })
      })
    },
    clearExtraContent: (messageIndex: number) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].messages[messageIndex].extraContent = undefined
        return newChats
      })
    },
    translateWord: async (messageIndex: number, word: string): Promise<void> => {
      const prompt = translateWordPrompt(nativeLanguage, foreignLanguage, word, chats[level].messages[messageIndex].content)
      let translatedWord = ''

      await api.togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: prompt }],
        streamCallback: v => {
          if (v === 'done') return
          translatedWord += v.choices[0].delta.content

          setChats(chats => {
            const newChats = [...chats]
            newChats[level].messages[messageIndex].extraContent = (
              <div>
                {translatedWord}
              </div>
            )
            return newChats
          })
        }
      })
    },
    generateHint: (): void => {
      const quest = chats[level].quests.find(q => !q.complete)
      if (quest === undefined) {
        setChats(chats => {
          const newChats = [...chats]
          newChats[level].hint = 'You have completed all the quests for this level.'
          return newChats
        })
        return
      }

      const prompt = generateHintPrompt(nativeLanguage, foreignLanguage, quest.nativeQuestion)
      let cummunitive = ''

      api.togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: prompt }],
        streamCallback: v => {
          if (v === 'done') return
          cummunitive += v.choices[0].delta.content
          setChats(chats => {
            const newChats = [...chats]
            newChats[level].hint = cummunitive
            return newChats
          })
        }
      })
    },
    clearHint: () => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].hint = ''
        return newChats
      })
    },
    bookmark: (foreignWord: string) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].bookmarks.push(foreignWord)
        return newChats
      })
    },
    removeBookmark: (foreignWord: string) => {
      setChats(chats => {
        const newChats = [...chats]
        newChats[level].bookmarks = newChats[level].bookmarks.filter(b => b !== foreignWord)
        return newChats
      })
    },
    correctMessage: (messageIndex: number) => {
      const message = chats[level].messages[messageIndex]
      const prompt = generateCorrectionPrompt(nativeLanguage, foreignLanguage)
      let cummunitive = ''

      api.togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: prompt }, { role: 'user', content: message.content }],
        streamCallback: v => {
          if (v === 'done') return
          cummunitive += v.choices[0].delta.content
          setChats(chats => {
            const newChats = [...chats]
            newChats[level].messages[messageIndex].correction = cummunitive
            return newChats
          })
        }
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
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false, finishedGenerating: false }],
    agent: createHandler(),
    quests: [],
    hint: '',
    bookmarks: []
  }, {
    quests: [],
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false, finishedGenerating: false }],
    agent: {
      name: 'Mandy',
      voiceId: 'jsCqWAovK2LkecY7zXl4',
      baseImage: agent1Image,
      baseImagePrompt: 'Draw an anime girl with pink hair. The character is wearing casual clothes and a skirt.',
      initialChatPrompt: mandyInitialChatPrompt(Language.English),
    },
    hint: '',
    bookmarks: []
  }, {
    quests: [],
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false, finishedGenerating: false }],
    agent: {
      name: 'Joey',
      voiceId: 'IKne3meq5aSn9XLyUdCD',
      baseImage: agent2Image,
      baseImagePrompt: 'Draw an anime boy with blue hair. The character is wearing casual clothes and jeans. He has blond hair. He is very attractive. He has a small, lean frame.',
      initialChatPrompt: joeyInitialPrompt(Language.English),
    },
    hint: '',
    bookmarks: []
  }, {
    quests: [],
    messages: [{ role: 'assistant', content: '', isPlayingAudio: false, finishedGenerating: false }],
    agent: {
      name: 'Robert',
      voiceId: 'VR6AewLTigWG4xSOukaG',
      baseImage: agent3Image,
      baseImagePrompt: 'Draw an anime grandpa with a cane. The character is wearing a suit and tie. He has a beard and glasses. He is very wise and kind.',
      initialChatPrompt: 'Your name is Robert. You are a grandpa who likes to play chess and read books. You really like apple pie. Your favorite book is "One flew over the cookoo\'s nest". You are a retired teacher. Your mom\'s name is Jane. Your dad\'s name is John. Tell the user about what you did for a living.'
    },
    hint: '',
    bookmarks: []
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
