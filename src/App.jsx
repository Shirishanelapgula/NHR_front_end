import {Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Addstate from "./components/Addstate/Addstate"
import  AddTask from "./components/AddTask/AddTask"
import {Maincontainer} from './styledComponent.js'


export const BACKEND_URL = "https://nhr-backend.onrender.com"

console.log(BACKEND_URL)

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