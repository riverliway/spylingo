import React, { useState } from 'react'
import { Input, Spin } from 'antd'
import { LogoutOutlined, SendOutlined, SettingOutlined } from '@ant-design/icons'

import { ChatData, useChatInfo } from '../../context/ChatContext'
import './ChatPage.css'
import { ChatBubble } from './ChatBubble'
import { exitPrompt, settingsPrompt, typeMessagePrompt } from '../../utils/prompts'
import { useSettings } from '../../context/SettingsContext'
import { SettingsModal } from '../SettingsModal/SettingsModal'

export const ChatPage: React.FC<ChatData & { index: number }> = props => {
  const { nativeLanguage, setLevel } = useSettings()
  const chatData = useChatInfo()
  const [sendingContent, setSendingContent] = useState('')
  const [isResponding, setIsResponding] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [hoverStates, setHoverStates] = useState<number[]>([])

  const sendMessage = async (): Promise<void> => {
    if (sendingContent.length === 0) return

    const content = sendingContent
    setSendingContent('')
    setIsResponding(true)

    await chatData.sendMessage(props.index, content)

    setIsResponding(false)
  }
  
  return (
    <div className='chatWindowContain'>
      <SettingsModal open={settingsOpen} close={() => setSettingsOpen(false)} />
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
            playAudio={() => chatData.playAudio(0)}
            translateWholeMessage={() => chatData.translateMessage(0)}
            clearExtraContent={() => {}}
          />
          {props.messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              onHover={isHovering => setHoverStates(h => h.filter(i => i !== index).concat(isHovering ? [index] : []))}
              showActionItems={props.index === 0 ? false : hoverStates.includes(index) || hoverStates.includes(index + 1)}
              isPlayingAudio={props.messages.length > index + 1 ? props.messages[index + 1].isPlayingAudio : false}
              playAudio={() => chatData.playAudio(index + 1)}
              translateWholeMessage={() => chatData.translateMessage(index + 1)}
              clearExtraContent={() => chatData.clearExtraContent(index)}
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
          <div>quest items</div>
          <div className='chatQuestMenu'>
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
