import { useState } from 'react'

// メインアプリケーションコンポーネント
function App(): JSX.Element {
  // カウンターの状態を管理（React Hooks使用）
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Electron + React + Vite + TypeScript</h1>
      <p>シンプルなElectronアプリケーション</p>
      <div style={{ marginTop: '30px' }}>
        {/* クリックするとカウントが増えるボタン */}
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          カウント: {count}
        </button>
      </div>
    </div>
  )
}

export default App
