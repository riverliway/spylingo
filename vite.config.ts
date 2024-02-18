import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    TOGETHER_API_KEY: JSON.stringify(process.env.TOGETHER_API_KEY),
    ELEVEN_LABS_KEY: JSON.stringify(process.env.ELEVEN_LABS_KEY),
    OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY)
  }
})
