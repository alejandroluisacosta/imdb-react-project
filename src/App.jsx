import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './navbar/Navbar.jsx'
import ListContainer from './List/ListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ListContainer/>
    </>
  )
}

export default App
