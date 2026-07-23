import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: process.env.VERCEL ? '/' : (process.env.VITE_BASE_URL || '/Portfolio/'),
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'profile_tie.png'],
      manifest: {
        name: 'Koketso Raphasha — Software Engineer',
        short_name: 'Koketso OS',
        description: 'Software Engineer & Systems Architect | AI, Full-Stack, Distributed Systems',
        theme_color: '#00FF9C',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/profile_tie.png', sizes: '683x1024', type: 'image/png', purpose: 'any' },
          { src: '/profile_tie.png', sizes: '683x1024', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
})