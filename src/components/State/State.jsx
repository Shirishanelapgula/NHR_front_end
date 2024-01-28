import {StateContainer,Head,TaskContainer} from "./styledComponents.js"
import Task from "../Tasks/Tasks.jsx"

import { BACKEND_URL } from "../../App"


const State=(props)=>{
    const {item}=props
    const {id,stateName,}=item

    const [Tasks,setTasks]=useState([])

    const getTasks = async ()=>{
        try{
            const taskData = await axios.get(`${BACKEND_URL}/test/task/get`)
            setTasks(taskData.data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getTasks()
     },[])

    const filteredData = Tasks.filter((eachTask)=>eachTask.taskStatus=== stateName)

    return(
        <StateContainer>
            <Head>{stateName}</Head>
            <TaskContainer>
                { filteredData.map((each)=>(
                <Task key={each._id} data={each}/>))
                }
            </TaskContainer>
        </StateContainer>
    )
}
export default State



