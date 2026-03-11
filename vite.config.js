import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://tu-proyecto.vercel.app',
      routes: ['/', '/contacto'],
      outDir: 'dist',
      generateRobotsTxt: false, // 👈 añade esto
    }),
  ],
})
