import React,{useState} from 'react'
import Service from'./Service';

const Contacts = () => {
  const[name,setName]=useState("Rishi");
  const toggleName=()=>{
    setName(name==="Rishi"?"paruh":"Rishi")
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  )
}

export default Contacts