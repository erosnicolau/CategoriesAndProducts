import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper/>
      </div>
    </BrowserRouter>
  )
}

export default App
