import { Modal, Switch } from 'antd'
import React from 'react'
import { useSettings } from '../../context/SettingsContext'
import { finishPrompt, settingsAutoPlayAudioPrompt, settingsPrompt } from '../../utils/prompts'
import './SettingsModal.css'

interface SettingsModalProps {
  open: boolean
  close: () => void
}

export const SettingsModal: React.FC<SettingsModalProps> = props => {
  const settings = useSettings()

  return (
    <Modal
      title={settingsPrompt(settings.nativeLanguage)}
      open={props.open}
      onCancel={props.close}
      onOk={props.close}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText={finishPrompt(settings.nativeLanguage)}
      closeIcon={false}
    >
      <div className='settingsModalContain'>
        <div className='settingsModalItem'>
          <Switch value={settings.autoPlayAudio} onChange={e => settings.setAutoPlayAudio(e.valueOf())} />
          <div>{settingsAutoPlayAudioPrompt(settings.nativeLanguage)}</div>
        </div>
      </div>
    </Modal>
  )
}
