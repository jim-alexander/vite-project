import { defineConfig } from 'vite'

//Plugins
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'

let manifest = {
  start_url: '.',
  theme_color: '#ffffff',
  icons: [
    {
      src: '/src/assets/icons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/src/assets/icons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest,
      workbox: {}
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
