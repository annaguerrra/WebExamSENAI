import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
        <h1>4.a Contador</h1>
        <div className="card">
        <h1 className='count'>{count}</h1>
   
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
