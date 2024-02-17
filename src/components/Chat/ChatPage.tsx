import React from 'react'
import { ChatData } from '../../context/ChatContext'

export const ChatPage: React.FC<ChatData> = props => {
  console.log(props)

  return (
    <div className='chatWindowContain'>
      <div className='imageContain'>
        {props.agent.baseImage && (
          <img src={`data:image/jpeg;base64, ${props.agent.baseImage}`} alt='user' />
        )}
      </div>
      <div className='chatHistoryContain'>

      </div>
    </div>
  )
}
