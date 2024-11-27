import React, { useState } from 'react'
import './App.css'
import ListComp from './components/List_Key/ListComp'
import Eventhandel from './components/UseState/EventHandel'
import UseState from './components/UseState/UseState'
import DynamicComp from './components/List_Key/DynamicComp'
import Controll from './components/Controlled/Controll'
import UnControll from './components/Controlled/Uncontroll'
import MultiControll from './components/Controlled/multiControll'

function App() {
  const [list, setList] = useState(['Home','Work', 'About', 'Contace', 'Service'])

  return(
    <React.Fragment>
      {/* <UseState /> */}
      {/* <Eventhandel /> */}
      {/* <ListComp list={list} />
      <DynamicComp list={list} /> */}
      {/* <Controll />
      <UnControll /> */}
      <MultiControll />
    </React.Fragment>
  )
}

export default App
