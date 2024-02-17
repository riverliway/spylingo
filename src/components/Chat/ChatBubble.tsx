import React from 'react'
import './ChatBubble.css'
import { ChatMessage } from '../../context/ChatContext'
import { SoundOutlined, TranslationOutlined } from '@ant-design/icons'

interface ChatBubbleProps {
  message: ChatMessage | undefined
  onHover: (hovering: boolean) => void
  showActionItems: boolean
  isPlayingAudio: boolean
  playAudio: () => void
}

export const ChatBubble: React.FC<ChatBubbleProps> = props => {
  if (props.message?.role === 'system') {
    return <></>
  }

  if (props.message?.content.length === 0) {
    return <></>
  }

  const containClassName = props.message?.role === 'user' ? 'chatBubbleContainUser' : ''
  const bubbleClassName = props.message?.role === 'user' ? 'chatBubbleUser' : ''

  return (
    <div
      className={`chatBubbleContain ${containClassName}`}
      onMouseEnter={() => props.onHover(true)}
      onMouseLeave={() => props.onHover(false)}
    >
      {(props.message?.role === 'user' || props.message === undefined) && (
        <div className='chatBubbleActionItems'>
          {props.showActionItems && (
            <>
              <div className={`chatBubbleActionIcon ${props.isPlayingAudio ? 'chatBubbleActionIconDisabled' : ''}`} onClick={props.playAudio}>
                <SoundOutlined />
              </div>
              <div className='chatBubbleActionIcon'>
                <TranslationOutlined />
              </div>
            </>
          )}
        </div>
      )}
      {props.message !== undefined && (
        <div className={`chatBubble ${bubbleClassName}`}>
          <div className='chatBubbleContents'>
            <div>{props.message?.content}</div>
            {props.message?.appendContent !== undefined && props.message.appendContent}
          </div>
          {props.message?.extraContent !== undefined && <div className='chatBubbleExtra'>{props.message.extraContent}</div>}
        </div>
      )}
    </div>
  )
}
