import React from 'react'
import { useChatInfo } from '../../context/ChatContext'
import { ChatPage } from './ChatPage'
import { useAsyncEffect } from '../../utils/useAsyncEffect'
import './IntroAgent.css'
import { Button } from 'antd'
import { useSettings } from '../../context/SettingsContext'
import { chooseMissionPrompt, familyTimePrompt, foodAndDrinksPrompt, schoolLifePrompt, selectPrompt } from '../../utils/prompts'

export const IntroAgent: React.FC = () => {
  const { setLevel, nativeLanguage } = useSettings()
  const chatInfo = useChatInfo()

  useAsyncEffect(async (): Promise<void> => {
    await chatInfo.introduce(0)
    chatInfo.setAppendedContent(0, (
      <div className='introChooseMission'>
        <div className='introMissionOption'>
          {chooseMissionPrompt(nativeLanguage)}
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(1)}>{selectPrompt(nativeLanguage)}</Button>
          <div>
            {foodAndDrinksPrompt(nativeLanguage)}
          </div>
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(2)}>{selectPrompt(nativeLanguage)}</Button>
          <div>
            {schoolLifePrompt(nativeLanguage)}
          </div>
        </div>
        <div className='introMissionOption'>
          <Button onClick={() => setLevel(3)}>{selectPrompt(nativeLanguage)}</Button>
          <div>
            {familyTimePrompt(nativeLanguage)}
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
