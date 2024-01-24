import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  server: {
    host: '0.0.0.0', // 外部からのアクセスを許可
    port: 5173, // 必要に応じてポートを調整,
  },
  plugins: [
    vue(),
  ]
})
