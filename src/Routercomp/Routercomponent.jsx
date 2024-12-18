import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Homesect } from '../Homesection/Homesect'
import { Jobs } from '../Jobs page/Jobs'
import { Layout } from '../Layout'
import { Login } from '../Authentication/Login'


export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
       
      </Route>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}
