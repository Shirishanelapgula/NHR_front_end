import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Sample from "./components/State/State"
import Addstate from "./components/Addstate/Addstate"
import  AddTask from "./components/AddTask/AddTask"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Maincontainer} from './styledComponent.js'

function App() {
  return (
    <>
       <Maincontainer className='main-container'>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/edit" element={<Addstate/>}></Route>
          <Route path="/edit/task" element={<AddTask/>}></Route>
        </Routes>
       </Maincontainer> 
    </>
  )
}

export default App


// build home page should consist of 4 stages and with two buttons for adding a task and adding new state
// adding new task need a new route for adding the details of the task
// adding new state we need have button which will option to add new state of the task