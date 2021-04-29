import { defineConfig } from 'vite'

//Plugins
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {},
      workbox: {}
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
