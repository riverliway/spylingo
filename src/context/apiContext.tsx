import React, { ReactNode, useState } from 'react'
import { TogetherChatModel, TogetherClient, TogetherImageModel, togetherClient } from 'together-ai-sdk'

interface API {
  togetherAi: TogetherClient
  instruct: (input: string) => Promise<string>
  image: (input: string) => Promise<string>
  playAudio: (input: string, voiceId: string) => Promise<void>
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
  const [cachedAudio, setCachedAudio] = useState<Array<{ input: string, output: string }>>([])
  const [togetherAi, _setTogetherAi] = useState(togetherClient({ apiKey: TOGETHER_API_KEY, customFetch: window.fetch.bind(window) }))

  const playAudioFile = async (input: string): Promise<void> => {
    return new Promise(res => {
      const audio = new Audio(input)
      audio.play()
      audio.onended = _ => res()
    })
  }

  const value = {
    togetherAi,
    instruct: async (input: string): Promise<string> => {
      const response = await togetherAi.chat({
        model: TogetherChatModel.Code_Llama_Instruct_70B,
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
    }
  }

  return (
    <ApiContext.Provider value={value}>
      {props.children}
    </ApiContext.Provider>
  )
}
