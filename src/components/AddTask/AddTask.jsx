import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import {Editcontainer,Card,InputForm,TextInput,Button,Title,Label,Select,Option} from "./styledComponent.js"

const Addtask=(props)=>{
    const navigate = useNavigate()

    const [assignedTo ,setTaskAssignedTo]=useState("")
    const [taskStatus ,editTaskStatus]=useState("")
    const [category ,editCategory]=useState("")
    const [taskData ,setTaskData] = useState({})
    const [presentStates, statePresentState]=useState([])

    const addTaskToApi= async (data)=>{
        try{
            await axios.post("https://nhr-backend.onrender.com/test/task/add",data)
        }
        catch(error){
            console.log(error.message)
        }
    }

    const getState= async ()=>{
        try{
            const statePresent = await axios.get("https://nhr-backend.onrender.com/test/state/get")
            statePresentState(statePresent.data)
            console.log(statePresent.data)
        }
        catch(error){
            console.log(error.message)
        }

    }

    const callSetDataFn=()=>{
        const data = {assignedTo:assignedTo,taskStatus:taskStatus,category:category}
        console.log(taskStatus)
        setTaskData(data)
        addTaskToApi(data)
    }

    const taskSubmitFn=(event)=>{
        event.preventDefault()
        callSetDataFn()
        navigate("/")
    }

    useEffect(()=>{
        getState()
    },[])

    console.log(taskStatus)


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
                <Select id="selectOptions" defaultValue="Open" onChange={(e)=>editTaskStatus(e.target.value)}>
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