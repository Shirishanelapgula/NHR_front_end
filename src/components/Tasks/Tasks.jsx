import {TaskCard,Para,Container} from "./styledComponent.js"

const Task=(props)=>{
    const {data} = props
    const {_id,assignedTo,taskStatus,category} = data

    return(
      <Container>
      <TaskCard>
        <Para>Task Id: {_id}</Para>
        <Para>Assinged To :{assignedTo}</Para>
        <Para>Task Status :{taskStatus}</Para>
        <Para>Category: {category} </Para>
      </TaskCard>
      </Container>

    )
}

export default Task