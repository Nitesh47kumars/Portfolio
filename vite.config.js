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
  allowedHosts:['all','5ba7a9a82f9b.ngrok-free.app'],
}
})
