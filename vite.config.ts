import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/2025history/', // 리포 이름에 맞게!
  plugins: [react()],
})
