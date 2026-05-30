import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Never expose source maps in production — keeps bundle private
    sourcemap: false,

    // Use esbuild for fast, efficient minification
    minify: 'esbuild',

    // Warn when any individual chunk exceeds 600 KB
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — changes rarely, maximises long-term cache hits
          vendor: ['react', 'react-dom'],

          // Animation library — isolated so app updates don't bust its cache
          animations: ['framer-motion'],
        },
      },
    },
  },
})

