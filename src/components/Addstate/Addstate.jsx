import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../../App"

import {Editcontainer,Card,InputForm,TextInput,Button,Title,Label} from "./styledComponent.js"

const Addstate=(props)=>{
    const navigate = useNavigate()
    const {addProduct} = props

    const [stateName ,editState]=useState("")

    const addStateToApi= async (stateName)=>{
        try{
            const existingData = await axios.get(`${BACKEND_URL}/test/state/get`)

            const stateArray = existingData.data.filter((each)=>(each.stateName===stateName))

            if (stateArray.length===0){
                await axios.post(`${BACKEND_URL}/test/state/add`,{stateName})
                navigate("/")

            }
            navigate("/")
            
        }
        catch(error){
            console.log(error.message)
        }

    }

    const navigateFn=(event)=>{
        event.preventDefault()
        addStateToApi(stateName)
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