import React, { useState } from 'react'
import List from './Components/List'
import AddTodo from './Components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  )
}
export default App

//This will store the data of the array. and pass that data to its children.