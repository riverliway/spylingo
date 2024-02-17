import React, { useState } from 'react'
import { Input, Spin } from 'antd'
import { ChatData, useChatInfo } from '../../context/ChatContext'
import './ChatPage.css'
import { ChatBubble } from './ChatBubble'
import { SendOutlined } from '@ant-design/icons'

export const ChatPage: React.FC<ChatData & { index: number }> = props => {
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
            placeholder={isResponding ? '' : 'Type a message...'}
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
    </div>
  )
}

const ChatImage: React.FC<ChatData & { responding: boolean; className: string }> = props => {
  console.log(props.agent)

  if (props.responding) {
    if (props.agent.thinkingImage) {
      return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.thinkingImage}`} />
    }

    if (props.agent.baseImage) {
      return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.baseImage}`} />
    }

    return <div className={props.className}><Spin /></div>
  }

  if (props.messages.length > 0) {
    if (props.agent.responsiveImage) {
      return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.responsiveImage}`} />
    }

    if (props.agent.thinkingImage) {
      return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.thinkingImage}`} />
    }
  }

  if (props.agent.baseImage) {
    return <img className={props.className} src={`data:image/jpeg;base64, ${props.agent.baseImage}`} />
  }

  return <div className={props.className}><Spin /></div>
}
