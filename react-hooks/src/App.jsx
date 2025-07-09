import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactUseCallBack from './customCallBack/ReactUseCallBack'
import ColorPicker from './ColorPicker/ColorPicker'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      Light Switch
      <hr/>
      Activity 2 - Part 1
      <ReactUseCallBack/>
      <hr/>
      Activity 2 - Part 2
      <hr/>
      <ColorPicker/>
    </>
  )
}

export default App
