import React from 'react'

function GameMessage(props) {
  return (
    <div className='text'>
        <h3>{props.message}</h3>
    </div>
  )
}

export default GameMessage