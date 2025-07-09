import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactUseCallBack from './customCallBack/ReactUseCallBack'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      Light Switch
      <ReactUseCallBack/>
    </>
  )
}

export default App
