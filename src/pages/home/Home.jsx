
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
 
 <Link to={"/"}><img src="favicon.ico" alt="" className="glavavatar" /></Link>
  

</div>
<div className="links">
  <div className="Linkk"><Link  to={"/Dashboardpage"} > <div className="phots"><LuAirplay/></div>  <div className="thisn">Dashboard</div></Link></div>
<div className="Linkk">  <Link className="Linkk" to={"/Login"}> <div className="phots"><FaUser />  </div><div className="thisn">Login</div></Link></div>
  <div className="Linkk"><Link className="Linkk" to={"/Premium"}> <div className="phots"><AiOutlineDingding /> </div> <div className="thisn">Proshka</div></Link></div>
  <div className="Linkk"><Link className="Linkk" to={"/Register"}>  <div className="phots"><FaUserPlus /></div> <div className="thisn">Register</div></Link></div>
  <div className="Linkk"><Link className="Linkk" to={"/Addnew"}> <div className="phots"> <MdAdd /></div><div className="thisn">Add a task</div></Link></div>
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

