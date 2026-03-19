import React, { Suspense } from 'react'


import { Route, Routes } from 'react-router-dom';
import { HomeAsync } from './pages/home/Homepage.async';
import { Loginasync } from './pages/Login/Login.async';
import { Premiumasync } from './pages/Premium/Premium.async';
import { Registerasync } from './pages/Register/Register.async';
import { Addnewtaskasync } from './pages/Addnew/AddNewtask.async';
import { Dashboardasync } from './pages/Dashboardpage/Dashboard.async';
import { Profileasync } from './pages/Profile/Profile.async';

const App = () => {
    return (
       <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     
      <Route path='/Profile' element={<Profileasync/>}/>
      <Route path="/Login" element={<Loginasync/>} />
      
      <Route path="/Premium" element={<Premiumasync/>} />
      <Route path="/Register" element={<Registerasync />} />
      <Route path="/Addnew" element={<Addnewtaskasync />} />
<Route path="/Dashboardpage" element={<Dashboardasync/>} />

      <Route path="/" element={<HomeAsync />}>
        
      </Route>
    </Routes>
    </Suspense>
  ); 
}


export default App