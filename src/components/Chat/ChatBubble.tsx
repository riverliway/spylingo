import React, { useState } from 'react'
import { ChatMessage } from 'together-ai-sdk'
import './ChatBubble.css'

interface ChatBubbleProps {
  message: ChatMessage
}

export const ChatBubble: React.FC<ChatBubbleProps> = props => {
  const [isResponding, setIsResponding] = useState(false)

  if (props.message.role === 'system') {
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
