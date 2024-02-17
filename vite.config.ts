import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    TOGETHER_API_KEY: JSON.stringify(process.env.TOGETHER_API_KEY)
  }
})