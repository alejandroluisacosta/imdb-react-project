import { useState } from 'react'
import './App.css'
import { Navbar } from './navbar/Navbar.jsx'
import ListContainer from './List/ListContainer/ListContainer.jsx'

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
