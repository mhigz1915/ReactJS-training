import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
const App = () => {
//function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <b>ACtivity 2 - Part 1</b>
    
   <Form />
    </>
  )
}

export default App
