import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

// ESモジュールで__dirnameを使用するための設定
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

// ウィンドウを作成する関数
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,      // セキュリティのためNode.js統合を無効化
      contextIsolation: true        // コンテキスト分離を有効化
    }
  })

  // 開発環境ではViteの開発サーバーを使用
  if (!app.isPackaged && process.env.NODE_ENV !== 'production') {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    // 本番環境ではビルドされたファイルを使用
    // app.getAppPath()を使用してアプリケーションのルートパスを取得
    const indexPath = path.join(app.getAppPath(), 'dist', 'index.html')
    mainWindow.loadFile(indexPath)
    // デバッグ用に開発者ツールを開く
    mainWindow.webContents.openDevTools()
  }

  // ウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// アプリケーションの準備ができたらウィンドウを作成
app.whenReady().then(createWindow)

// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  // macOS以外ではアプリケーションを終了
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// アプリケーションがアクティブになったときの処理（macOS）
app.on('activate', () => {
  // ウィンドウがない場合は新しく作成
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
