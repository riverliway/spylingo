import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { Router } from './components/Router/Router'
import { ApiProvider } from './context/apiContext'
import { SettingsProvider } from './context/SettingsContext'
import { ChatInfoProvider } from './context/ChatContext'

/**
 * The main component that wraps the entire application
 */
const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <ApiProvider>
        <SettingsProvider>
          <ChatInfoProvider>
            <Router />
          </ChatInfoProvider>
        </SettingsProvider>
      </ApiProvider>
    </ConfigProvider>
  )
}

export default App
