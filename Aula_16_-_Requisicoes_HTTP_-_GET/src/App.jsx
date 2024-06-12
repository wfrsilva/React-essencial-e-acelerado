import React, { useState } from 'react'
import axios from "axios"

function App() {
  const [gameState, setGameState] = useState("Carregando ...")
  const url = "https://dogserver.pythonanywhere.com/555"

  axios.get(url)
    .then(response => {
      setGameState(JSON.stringify(response.data))
    })

  return (
    <div>
      
      <h1>Exemplo requisições HTTP - GET </h1>
      <h2>{gameState}</h2>
    </div>
  )
}

export default App
