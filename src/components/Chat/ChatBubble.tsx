import React, { useEffect, useState } from 'react'
import './ChatBubble.css'
import { ChatMessage } from '../../context/ChatContext'
import { CloseOutlined, SoundOutlined, TranslationOutlined } from '@ant-design/icons'

interface ChatBubbleProps {
  message: ChatMessage | undefined
  onHover: (hovering: boolean) => void
  showActionItems: boolean
  isPlayingAudio: boolean
  playAudio: () => void
  translateWholeMessage: () => void
  translateWord: (word: string) => void
  clearExtraContent: () => void
}

export const ChatBubble: React.FC<ChatBubbleProps> = props => {
  const [segments, setSegments] = useState<string[]>([])

  useEffect(() => {
    if (props.message?.finishedGenerating && props.message.role === 'assistant') {
      setSegments(props.message?.content.split(' '))
    }
  }, [props.message?.finishedGenerating])

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
              <div
                className={`chatBubbleActionIcon ${props.isPlayingAudio ? 'chatBubbleActionIconDisabled chatBubbleActionIconSelected' : ''}`}
                onClick={props.playAudio}
              >
                <SoundOutlined />
              </div>
              <div
                className={`chatBubbleActionIcon ${props.message?.extraContent !== undefined ? 'chatBubbleActionIconSelected' : ''}`}
                onClick={props.translateWholeMessage}
              >
                <TranslationOutlined />
              </div>
            </>
          )}
        </div>
      )}
      {props.message !== undefined && (
        <div className={`chatBubble ${bubbleClassName}`}>
          <div className='chatBubbleContents'>
            <div>
              {segments.length === 0 ? props.message?.content : segments.map((segment, i) => (
                <span key={i} className='chatBubbleSegment' onClick={() => props.translateWord(segment)}>{segment} </span>
              ))}
            </div>
            {props.message?.appendContent !== undefined && props.message.appendContent}
          </div>
          {props.message?.extraContent !== undefined && (
            <div className='chatBubbleExtra'>
              <div>{props.message.extraContent}</div>
              <CloseOutlined className='chatBubbleExtraClose' onClick={props.clearExtraContent} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
