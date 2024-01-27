import {StateContainer,Head,TaskContainer} from "./styledComponents.js"
import Task from "../Tasks/Tasks.jsx"


const State=(props)=>{
    const {item,tasks}=props
    const {id,stateName,}=item

    const filteredData = tasks.filter((eachTask)=>eachTask.taskStatus=== stateName)

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



