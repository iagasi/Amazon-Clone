import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from './firebase.config'
import "./Login.css"
import { firebase } from "./firebase.config"

function Login() {
const navigate=useNavigate()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    const SignIn=(e)=>{
        e.preventDefault()

    }
    const register=async(e)=>{
        e.preventDefault()
        console.log(email,password);
       await createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
            if(auth){navigate("/")}
        }).catch(error=>console.log(error))
    }
  return (
    <div  className='login'>
     <NavLink to="/"><img className="login__logo"src="https://i2-prod.dublinlive.ie/incoming/article15384961.ece/ALTERNATES/s615/0_Amazon-logo.jpg"></img></NavLink>   
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form className='login__form'>
               <small>Email</small>
               <input  className='login__input' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
               <small>Password</small>
               <input  className='login__input'type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
               <button className='login__button' onClick={SignIn}>Sign-In</button>
            </form>
            <p>By sighn in you agree with Amazon  Conditions</p>

            <button className='login__register' onClick={register}>Create Amazon Acaunt</button>
            </div>
        </div>
  )
}

export default Login