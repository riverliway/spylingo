import React, { useEffect, useState } from 'react'
import './ChatBubble.css'
import { ChatMessage, useChatInfo } from '../../context/ChatContext'
import { CloseOutlined, FlagOutlined, FlagTwoTone, InfoCircleTwoTone, SoundOutlined, TranslationOutlined } from '@ant-design/icons'
import { useSettings } from '../../context/SettingsContext'

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
  const { level } = useSettings()
  const chatInfo = useChatInfo()
  const [segments, setSegments] = useState<string[]>([])
  const [selectedWord, setSelectedWord] = useState<string | undefined>()

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

  const isBookmarked = chatInfo.chats[level].bookmarks.includes(selectedWord ?? 'sadfnco98ewryiwcerqwo8r')
  const bookmarkProps = {
    onClick: () => isBookmarked ? chatInfo.removeBookmark(selectedWord!) : chatInfo.bookmark(selectedWord!),
    className: 'chatBubbleExtraClose'
  }

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
        <div className={props.message.role === 'user' ? 'chatBubbleAndCorrection' : ''}>
          {props.message.role === 'user' && props.message.correction !== undefined && (
            <div className='chatCorrectionIcon'>
              <InfoCircleTwoTone />
            </div> 
          )}
          <div className={`chatBubble ${bubbleClassName}`}>
            <div className='chatBubbleContents'>
              <div>
                {segments.length === 0 ? props.message?.content : segments.map((segment, i) => (
                  <span key={i} className='chatBubbleSegment' onClick={() => { setSelectedWord(segment); props.translateWord(segment) }}>{segment} </span>
                ))}
              </div>
              {props.message?.appendContent !== undefined && props.message.appendContent}
            </div>
            {props.message?.extraContent !== undefined && (
              <div className='chatBubbleExtra'>
                <div>{props.message.extraContent}</div>
                <div className='chatBubbleExtraIcons'>
                  <CloseOutlined className='chatBubbleExtraClose' onClick={() => {setSelectedWord(undefined); props.clearExtraContent()}} />
                  {isBookmarked ? <FlagTwoTone {...bookmarkProps} /> : <FlagOutlined {...bookmarkProps} />}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
