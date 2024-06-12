import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
      setCount(value => value + 1)
  }

  function decrement() {
    setCount(value => value -1)
  }

  return (
    <div>
      <h1>Exemplo useState</h1>
      <h1>Valor: {count}</h1>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
    </div>
  )
}

export default App