import React, { ReactNode, useState } from 'react'
import { TogetherClient, togetherClient } from 'together-ai-sdk'

interface API {
  togetherAi: TogetherClient
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
  const [togetherAi, _] = useState(togetherClient({ apiKey: TOGETHER_API_KEY, customFetch: window.fetch.bind(window) }))

  const value = {
    togetherAi
  }

  return (
    <ApiContext.Provider value={value}>
      {props.children}
    </ApiContext.Provider>
  )
}
