import React from 'react'
import { useChatInfo } from '../../context/ChatContext'
import { ChatPage } from './ChatPage'
import { useAsyncEffect } from '../../utils/useAsyncEffect'

export const IntroAgent: React.FC = () => {
  const chatInfo = useChatInfo()

  useAsyncEffect(async (): Promise<void> => {
    await chatInfo.introduce(0)
  }, [])

  return (
    <ChatPage
      index={0}
      {...chatInfo.chats[0]}
    />
  )
}
