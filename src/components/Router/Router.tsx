import React from 'react'
import { ChooseLanguage } from '../ChooseLanguage/ChooseLanguage'
import { useSettings } from '../../context/SettingsContext'
import { IntroAgent } from '../Chat/IntroAgent'
import { MissionAgent } from '../Chat/MissionAgent'
import { selectForeignLanguagePrompt, selectForeignLanguageSubPrompt, selectNativeLanguagePrompt } from '../../utils/prompts'
import { Language } from '../../utils/languages'

/**
 * Determines which page to show
 */
export const Router: React.FC = () => {
  const { nativeLanguage, setNativeLanguage, foreignLanguage, setForeignLanguage, level } = useSettings()

  if (nativeLanguage === undefined) {
    return (
      <ChooseLanguage
        title={Object.values(Language).map(selectNativeLanguagePrompt)}
        subTitle={selectNativeLanguagePrompt(Language.English)}
        setLanguage={setNativeLanguage}
      />
    )
  }

  if (foreignLanguage === undefined) {
    return (
      <ChooseLanguage
        title={selectForeignLanguagePrompt(nativeLanguage)}
        subTitle={selectForeignLanguageSubPrompt(nativeLanguage)}
        setLanguage={setForeignLanguage}
        hiddenLanguage={nativeLanguage}
      />
    )
  }

  if (level === 0) {
    return <IntroAgent />
  }

  return (
    <MissionAgent />
  )
}
