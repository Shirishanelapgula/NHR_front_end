import { useEffect, useState} from "react";
import {Link , useNavigate} from "react-router-dom"

import axios from "axios"

import State from "../State/State";
import {Maincontainer,Button,StatesContainer ,ButtonsContainer} from "./styledComponent.js"


const HomePage= ()=>{
    const navigate =useNavigate()

    const [Products , setProducts]= useState([])
    const [Tasks,setTasks]=useState([])

    const getProducts = async ()=>{
        try{

            const stateData = await axios.get("https://nhr-backend.onrender.com/test/state/get")
            setProducts(stateData.data)
            

        }catch(error){
            console.log(error)
        }
    }

    const getTasks = async ()=>{
        try{
            const taskData = await axios.get("https://nhr-backend.onrender.com/test/task/get")
            setTasks(taskData.data)
            // console.log(taskData.data)
            // const task=[{id:1,assignedTo:"shirisha",taskStatus:"Open",category:"Bug"},{id:2,assignedTo:"shirisha",taskStatus:"Inprogress",category:"Bug"}]
            // setTasks(task)

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

 useEffect(()=>{
    getTasks()
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

                   {<State key = {item._id} item = {item} tasks={Tasks}/>}

                </div>)

            })} 
           
        </StatesContainer>
        
    </Maincontainer>
    )
}

export default HomePage;