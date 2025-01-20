import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import axios from "axios";  
import { toast } from "react-toastify";

export const Tournamentdashboard = () => {
    const[Tournament,setTournament]=useState([])
    const{id}=useParams();
  
  
    const Fetchtournamentdata=async()=>{
      await axios.get(`http://localhost:7000/getidTournament?objectid=${id}`,)
      .then((res)=>setTournament(res.data))
      .catch((err)=> toast.error(err.res.data.message))
      .finally()
  }
  
  useEffect(()=>{
    Fetchtournamentdata();
  },[])

  return (
    <div className="flex flex-col  min-h-100vh bg-gray-200 p-2 sm:p-4 font-serif">
    <div className=" w-full min-h-100vh flex flex-col  bg-white shadow-lg divide-y-2">
    <div className=" w-full min-h-100vh flex gap-[20px] md:flex-row flex-col md:justify-start items-centerrounded-lg overflow-hidden p-[20px]   sm:p-2 md:p-5">
      <img
        src={`http://localhost:7000/view/${Tournament.filename}`}
        className="sm:w-[170px] sm:h-[170px] w-[130px] h-[130px]  object-cover rounded-lg"
      />
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[15px] sm:text-[18px] font-semibold text-[#4a2be0]">{Tournament.name}</h2>
        <p className="text-gray-600 text-[13px] sm:text-[15px] font-medium">{Tournament.location}</p>
        <p className="text-gray-600 text-[13px] sm:text-[15px] font-medium">{Tournament.Date}</p>
        <p className="text-gray-600 text-[13px] sm:text-[15px] font-medium">{Tournament.status}</p>
        <p className="text-gray-600 text-[13px] sm:text-[15px] font-medium">Category: {Tournament.category}</p>
        <p className="text-[15px] sm:text-[18px] text-[#4a2be0] font-medium ">{Tournament.Team1} <span className='text-[#696868] px-2 text-[16px] sm:text-[20px]'>VS </span>{Tournament.Team2}</p>
        
        
      </div>
      
    </div>
    <div className='w-full min-h-100vh flex flex-col gap-5 justify-center items-center px-[20px] py-[40px] '>
        <h2 className='font-medium sm:text-[26px] text-[18px] text-[#a7a7a8]'>LIVE MATCH</h2>
    <iframe className='md:w-[65%] md:h-[450px] sm:w-[80%] sm:h-[300px] w-[90%] h-[250px] ' src={Tournament.livevideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    
  </div>
  )
}
