
import React, { useEffect, useState } from 'react'
import "../../componentsforcss/Profile.css"
import { Link, useLocation } from 'react-router-dom'
const Profile = () => {
   const [user,setUser]=useState(null)
   const location=useLocation()
    useEffect(()=>{
const data =localStorage.getItem("user")
if(data){
  setUser(JSON.parse(data))
}
    },[location])
  return (
    <div>
      	<span className="back">
		<i className="fas fa-long-arrow-alt-left"></i>
		<Link to={"/"}><button className='bsk-btn'>Home</button></Link>
	</span>

	<section className="profile_container">
		<div className="profile_img_section">
			<img className="profile_img-LG" src="/light.png" alt='apicture'/>
			<div className="flag_wrapper">
			
			</div>
		</div>

		<div className="profile_desc_section">
			<h2>{user?user.name:"user"}</h2>
			<h3 className='text-white'> {user?user.email:"email"}</h3>
			<p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

			<div className="interests">
				<span className="interests_item">Technology</span>
				<span className="interests_item">Management</span>
				<span className="interests_item">Leadership</span>
			</div>
		</div>

	</section>

	
    </div>
  )
}

export default Profile