import React, { useState } from 'react'
import "../../componentsforcss/AdTask.css"
import { Link, useNavigate } from 'react-router-dom'
const AddNewtask = () => {
     const [Title,SetTitle]=useState("")
     const [descript,setDescript]=useState("")
     const [status,setStatus]=useState("")
     const [start,setStart]=useState("")
     const [endtime,setEnd]=useState("")
  const [Priority,setPriority]=useState("")
   const navigate = useNavigate()
   const toogle=(e)=>{
    e.preventDefault()
    localStorage.setItem("task",JSON.stringify({Title,descript,status,setPriority,start,endtime,Priority}))
    navigate('/')
   }
  return (
    <div>
    

      <div className="task-form">
        <Link to={"/"}><button className='bsk-btn'>Home</button></Link>
  <form onSubmit={toogle}>
    <h2>Add Task</h2>
  <div className="form-group">
      <label>Add title</label>
      <input type="text" placeholder="Enter the title"onChange={(e)=>SetTitle(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Priority</label>
      <select onChange={(e)=>setPriority(e.target.value)}>
        <option></option>
        <option>1</option>
        <option>1</option>
        <option>3</option>
      </select>
    </div>

    <div className="form-group">
      <label>Task Description</label>
      <input type="text" placeholder="Enter task..."onChange={(e)=>setDescript(e.target.value)} />
    </div>

    


    <div className="form-group">
      <label>4. Status</label>
      <select onChange={(e)=>setStatus(e.target.value)}>
        <option></option>
        <option>In progress</option>
        <option>Not started</option>
        <option>Done</option>
        <option>i'd think tho</option>
      </select>
    </div>

   

    <div className="form-row">
      <div className="form-group">
        <label>6. Start</label>
        <input type="date"onChange={(e)=>setStart(e.target.value)} />
      </div>

      <div className="form-group">
        <label>7. End</label>
        <input type="date" onChange={(e)=>setEnd(e.target.value)}/>
      </div>
    </div>

    <div className="form-group">
      <label>8.required Duration(time)</label>
      <input type="text"  placeholder="4 months" />
    </div>

   

    <div className="form-actions">
      <button className="submit">Submit</button>
      
    </div>
  </form>
</div>

    </div>
  )
}

export default AddNewtask
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "../../componentsforcss/login.css"
// const Login = () => {
//   const [name,seTname]=useState("")
//   const [email,SetEmail]=useState("")
//    const navigate = useNavigate()
//    const toogle=(e)=>{
//     e.preventDefault()
//     localStorage.setItem("user",JSON.stringify({name,email}))
//     navigate("/")
//    }
//   return (
//     <div className='flex justify-center align-baseline'>
//      <Link to={"/"}><button className='bsk-btn'>Home</button></Link>
// <div className="form-box">
// <form className="form" onSubmit={toogle}>
//     <span className="title">Sign up</span>
//     <span className="subtitle">Create a free account with your email.</span>
//     <div className="form-container">
//       <input type="text" className="input" placeholder="Name"  value={name} required onChange={(e)=>seTname(e.target.value)}/>
// 			<input type="email" className="input" placeholder="Email" required value={email} onChange={(e)=>SetEmail(e.target.value)}/>
// 			<input type="password" className="input" required placeholder="Password"/>
//     </div>
//     <button>Sign up</button>
// </form>
// <div className="form-section">
//   <p>Have an account? <Link to={'/Register'}>Register</Link> </p>
// </div>
// </div>
//     </div>
//   )
// }

// export default Login