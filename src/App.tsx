import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { Router } from './components/Router/Router'

/**
 * The main component that wraps the entire application
 */
const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Router />
    </ConfigProvider>
  )
}

export default App
