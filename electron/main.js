import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
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

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
