import React from 'react'
import { ChatMessage } from 'together-ai-sdk'
import './ChatBubble.css'

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
        {props.message.content}
      </div>
    </div>
  )
}
