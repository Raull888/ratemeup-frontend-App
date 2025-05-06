import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Vite genera la carpeta 'dist' al hacer build
  },
  server: {
    port: 3000
  }
})
