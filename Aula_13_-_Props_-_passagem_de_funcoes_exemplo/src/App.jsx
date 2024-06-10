import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Team from './components/Team'

function App() {
  const [userName, setUsername] = useState("no user")

  function enableUser(anUserName){
    setUsername(anUserName);
  }

  return (
    <div>
      <Display message = {"Usuário ativo: " +  userName } />
      <Team users = {["Alice", "Manoel"]} sentFunction={enableUser}/>
    </div>
  )
}

export default App
