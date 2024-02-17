import React from 'react'
import { useChatInfo } from '../../context/ChatContext'
import { ChatPage } from './ChatPage'
import { useAsyncEffect } from '../../utils/useAsyncEffect'
import './IntroAgent.css'
import { useSettings } from '../../context/SettingsContext'

export const MissionAgent: React.FC = () => {
  const { level } = useSettings()
  const chatInfo = useChatInfo()

  useAsyncEffect(async () => {
    await chatInfo.introduce(level)
  }, [level])

  return (
    <ChatPage
      index={level}
      {...chatInfo.chats[level]}
    />
  )
}
