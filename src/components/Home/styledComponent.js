import { styled } from "styled-components";

export const Maincontainer= styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: white;
`


export const Button=styled.button`
    height:50px;
    width:150px;
    color: #e1e6e2;
    border: solid 1px grey;
    align-self: flex-end;
    margin:10px;
    color:black;
    background-color:white;
`
export const StatesContainer= styled.div`
    display: flex;
    width:100vw;
    overflow:auto;
`
export const ButtonsContainer= styled.div`
    display: flex;
    justify-content:flex-end;
`