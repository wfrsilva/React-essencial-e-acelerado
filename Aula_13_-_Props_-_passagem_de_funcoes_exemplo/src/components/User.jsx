import React from 'react'

function User(props) {

    function handleClick(){
        props.sentFunction(props.name);
    }

  return (
    <div className= 'user'>
        <h3>{ "Usuário: " + props.name}</h3>
        <button onClick={handleClick}>Selecionar</button>
    </div>
  )
}

export default User