import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // <-- Added font handling for PrimeIcons
  css: {
    preprocessorOptions: {
      css: {
        // ensure fonts in node_modules/primeicons are processed
        additionalData: `@import "primeicons/primeicons.css";`
      }
    }
  },
  // Assets include for fonts
  assetsInclude: ['**/node_modules/primeicons/fonts/*'],
  server: {
    fs: {
      // allow serving files from project root & node_modules
      allow: ['.','node_modules']
    }
  }
})
