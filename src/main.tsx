import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Reactアプリケーションのエントリーポイント
// StrictModeを使用して開発時の潜在的な問題を検出
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
