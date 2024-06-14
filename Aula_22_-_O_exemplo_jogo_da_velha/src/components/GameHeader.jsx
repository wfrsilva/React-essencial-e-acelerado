import React from 'react'

function GameHeader(props) {
  return (
    <div className='text'>
        <h1>{props.title[0]}</h1>
        <h3>{props.title[1]}</h3>
    </div>
  )
}

export default GameHeader