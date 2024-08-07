import React, { useState } from 'react'
import './App.css'
import Manager from './components/Manager'
import Includer from './components/Includer'
import Remover from './components/Remover'


function App() {
  const [appState, setAppState] = useState("managing")
  const [activeUser, setActiveUser] = useState("no user")
  const [users, setUsers] = useState([])

  function enableUser(anUserName) {
    setActiveUser(anUserName)
  }//enableUser

  function remove(anUserName) {
    if (anUserName) {
      const newArray = user.filter((user) =>
        user !== anUserName)

      setUsers(newArray)

      if (anUserName == activeUser) {
        setActiveUser("no user")
      }//if

    }//if

    setManaging()

  }//remove

  function insert(anUserName) {
    if (anUserName) {
      if (!users.includes(anUserName)) {
        const ewArray = [...users, anUserName]
        setUsers(newArray)
      }//if
    }//if
    setManaging()
  }//insert

  function setInsert() {
    setAppState("inserting")
  }//setInsert

  function setRemove() {
    setAppState("removing")
  }//setRemove

  function setManaging() {
    setAppState("managing")
  }//setManaging

  return (

    <div>
      {appState === "managing" ? (
        <Manager users={users} activeUser={activeUser}
          sentEnableUser={enableUser}
          senSetRemove={setRemove}
          sentSetInsert={setInsert} />
      ) : (appState === "inserting" ? (
        <Includer sentInsert={insert}
          sentSetManaging={setManaging} />
      ) : ( //appState === "removing"
        <Remover users={users} sentRemove={remove}
          sentSteManaging={setManaging} />
      )
      )}
    </div>


  )
}

export default App
