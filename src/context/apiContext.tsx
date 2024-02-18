import React, { ReactNode, useRef, useState } from 'react'
import { TogetherChatModel, TogetherClient, TogetherImageModel, togetherClient } from 'together-ai-sdk'
import { asyncTimeout } from '../utils/asyncTimeout'
import { Language } from '../utils/languages'
import { translateSentencePrompt } from '../utils/prompts'

interface API {
  togetherAi: TogetherClient
  instruct: (input: string) => Promise<string>
  image: (input: string) => Promise<string>
  translate: (input: string, to: Language, callback?: (delta: string) => void) => Promise<string>
  playAudio: (input: string, voiceId: string) => Promise<void>
  playAudioStream: (input: string, voiceId: string) => Promise<void>
}

/**
 * A React context that manages the API of the application.
 */
const ApiContext = React.createContext(undefined as unknown as API)

/**
 * A custom hook that exposes the ApiContext safely. If a user tries to use this context
 * outside of the ApiProvider, an error is thrown.
 * @returns the ApiContext, which exposes the error state values and their setters
 */
export const useAPI = (): API => {
  const context = React.useContext(ApiContext)
  if (context === undefined) {
    throw new Error('useAPI must be used in components that are wrapped around the ApiProvider.')
  }
  return context
}

interface ApiProviderProps {
  children: ReactNode
}

/**
 * A component that wraps the children it receives as props around the
 * ApiProvider.Provider
 */
export const ApiProvider: React.FC<ApiProviderProps> = props => {
  const audioQueueRef = useRef<Array<{ prompt: string, audio: string }>>([])
  const [cachedAudio, setCachedAudio] = useState<Array<{ input: string, output: string }>>([])
  const [togetherAi, _setTogetherAi] = useState(togetherClient({ apiKey: TOGETHER_API_KEY, customFetch: window.fetch.bind(window) }))

  const playAudioFile = async (input: string): Promise<void> => {
    return new Promise(res => {
      const audio = new Audio(input)
      audio.play()
      audio.onended = _ => res()
    })
  }

  const playAudioQueue = async (prompt: string, input: string): Promise<void> => {
    try {
      while (audioQueueRef.current.length > 0 && (audioQueueRef.current[0].prompt !== prompt || audioQueueRef.current[0].audio === '')) {
        await asyncTimeout(1)
      }
  
      await playAudioFile(input)
  
      audioQueueRef.current = audioQueueRef.current.slice(1)
    } catch {
      audioQueueRef.current = audioQueueRef.current.slice(1)
    }
  }

  const value = {
    togetherAi,
    instruct: async (input: string): Promise<string> => {
      const response = await togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: input }]
      })
      return response.choices[0].message.content
    },
    image: async (input: string): Promise<string> => {
      const response = await togetherAi.image({
        model: TogetherImageModel.Stable_Diffusion_XL_1_0,
        prompt: input
      })
      return response.output.choices[0].imageBase64
    },
    playAudio: async (input: string, voiceId: string): Promise<void> => {
      const cachedAudioUrl = cachedAudio.find(audio => audio.input === input)
      if (cachedAudioUrl !== undefined) {
        await playAudioFile(cachedAudioUrl.output)
        return
      }

      const params = {
        model_id: 'eleven_multilingual_v2',
        text: input,
        voice_settings: {
          similarity_boost: 0.5,
          stability: 0.8,
          style: 0,
          use_speaker_boost: true
        }
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVEN_LABS_KEY
        },
        body: JSON.stringify(params)
      }

      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, options)

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      setCachedAudio(c => [...c, { input, output: url }])

      await playAudioFile(url)
    },
    playAudioStream: async (input: string, voiceId: string): Promise<void> => {
      audioQueueRef.current.push({ prompt: input, audio: '' })

      const params = {
        model_id: 'eleven_multilingual_v2',
        text: input,
        voice_settings: {
          similarity_boost: 0.5,
          stability: 0.8,
          style: 0,
          use_speaker_boost: true
        },
        optimize_streaming_latency: 1
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVEN_LABS_KEY
        },
        body: JSON.stringify(params)
      }

      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, options)

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      audioQueueRef.current = audioQueueRef.current.map(audio => {
        if (audio.prompt === input) {
          audio.audio = url
        }
        return audio
      })

      playAudioQueue(input, url)
    },
    translate: async (input: string, to: Language, callback?: (delta: string) => void): Promise<string> => {
      const prompt = translateSentencePrompt(to)

      const response = await togetherAi.chat({
        model: TogetherChatModel.Qwen_1_5_Chat_72B,
        messages: [{ role: 'system', content: prompt }, { role: 'user', content: input }],
        streamCallback: callback !== undefined ? d => { d !== 'done' && callback(d.choices[0].delta.content) } : undefined
      })

      return response.choices[0].message.content
    }
  }

  return (
    <ApiContext.Provider value={value}>
      {props.children}
    </ApiContext.Provider>
  )
}
