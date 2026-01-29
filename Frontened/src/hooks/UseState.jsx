import React,{useState} from 'react'

const UseState = () => {
    const [name,setName]=useState("");
    const handleSubmit=()=>{
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
        <form action="">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e,target.value)}placeholder='ENTER THE NAME'/>
        
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default UseState