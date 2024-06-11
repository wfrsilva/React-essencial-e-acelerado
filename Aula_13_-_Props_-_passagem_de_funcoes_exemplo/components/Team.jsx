import React from 'react'
import User from './User'

function Team(props) {
  return (
    <div className='team'>
        < User name={props.users[0]} sentFunction={props.sentFunction} />
        < User name={props.users[1]} sentFunction={props.sentFunction} />
    </div>
  )
}

export default Team