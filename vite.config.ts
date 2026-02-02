import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Auto-open browser on start
    open: true,
    // HMR configuration
    hmr: {
      overlay: true,
    },
    // Watch for file changes
    watch: {
      usePolling: true,
    },
  },
})
