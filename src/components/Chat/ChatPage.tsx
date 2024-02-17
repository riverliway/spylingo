import React, { useState } from 'react'
import { Input, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'

import { ChatData, useChatInfo } from '../../context/ChatContext'
import './ChatPage.css'
import { ChatBubble } from './ChatBubble'
import { typeMessagePrompt } from '../../utils/prompts'
import { useSettings } from '../../context/SettingsContext'

export const ChatPage: React.FC<ChatData & { index: number }> = props => {
  const { nativeLanguage } = useSettings()
  const chatData = useChatInfo()
  const [sendingContent, setSendingContent] = useState('')
  const [isResponding, setIsResponding] = useState(false)

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
      <div className='imageContain'>
        <ChatImage {...props} responding={isResponding} className='chatImage' />
      </div>
      <div className='chatInterface'>
        <div className='chatHistoryContain'>
          {props.messages.map((message, i) => (
            <ChatBubble key={i} message={message} />
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
