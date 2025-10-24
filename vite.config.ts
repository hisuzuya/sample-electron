import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite設定ファイル
export default defineConfig({
  plugins: [react()],        // Reactプラグインを使用
  base: './',                // 相対パスでアセットを読み込む（Electron用）
  server: {
    port: 5173               // 開発サーバーのポート番号
  }
})
