import { useEffect, useState } from 'react'
import GameHeader from './components/GameHeader'
import Board from './components/Board'
import GameMessage from './components/GameMessage'
import './app.css'
import axios from "axios"
import jogoVelhaLogo from '/jogo-velha.svg'

function App() {
  const headerText = ["Jogo da Velha", "(Dificuldade: Kobayashi Maru)"]
  const[gameMessage, setGameMessage] = useState(()=> { return "Carregando..."})
  const[gameMatrix, setGameMatrix] = useState(()=> { return [[0,1,0],[1,2,1],[0,1,0]]})
  const[url,setUrl] = useState("")

  function generateId(){
    let d = new Date();
    let aTime = d.getTime();
    let timeString = aTime.toString(10);
    let truncatedTimeString = timeString.slice(6,13);
    let newTempIdValue = parseInt(truncatedTimeString);
    
    return newTempIdValue;
  }

  function get_userId(){
    let jv_local_id = localStorage.getItem("jv_local_id");
    
    if(jv_local_id == null){
      jv_local_id = generateId();
      localStorage.setItem("jv_local_id", jv_local_id);
    }

    return jv_local_id;
  }

  useEffect(()=> {
    const id = get_userId()
    const url = "https://dogserver.pythonanywhere.com/" + id + "/"
    setUrl(url)
  },[])

  useEffect(()=> {
    if(url){
      axios.get(url)
        .then(gameState => {
          setGameMessage(gameState.data[0])
          setGameMatrix(gameState.data[1][0])
        })
    }
  },[url])

  function handlePositionClick(id){
    const[line,column] = id;
    const data = 'line='+(line+1)+'&column='+(column+1);
    axios.post(url,data)
      .then(gameState => {
        setGameMessage(gameState.data[0])
        setGameMatrix(gameState.data[1][0])
      });
  }

  return (
    <div className='container'>
    <GameHeader title={headerText} />
    <Board matrix={gameMatrix} onPositionClick={handlePositionClick} />
    <GameMessage message={gameMessage} />
    </div>
  )
}

export default App
