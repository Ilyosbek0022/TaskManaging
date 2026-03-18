import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import "../../componentsforcss/login.css"
const Login = () => {
  const [name,seTname]=useState("")
  const [email,SetEmail]=useState("")
   const navigate = useNavigate()
   const toogle=(e)=>{
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify({name,email}))
    navigate("/")
   }
  return (
    <div className='flex justify-center align-baseline'>
     
<div className="form-box">
<form className="form" onSubmit={toogle}>
    <span className="title">Register</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input" placeholder="Name" value={name} required onChange={(e)=>seTname(e.target.value)}/>
			<input type="email" className="input" placeholder="Email" required value={email} onChange={(e)=>SetEmail(e.target.value)}/>
			<input type="password" className="input" required placeholder="Password"/>
    </div>
    <button>Sign up</button>
</form>
<div className="form-section">
  
</div>
</div>
    </div>
  )
}

export default Login