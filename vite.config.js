import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {

    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: '@scss',
        replacement: resolve(__dirname, 'src/scss')
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets')
      },
      {
        find: '~bootstrap',
        replacement: resolve(__dirname, 'node_modules/bootstrap')
      }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@scss/main";`
      }
    }
  },

  plugins: [react()],
})
