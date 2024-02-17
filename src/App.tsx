import React from 'react'
import { ConfigProvider, theme } from 'antd'

/**
 * The main component that wraps the entire application
 */
const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <div>Hello World!</div>
    </ConfigProvider>
  )
}

export default App
