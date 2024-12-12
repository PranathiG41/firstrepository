import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import style from "./Signup.module.css";

const Signup = () => {
const[username,setusername]=useState();
const [email,setemail]=useState();
const [password,setpassword]=useState();

const onSubmit=async (e) =>{
  e.preventDefault();
  try{
    const sendSign = await fetch(`http://localhost:3000/user/signup`
,
{
  method:"POST",
  headers:{'content-Type':"application/json",},
  body:JSON.stringify({username,email,password}),
} );
const response=await sendSign.json();
if(sendSign.ok){
  alert("registration successfull");

}else{
  alert("registration failed");
}

}
  catch(error){

console.log(error);
  }
}

  return (
    <div className={style.full}>
      <div className={style.body}>
        <h1 className={style.hello}>Signup</h1>
        <div>
          <input type="username" name='username' id='' placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
            <br></br>
            <input type="email" name='email' id='' placeholder='email'onChange={(e)=>setemail(e.target.value)} />
            <br></br>
            <input type="password" name='password' id='' placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
            <br/><button onClick={onSubmit} type="submit">Submit</button>
            
            <div>
                <p>Already have an account! <Link to='/'>Login</Link></p>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Signup
