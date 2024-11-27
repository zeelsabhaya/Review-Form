import React, { useState } from 'react'
import './App.css'
import MultiControll from './components/Controlled/multiControll'

function App() {
  const [list, setList] = useState(['Home','Work', 'About', 'Contace', 'Service'])

  return(
    <MultiControll />
  )
}

export default App
