import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs"
  },
  base: "/doudou/",
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      registerType: 'autoUpdate',
      includeAssets: ['./goose.png'],
      manifest: {
        start_url: "./doudou/",
        name: '豆豆和鸟鸟的日子',
        short_name: '豆豆和鸟鸟',
        description: '豆豆和鸟鸟的纪念日！',
        lang: "zh-CN",
        theme_color: '#ffffff',
        icons: (['16', '32', '48', '64', '96', '128', '192', '256', '512']).map((size) => ({
          src: 'goose.png',
          sizes: `${size}x${size}`,
          type: 'image/png',
          purpose: "any maskable"
        })
        )
      }
    })
  ]
})
