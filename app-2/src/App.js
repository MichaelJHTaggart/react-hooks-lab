import React, { useState, useEffect } from 'react'
import ListItem from './components/ListItem'
import axios from 'axios'
import './App.css'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return (
    <div>
      {list.map((element, index) => {
        return <ListItem name={element.name} key={index} />
      })}
    </div>
  )

}
export default App