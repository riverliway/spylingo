import React, { useState } from 'react'
import { Input, Spin } from 'antd'
import { CheckCircleFilled, LogoutOutlined, QuestionCircleOutlined, SendOutlined, SettingOutlined, StopOutlined } from '@ant-design/icons'

import { ChatData, useChatInfo } from '../../context/ChatContext'
import './ChatPage.css'
import { ChatBubble } from './ChatBubble'
import { exitPrompt, hintPrompt, objectivePrompt, settingsPrompt, typeMessagePrompt } from '../../utils/prompts'
import { useSettings } from '../../context/SettingsContext'
import { SettingsModal } from '../SettingsModal/SettingsModal'
import { HintModal } from '../HintModal/HintModal'
import { CorrectionModal } from '../CorrectionModal/CorrectionModal'
import { useAPI } from '../../context/apiContext'
import { asyncTimeout } from '../../utils/asyncTimeout'

export const ChatPage: React.FC<ChatData & { index: number }> = props => {
  const api = useAPI()
  const { nativeLanguage, setLevel } = useSettings()
  const chatData = useChatInfo()
  const [sendingContent, setSendingContent] = useState('')
  const [isResponding, setIsResponding] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [hintOpen, setHintOpen] = useState(false)
  const [correctionOpen, setCorrectionOpen] = useState<number | undefined>()
  const [hoverStates, setHoverStates] = useState<number[]>([])

  const sendMessage = async (): Promise<void> => {
    if (sendingContent.length === 0) return

    const content = sendingContent
    setSendingContent('')
    setIsResponding(true)

    await chatData.sendMessage(props.index, content)

    setIsResponding(false)
  }

  const playAudioStream = async (index: number): Promise<void> => {
    const messages = splitOnPunctuation(props.messages[index].content)
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i]
      await asyncTimeout(i < 5 ? 100 : 1000)
      void api.playAudioStream(message, props.agent.voiceId)
    }
  }

  const splitOnPunctuation = (message: string): string[] => {
    const punctuation = ['.', '!', '?', '。', '！', '？']
    const segments = ['']

    for (const char of message) {
      segments[segments.length - 1] += char
      if (punctuation.includes(char)) {
        segments.push('')
      }
    }

    return segments.filter(segment => segment.trim().length > 0)
  }
  
  return (
    <div className='chatWindowContain'>
      <SettingsModal open={settingsOpen} close={() => setSettingsOpen(false)} />
      <HintModal open={hintOpen} close={() => setHintOpen(false)} />
      <CorrectionModal messageIndex={correctionOpen!} open={correctionOpen !== undefined} close={() => setCorrectionOpen(undefined)} />
      <div className='imageContain'>
        <ChatImage {...props} responding={isResponding} className='chatImage' />
      </div>
      <div className='chatInterface'>
        <div className='chatHistoryContain'>
          <ChatBubble
            key={-1}
            message={undefined}
            onHover={isHovering => setHoverStates(h => h.filter(i => i !== -1).concat(isHovering ? [-1] : []))}
            showActionItems={props.index === 0 ? false : hoverStates.includes(-1) || hoverStates.includes(0)}
            isPlayingAudio={props.messages[0].isPlayingAudio}
            playAudio={() => playAudioStream(0)}
            translateWholeMessage={() => chatData.translateMessage(0)}
            clearExtraContent={() => {}}
            translateWord={word => chatData.translateWord(0, word)}
            openCorrectionModal={() => {}}
          />
          {props.messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              onHover={isHovering => setHoverStates(h => h.filter(i => i !== index).concat(isHovering ? [index] : []))}
              showActionItems={props.index === 0 ? false : hoverStates.includes(index) || hoverStates.includes(index + 1)}
              isPlayingAudio={props.messages.length > index + 1 ? props.messages[index + 1].isPlayingAudio : false}
              playAudio={() => playAudioStream(index + 1)}
              translateWholeMessage={() => chatData.translateMessage(index + 1)}
              clearExtraContent={() => chatData.clearExtraContent(index)}
              translateWord={word => chatData.translateWord(index, word)}
              openCorrectionModal={() => setCorrectionOpen(index)}
            />
          ))}
        </div>
        <div className='chatMessageContain'> 
          <Input.TextArea
            autoSize={{ minRows: 4 }}
            className='chatMessageInput'
            placeholder={isResponding ? '' : typeMessagePrompt(nativeLanguage)}
            variant='borderless'
            value={sendingContent}
            onChange={e => setSendingContent(e.currentTarget.value)}
            onPressEnter={e => { e.preventDefault(); sendMessage() }}
            disabled={isResponding}
          />
          <div className={`chatSendButton ${isResponding && 'chatSendButtonDisabled'}`} onClick={sendMessage}>
            <SendOutlined />
          </div>
        </div>
      </div>
      {props.index !== 0 && (
        <div className='chatQuestBar'>
          <div className='chatQuestContain'>
            <div className='chatQuestTitle'>{objectivePrompt(nativeLanguage)}</div>
            <div className='chatQuests'>
              {props.quests.map((quest, i) => (
                <div key={i} className='chatQuestItem'>
                  <div className='chatQuestIcon'>{quest.complete ? <CheckCircleFilled /> : <StopOutlined />}</div>
                  <div>{quest.nativeQuestion}</div>
                </div>
              ))}
            </div>
          </div>
          <div className='chatQuestMenu'>
          <div className='chatQuestMenuItem' onClick={() => setHintOpen(true)}>
              <QuestionCircleOutlined />
              {hintPrompt(nativeLanguage)}
            </div>
            <div className='chatQuestMenuItem' onClick={() => setSettingsOpen(true)}>
              <SettingOutlined />
              {settingsPrompt(nativeLanguage)}
            </div>
            <div className='chatQuestMenuItem' onClick={() => setLevel(0)}>
              <LogoutOutlined />
              {exitPrompt(nativeLanguage)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const ChatImage: React.FC<ChatData & { responding: boolean; className: string }> = props => {
  if (props.agent.responsiveImage) {
    return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.responsiveImage}`} />
  }

  if (props.agent.baseImage) {
    return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.baseImage}`} />
  }

  return <div className='loadingChatImage'><Spin size='large' /></div>
}
