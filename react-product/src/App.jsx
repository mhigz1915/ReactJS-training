import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import ReactList from './components/ReactList'

const App =() => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{border:'5px solid blue', padding:'20px'}}> 
        <ReactList />

    </div>
    </>
  )
}

export default App
