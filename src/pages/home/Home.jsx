
import { Link } from "react-router-dom";

import ProfileCard from "../../components/ProfileCard";

import Dashboardl from "../../components/Dashboard";
import { LuAirplay } from "react-icons/lu";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { AiOutlineDingding } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

export default function Home() {
  return (
    
    <div className="all">
      
      <div className="main-background">

        <div className="left-sided">
<div className="logo">
 
 <img src="favicon.ico" alt="" className="glavavatar" />
  <span>Task manage</span>

</div>
<div className="links">
  <Link to={"/Dashboardpage"}> <LuAirplay/>  <p>dashboard</p></Link>
  <Link to={"/Login"}> <FaUser />  <p>Login</p></Link>
  <Link to={"/Premium"}> <AiOutlineDingding />  <p>Proshka</p></Link>
  <Link to={"/Register"}>  <FaUserPlus /> <p>Register</p></Link>
  <Link to={"/Addnew"}> <MdAdd /><p>Add a task</p></Link>
</div>
<div className="account ">
  <ProfileCard/>
</div>
        </div>


        <div className="right-sided ">
          <div className="container">

          <header className="flex justify-between p-7">
            
            <div className="log-in">
                <div className="flex gap-2">
    <Link to={"/Login"}><button className="bsk-btn bsk-btn-default"> Sign In</button></Link>
    
    <Link to={"/Register"}><button className="bsk-btn bsk-btn-default"> Sign Up</button></Link>
  </div>
            </div>
         
          </header>


          <main className="mt-3">
            <div className="between flex justify-between mt-6">
              <div className="text"><h1 >Professional task managing</h1></div>

            </div>


<Dashboardl />
          </main>
        </div>
        </div>
        
      </div>
      
    </div>
  );
}

