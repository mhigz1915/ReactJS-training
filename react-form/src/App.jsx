import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Forms'
import Buttons from './components/Buttons'
//function App() {
const App =() => {
  const [count, setCount] = useState(0)

  return (
    <>
     <Forms />
     <Buttons />
    </>
  )
}

export default App
