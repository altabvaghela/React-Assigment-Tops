import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './Component/FormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormComponent id="01" name="ABC" salary="100000" />
    </>
  )
}

export default App
