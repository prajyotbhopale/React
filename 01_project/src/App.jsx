import { useState } from 'react'

import './App.css'

function App() {
  const [counter , setCounter] = useState(15)

  const addValue = () =>{
  setCounter((counter) => counter + 1)
  setCounter((counter) => counter + 1)
  setCounter((counter) => counter + 1)
  setCounter((counter) => counter + 1)
}

const removeVal = () =>{
  setCounter(counter - 1)
}
  return (
    <>
    <h1>Course Starts here {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>{" "}
    <button onClick={removeVal}>Remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
