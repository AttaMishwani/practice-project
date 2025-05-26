// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ THIS IS CORRECT FOR ROOT DEPLOYMENT
  plugins: [react()],
})
