import React from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom"
import style from "./Login.module.css";
const Login= () => {
  
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  
  const onLogin=async (e) =>{
    e.preventDefault();
    try{
const sendSign=await fetch(`http://localhost:3000/user/login`,
  {
    method:"POST",
    headers:{'content-Type':"<application/>json",},
  body:JSON.stringify({email,password}),
  }
);
const response=await sendSign.json();
if(sendSign.ok){
  alert("Login successfull");
  localStorage.setItem("token",response.token)
}
else{
  alert("login failed");
}

    }
    catch(error){
      console.log(error);
    }

  }

  return (
    <div className={style.full}>
        <div className={style.body}>
       <h1 className={style.hello}>Login</h1>
       
       
            <input type="email" name='email' id='' placeholder='email'  onChange={(e)=>setemail()} />
           
            <br/>
            <input type="password" name='password' id='' placeholder='password'  onChange={(e)=>setpassword()} />
            <br/>
            <button onClick={onLogin}  type="submit" id='button'>Login</button>
            <p>Don't have an account?<Link to='/signup'>signup</Link></p>
        
        </div>
    </div>
  )
}

export default Login
