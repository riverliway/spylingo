import { Modal } from 'antd'
import React, { useEffect } from 'react'
import { useSettings } from '../../context/SettingsContext'
import { correctionPrompt, finishPrompt } from '../../utils/prompts'
import { useChatInfo } from '../../context/ChatContext'

interface CorrectionModalProps {
  messageIndex: number | undefined
  open: boolean
  close: () => void
}

export const CorrectionModal: React.FC<CorrectionModalProps> = props => {
  const { level, nativeLanguage } = useSettings()
  const chats = useChatInfo()
  const correction = props.messageIndex !== undefined ? chats.chats[level].messages[props.messageIndex].correction : undefined

  useEffect(() => {
    if (props.open && correction?.length === 0 && props.messageIndex !== undefined) {
      chats.correctMessage(props.messageIndex)
    }
  }, [props.open, correction, props.messageIndex])

  return (
    <Modal
      title={correctionPrompt(nativeLanguage)}
      open={props.open}
      onCancel={props.close}
      onOk={props.close}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText={finishPrompt(nativeLanguage)}
      closeIcon={false}
    >
      {correction}
    </Modal>
  )
}
