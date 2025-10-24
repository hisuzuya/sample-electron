import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Electron + React + Vite</h1>
      <p>シンプルなElectronアプリケーション</p>
      <div style={{ marginTop: '30px' }}>
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
