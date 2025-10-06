import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
 const [todos, setTodos] = ([])

 const addTodo = (todo) =>{
  setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])
 }

 const updateTodo = (id, todo) =>{
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id ===todo.id ? todo : prevTodo)))
 }

 const deleteTodo = (id) =>{
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
 }

 const toggleComplete = (id) =>{
  setTodos((prev) => prev.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
 }
  return (
    <TodoProvider values={{todos, addTodo,updateTodo,deleteTodo, toggleComplete}}>
   <h1 className="text-3xl font-bold underline bg-red-500">hello world</h1>
     
    </TodoProvider>
  )
}

export default App
