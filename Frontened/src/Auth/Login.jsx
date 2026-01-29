import React, { useState } from "react"

const Login = () => {
    const [data,setData]=useState({
        name:"Rishi",
        age:"20",
        cgpa:"9"
    });
    const handleChange = (e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(data);
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={data.name} name ="name" onChange={handleChange}placeholder='ENTER THE NAME'/>
             <label>age:</label>
            <input type="text" value={data.age} name="age" onChange={handleChange}placeholder='ENTER THE age'/>
            <label>cgpa:</label>
            <input type="text" value={data.cgpa} name="cgpa" onChange={handleChange}placeholder='ENTER THE cgpa'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login