import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Homesect } from '../Homesection/Homesect'
import { Jobs } from '../Jobs page/Jobs'
import { Layout } from '../Layout'
import { Login } from '../Authentication/Login'
import Association from '../Criclog-Project/Association'
import MemberAssociation from '../Criclog-Project/MemberAssociation';

import Contact from '../Contact/Contact';
import YourWeb from '../youweb/YourWeb';
import Powerpromote from '../powerpromote/Powerpromote';
import Cricllog from '../criclogpro/Cricllog';


export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/association" element={<Association/>}/>
        <Route path="/association/memberdetails" element={<MemberAssociation/>}/>

        {/* vickram team  */}

        <Route path='/Contact' element={<Contact/>}/>
     <Route path='/YourWeb' element= {<YourWeb/>} />
     <Route path='/Powerpromote' element={<Powerpromote/>}  />
     <Route path='/Cricllog' element={<Cricllog/>}/>
     




       
      </Route>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}
