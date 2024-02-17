import React, { ReactNode, useState } from 'react'
import { Language } from '../utils/languages'

interface Settings {
  nativeLanguage: Language
  setNativeLanguage: (lang: Language) => void
  foreignLanguage: Language
  setForeignLanguage: (lang: Language) => void
}

/**
 * A React context that manages the settings of the application.
 */
const SettingsContext = React.createContext(undefined as unknown as Settings)

/**
 * A custom hook that exposes the SettingsContext safely. If a user tries to use this context
 * outside of the SettingsProvider, an error is thrown.
 * @returns the SettingsContext, which exposes the error state values and their setters
 */
export const useSettings = (): Settings => {
  const context = React.useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used in components that are wrapped around the SettingsProvider.')
  }
  return context
}

interface SettingsProviderProps {
  children: ReactNode
}

/**
 * A component that wraps the children it receives as props around the
 * SettingsProvider.Provider
 */
export const SettingsProvider: React.FC<SettingsProviderProps> = props => {
  const [nativeLanguage, setNativeLanguage] = useState<Language>()
  const [foreignLanguage, setForeignLanguage] = useState<Language>()

  const value = {
    nativeLanguage: nativeLanguage!,
    setNativeLanguage,
    foreignLanguage: foreignLanguage!,
    setForeignLanguage
  }

  return (
    <SettingsContext.Provider value={value}>
      {props.children}
    </SettingsContext.Provider>
  )
}
