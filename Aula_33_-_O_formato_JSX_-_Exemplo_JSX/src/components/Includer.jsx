import React, { useState } from 'react'

function Includer(props){
    const [textInput, setTextInput]=useState('')
    const handleInputChange = (e) => {
        setTextInput(e.target.value)
    }


function insert(){
    props.sentInsert(textInput)
    setTextInput('')
}//insert

function setManaging(){
    props.sentSetManaging()
}//setManaging


    return (
      <div>
        <div className='aux'>
            <h1>Inserir nome do usuario:</h1>
            <input type= "text" id="textInput" name="textInput" value={textInput} onChange={handleInputchange} />
        </div>
        <div className='aux'>
            <button onClick={insert}>OK</button>
            <button onClick={setManaging}>Cancelar</button>
        </div>
      </div>
    )

}//Includer