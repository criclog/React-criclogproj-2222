import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Homesect } from '../Homesection/Homesect'
import { Jobs } from '../Jobs page/Jobs'
import { Layout } from '../Layout'
import { Login } from '../Authentication/Login'
import Association from '../Criclog-Project/Association'
import MemberAssociation from '../Criclog-Project/MemberAssociation'


export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/association" element={<Association/>}/>
        <Route path="/association/memberdetails" element={<MemberAssociation/>}/>



       
      </Route>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}
