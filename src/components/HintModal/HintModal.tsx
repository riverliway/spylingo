import { Modal } from 'antd'
import React, { useEffect } from 'react'
import { useSettings } from '../../context/SettingsContext'
import { finishPrompt, hintPrompt } from '../../utils/prompts'
import { useChatInfo } from '../../context/ChatContext'

interface HintModalProps {
  open: boolean
  close: () => void
}

export const HintModal: React.FC<HintModalProps> = props => {
  const { level, nativeLanguage } = useSettings()
  const chats = useChatInfo()
  const hint = chats.chats[level].hint

  useEffect(() => {
    if (props.open) {
      chats.generateHint()
    } else {
      chats.clearHint()
    }
  }, [props.open])

  return (
    <Modal
      title={hintPrompt(nativeLanguage)}
      open={props.open}
      onCancel={props.close}
      onOk={props.close}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText={finishPrompt(nativeLanguage)}
      closeIcon={false}
    >
      {hint}
    </Modal>
  )
}
