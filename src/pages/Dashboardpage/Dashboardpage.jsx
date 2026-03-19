import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboardpage = () => {
   const [tasks,setTask]=useState([])
     
    useEffect(()=>{
  const data = localStorage.getItem("task")
  if(data){
    setTask([JSON.parse(data)]) // objectni arrayga o‘rab olamiz
  }
},[])
      
  return (
    <div >
<Link to={"/"}><button className='bsk-btn'>Home</button></Link>
<div className="dashboard-container">
      <h2>Your Tasks</h2>
      <div className="task-grid">
        {tasks.length === 0 ? (
          <p>No task yet!</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="task-card">
              <h3>{task.Title}</h3>
              <p>{task.descript}</p>
              <p><strong>Status:</strong> {task.status}</p>
              <p><strong>Priority:</strong> {task.Priority}</p>
              <p><strong>Start:</strong> {task.start}</p>
              <p><strong>End:</strong> {task.endtime}</p>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  )
}

export default Dashboardpage