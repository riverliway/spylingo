import React from 'react'
import './ChatBubble.css'
import { ChatMessage } from '../../context/ChatContext'

interface ChatBubbleProps {
  message: ChatMessage
}

export const ChatBubble: React.FC<ChatBubbleProps> = props => {
  if (props.message.role === 'system') {
    return <></>
  }

  if (props.message.content.length === 0) {
    return <></>
  }

  const containClassName = props.message.role === 'user' ? 'chatBubbleContainUser' : ''
  const bubbleClassName = props.message.role === 'user' ? 'chatBubbleUser' : ''

  return (
    <div className={`chatBubbleContain ${containClassName}`}>
      <div className={`chatBubble ${bubbleClassName}`}>
        <div className='chatBubbleContents'>
          <div>{props.message.content}</div>
          {props.message.appendContent !== undefined && props.message.appendContent}
        </div>
        {props.message.extraContent !== undefined && <div className='chatBubbleExtra'>{props.message.extraContent}</div>}
      </div>
    </div>
  )
}
