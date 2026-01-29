import React,{useState} from 'react'
function Signup(){
const Signup = () => {
    const name=
        document.getElementById("name").value;
       const email=
        document.getElementById("email").value;
        const pass=
        document.getElementById("pass").value;
        if (name===""||email===""||pass===""){
            alert("fill all fields");
        }else{
            alert("signup succesfully");
        }

    };

  return (
    <div>
        <h2>Signup</h2>
            <input id="name"placeholder="name"/><br/><br/>
            <input id="email"placeholder="email"/><br/><br/>
            <input id="pass" type="password"placeholder="pass"/><br/><br/>
            <button onClick={Signup}>Signup</button>
    </div>
  );
}
export default Signup;