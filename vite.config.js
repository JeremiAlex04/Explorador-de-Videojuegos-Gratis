// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/games': {
        target: 'https://www.freetogame.com/api/games',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/games/, '')
      },
      '/api/game': {
        target: 'https://www.freetogame.com/api/game',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/game/, '')
      }
    }
  }
})
