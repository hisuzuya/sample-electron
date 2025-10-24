import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite設定ファイル
export default defineConfig({
  plugins: [react()],        // Reactプラグインを使用
  base: './',                // 相対パスでアセットを読み込む（Electron用）
  root: 'src',               // プロジェクトルートをsrcに設定
  publicDir: '../public',    // 静的アセットディレクトリ
  build: {
    outDir: '../dist',       // ビルド出力先
    emptyOutDir: true        // ビルド前に出力ディレクトリをクリア
  },
  server: {
    port: 5173               // 開発サーバーのポート番号
  }
})
