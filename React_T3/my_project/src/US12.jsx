//import React from 'react'
import { useState } from "react"

export default function US12() {
    const [data,setdata]=useState({})
    const hc=(e)=>{
    const {name,value}=e.target
    setdata({...data,[name]:value})
    }
    const hs=(e)=>{
        e.preventDefault()
        if(data.pwd==data.cpwd && data.pwd.length>=8){
            alert(`Welcome ${data.name} with email ${data.email}`)
        }
        else{
            alert(`Password must be same and greater than 8`)
        }
    }
  return (
   <>
   <form onSubmit={hs}>
    Name:
    <input type="text" name="name" onChange={hc}></input>
    <br></br>
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
