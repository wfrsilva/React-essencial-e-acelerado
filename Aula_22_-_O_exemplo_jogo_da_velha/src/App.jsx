import { useState } from 'react'
import jogoVelhaLogo from '/jogo-velha.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={jogoVelhaLogo} className="logo velha" alt="Logo Jogo da Velha" />
    <h1>Aula 22 - O exemplo jogo da velha</h1>
    </>
  )
}

export default App
