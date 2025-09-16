import { useState } from 'react'
import { transformText } from './utils'
import './App.css'

function App() {
  const [input, setInput] = useState<string>('')
  const text = transformText(input)

  return (
    <>
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ width: 400, height: 40, fontSize: 24 }}
        />
      </div>
      <div style={{ marginTop: 20, fontSize: 24, height: 120 }}>
        {text}
      </div>
    </>
  )
}

export default App
