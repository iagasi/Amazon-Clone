import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from './firebase.config'
import "./Login.css"
import { firebase } from "./firebase.config"
import Register from './Register'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [modal, setModal] = useState(false)
  
  const login = async (e) => {
    e.preventDefault()
    try {
      const candidate = await signInWithEmailAndPassword(auth, email, password)
      if (candidate) {
navigate("/")
      }
    }

    catch (e) {
      alert(e)
    }
  }


  return (

    <div className='login'>
  
      <Register show={modal} close={() => setModal(false)} />
      <NavLink to="/"><img className="login__logo" src="https://i2-prod.dublinlive.ie/incoming/article15384961.ece/ALTERNATES/s615/0_Amazon-logo.jpg"></img></NavLink>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form className='login__form'>
          <small>Email</small>
          <input className='login__input' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <small>Password</small>
          <input  placeholder='min length 6 sumbols' minlength="6" className='login__input' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button className='login__button' onClick={(e) => login(e)}>Sign-In</button>
        </form>
        <p>By sighn in you agree with Amazon  Conditions</p>
        <button className='login__register' onClick={() => setModal(true)}>Create Amazon Acaunt</button>

        {/* <button className='login__register' onClick={register}>Create Amazon Acaunt</button> */}

      </div>
    </div>
  )
}

export default Login