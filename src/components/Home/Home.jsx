import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios"

import State from "../State/State";
import { BACKEND_URL } from "../../App";

import {Maincontainer,Button,StatesContainer ,ButtonsContainer} from "./styledComponent.js"


const HomePage= ()=>{
    const navigate =useNavigate()

    const [Products , setProducts]= useState([])

    console.log(BACKEND_URL)

    const getProducts = async ()=>{
        try{

            const stateData = await axios.get(`${BACKEND_URL}/test/state/get`)
            setProducts(stateData.data)
            

        }catch(error){
            console.log(error)
        }
    }

    const onAddProduct=()=>{
        navigate("/edit")
    }


    const onAddTask=()=>{
        navigate("/edit/task")
    }


 useEffect(()=>{
    getProducts();
 },[])

    return(
        <Maincontainer className="container">
          <ButtonsContainer>
            <Button className="button" onClick={onAddProduct}>Add states</Button>
             <Button className="button" onClick={onAddTask} >Add Task</Button>
            </ButtonsContainer>
            <StatesContainer>
            {Products.map((item) =>{
                return (
                <div key = {item._id}>

                   {<State key = {item._id} item = {item} />}

                </div>)

            })} 
           
        </StatesContainer>
        
    </Maincontainer>
    )
}

export default HomePage;