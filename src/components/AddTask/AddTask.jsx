import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import { BACKEND_URL } from "../../App"

import {Editcontainer,Card,InputForm,TextInput,Button,Title,Label,Select,Option} from "./styledComponent.js"

const Addtask=(props)=>{
    const navigate = useNavigate()

    const [assignedTo ,setTaskAssignedTo]=useState("")
    const [taskStatus ,editTaskStatus]=useState("Open")
    const [category ,editCategory]=useState("")
    const [presentStates, statePresentState]=useState([])


    const updateTaskStatus = (event)=>{
        console.log(event.target.value)
        editTaskStatus(event.target.value)
    }

    const addTaskToApi= async (taskData)=>{
        try{
            console.log(taskData)
            await axios.post(`${BACKEND_URL}/test/task/add`,taskData)
            navigate("/")
        }
        catch(error){
            console.log(error.message)
        }
    }

    const getState= async ()=>{
        try{
            const statePresent = await axios.get(`${BACKEND_URL}/test/state/get`)
            statePresentState(statePresent.data)

        }
        catch(error){
            console.log(error.message)
        }

    }

    const callSetDataFn=()=>{
        const taskData = {assignedTo:assignedTo,taskStatus:taskStatus,category:category}
        addTaskToApi(taskData)
    }

    const taskSubmitFn=(event)=>{
        event.preventDefault()
        callSetDataFn()
    }

    useEffect(()=>{
        getState()
    },[])


    // const {id,assignedTo,taskStatus,category} = data

    return(
        <Editcontainer>
            <InputForm>
            <Title>Add your State</Title>
             <Card onSubmit={taskSubmitFn}>
               <Label>
                    Enter Assignee Name
                </Label>
                <TextInput onChange={(e)=>setTaskAssignedTo(e.target.value)} type="text" value={assignedTo} placeholder="Enter Assignee name"/>
                <Label>
                    Enter Task Status
                </Label>
                <Select defaultValue="Open" onChange={updateTaskStatus}>
                    {presentStates.map((each)=>(<Option key={each._id} value={each.stateName}>{each.stateName}</Option>))}

                </Select>
                {/* <TextInput onChange={(e)=>editTaskStatus(e.target.value)} type="text" value={taskStatus} placeholder="Write Task Status"/> */}
                <Label>
                    Enter Category Status
                </Label>
                <TextInput onChange={(e)=>editCategory(e.target.value)} type="text" value={category} placeholder="Write Task category"/>
                <Button>Add</Button>
              </Card>  
            </InputForm>
     </Editcontainer>
    )
}

export default Addtask