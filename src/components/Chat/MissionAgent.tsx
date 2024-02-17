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
    const messages = chatInfo.chats[level].messages.filter(message => message.role !== 'system')
    console.log(messages)
    if (messages.length === 1 && messages[0].content === '') {
      await chatInfo.introduce(level)
    }
  }, [level])

  return (
    <ChatPage
      index={level}
      {...chatInfo.chats[level]}
    />
  )
}
