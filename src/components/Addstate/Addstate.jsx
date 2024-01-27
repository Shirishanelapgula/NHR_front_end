import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import {Editcontainer,Card,InputForm,TextInput,Button,Title,Label} from "./styledComponent.js"

const Addstate=(props)=>{
    const navigate = useNavigate()
    const {addProduct} = props

    const [stateName ,editState]=useState("")

    const addStateToApi= async (stateName)=>{
        try{
            await axios.post("http://localhost:5000/test/state/add",{stateName})
        }
        catch(error){
            console.log(error.message)
        }

    }

    const navigateFn=(event)=>{
        event.preventDefault()
        addStateToApi(stateName)
        navigate("/")
    }


    return(
        <Editcontainer>
            <InputForm>
            <Title>Add your State</Title>
             <Card onSubmit={navigateFn}>
               <Label>
                    Enter state
                </Label>
                <TextInput onChange={(e)=>editState(e.target.value)} type="text" value={stateName} placeholder="Write your state"/>
                <Button>Add</Button>
              </Card>  
            </InputForm>
     </Editcontainer>
    )
}

export default Addstate