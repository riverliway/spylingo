import React, { useState } from 'react'
import { ChooseLanguage } from '../ChooseLanguage/ChooseLanguage'
import { ChatPage } from '../Chat/ChatPage'
import { useChatInfo } from '../../context/ChatContext'
import { useSettings } from '../../context/SettingsContext'
import { IntroAgent } from '../Chat/IntroAgent'

/**
 * Determines which page to show
 */
export const Router: React.FC = () => {
  const chatInfo = useChatInfo()
  const { nativeLanguage, setNativeLanguage, foreignLanguage, setForeignLanguage } = useSettings()
  const [level, setLevel] = useState(0)

  if (nativeLanguage === undefined) {
    return (
      <ChooseLanguage
        title='Select your native language'
        subTitle='Select your native language'
        setLanguage={setNativeLanguage}
      />
    )
  }

  if (foreignLanguage === undefined) {
    return (
      <ChooseLanguage
        title='Select the foreign language to practice'
        setLanguage={setForeignLanguage}
        hiddenLanguage={nativeLanguage}
      />
    )
  }

  if (level === 0) {
    return <IntroAgent />
  }

  return (
    <ChatPage {...{...chatInfo.chats[level], index: 0}} />
  )
}
