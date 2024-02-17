import React from 'react'
import { useChatInfo } from '../../context/ChatContext'
import { ChatPage } from './ChatPage'
import { useAsyncEffect } from '../../utils/useAsyncEffect'
import './IntroAgent.css'
import { Button } from 'antd'
import { useSettings } from '../../context/SettingsContext'

export const IntroAgent: React.FC = () => {
  const { setLevel } = useSettings()
  const chatInfo = useChatInfo()

  useAsyncEffect(async (): Promise<void> => {
    await chatInfo.introduce(0)
    chatInfo.setAppendedContent(0, (
      <div className='introChooseMission'>
        <div className='introMissionOption'>
          We have three missions for you to choose from. Which one would you like to start with?
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(1)}>Select</Button>
          <div>
            Food & Drinks
          </div>
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(2)}>Select</Button>
          <div>
            School Life
          </div>
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(3)}>Select</Button>
          <div>
            Family Time
          </div>
        </div>
      </div>
    ))
  }, [])

  return (
    <ChatPage
      index={0}
      {...chatInfo.chats[0]}
    />
  )
}
