import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs"
  },
  base: "/doudou/",
  plugins: [
    reactRefresh(),
    VitePWA({
      mode: "development",
      registerType: 'autoUpdate',
      includeAssets: ['./doudou.png'],
      manifest: {
        start_url: "https://qihexiang.github.io/doudou/",
        name: '豆豆和鸟鸟的日子',
        short_name: '豆豆和鸟鸟',
        description: '豆豆和鸟鸟的纪念日！',
        lang: "zh-CN",
        theme_color: '#ffffff',
        icons: (['16', '32', '48', '64', '96', '128', '192', '256', '512']).map((size) => ({
          src: 'doudou.png',
          sizes: `${size}x${size}`,
          type: 'image/png',
          purpose: "any maskable"
        })
        )
      }
    })
  ]
})
