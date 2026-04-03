import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "primeicons/primeicons.css";`
      }
    }
  },
  assetsInclude: ['**/node_modules/primeicons/fonts/*'],
  build: {
    chunkSizeWarningLimit: 1200,
    outDir: 'dist',

    // Optional code-splitting logic
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          firebase: ['firebase/app', 'firebase/firestore']
        }
      }
    }
  },
  server: {
    fs: { allow: ['.', 'node_modules'] }
  }
})
