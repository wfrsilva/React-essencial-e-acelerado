import React, {useState, useEffect} from 'react'
import './app.css'

function App() {
  const [count, setCount]= useState(0);
  const[description, setDescription]= useState('nulo');

  useEffect(()=> {
    let newDescription = ''
    if (count > 0){
      newDescription = 'positivo.'
    }else if(count < 0){
      
      newDescription = 'negativo.'
    }else{
        newDescription = 'nulo.'
    }
    
    setDescription(newDescription)
  }, [count])

  function increment() {
    setCount(value => value + 1)
  }

  function decrement(){
    setCount(value => value - 1)
  }

  return (
    <div>
      <h1>Exemplo useEffect v1.1</h1>
      <h1>Valor: {count}</h1>
      <h2>O valor é {description}</h2>
      <button onClick={increment}>incrementar (+)</button>
      <button onClick={decrement}>decrementar (-)</button>
    </div>
  )
}

export default App