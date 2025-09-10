import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("");
  const [visible, setVisibility] = useState(false)

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

      <div className='4b'>
        <h1>{text}</h1>
        <input type="text" onChange={(event) => setText(event.target.value)}/>
      </div>

      {visible && 
        <div className='visibility' style={{color: 'gray', fontSize: "18px"}}>
          <h1>nao invisivel</h1>
        </div>}

        <button onClick={() => {setVisibility(visible == true ? false :true)}}>
          Set Visibility
        </button>
    </>
  )
}
export default App
