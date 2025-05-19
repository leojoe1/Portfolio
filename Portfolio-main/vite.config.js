import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // mets bien le nom EXACT de ton repo GitHub ici (respecte la casse)
})
