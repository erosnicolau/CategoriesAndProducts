import { useState } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Wrapper/>
    </div>
  )
}

export default App
