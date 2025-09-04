import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
],
server:{
  host: true,
  port: '5173',
  allowedHosts:['all','63f04b15de8f.ngrok-free.app'],
}
})
