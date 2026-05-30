//import React from 'react'
import { useState } from "react";

export default function US10() {
    const [data,setdata]=useState({})
    const hc=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
    const hs=(e)=>{
        e.preventDefault()
        if(data.pwd==data.cpwd){
            alert(`Welcome user with email ${data.email}`)
        }
        else{
            alert(`Must be same`)
        }
    }
  return (
   <>
   <form onSubmit={hs}>
    Email:
    <input type="email" name="email" onChange={hc}></input>
    <br></br>
    Password:
    <input type="password" name="pwd" onChange={hc}></input>
    <br></br>
    Confirm Password:
    <input type="password" name="cpwd" onChange={hc}></input>
    <br></br>
    <input type="submit"></input>
   </form>
   </>
  )
}
