import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
const data =localStorage.getItem("user")
if(data){
  setUser(JSON.parse(data))
}
    },[])
  return (
    <div>
      <div className="profile profile-container">
  <div className="profile__image">
    
<img src="/donk.jpg" alt="" />
  </div>
  <div className="flex profile__details default-font">
    <div className="profile__name ">{user?user.name:"user"}</div>
    <div className="profile__number text-black">{user?user.email:"email"}</div>
  </div>
</div>
    </div>
  )
}

export default Profile