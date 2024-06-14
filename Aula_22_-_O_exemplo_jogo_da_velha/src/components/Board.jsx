import React from 'react'
import Position from './Position'

function Board() {
  return (
    <div className='board'>
        <Position id={[0,0]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[0,1]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[0,2]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        
        <Position id={[1,0]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[1,1]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[1,2]} matrix={props.matrix} onPositionClick={props.onPositionClick} />

        <Position id={[2,0]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[2,1]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
        <Position id={[2,2]} matrix={props.matrix} onPositionClick={props.onPositionClick} />
    </div>
  )
}

export default Board