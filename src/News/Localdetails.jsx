import React from 'react'
import axios from "axios";  
import { toast } from "react-toastify";
import {useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const Localdetails = () => {
  const[localnewsdata,setlocalnewsdata]=useState([])
  const{id}=useParams();


  const Fetchlocaldata=async()=>{
    await axios.get(`https://criclogbackendtest01.vercel.app/getnewsById?objectid=${id}`,)
    .then((res)=>setlocalnewsdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchlocaldata();
},[])

    return (
        <div className="w-full flex justify-center items-center min-h-100vh bg-gray-200 p-4 sm:p-6">
        <div className=" w-full bg-white shadow-lg rounded-lg  p-1 sm:p-2 md:p-3 lg:p-3">
          <p className='w-full flex justify-center'><img
            src={`https://criclogbackendtest01.vercel.app/view/${localnewsdata.filename}`}
            className="w-[300px] h-[200px] flex justify-center items-center"
          /></p>
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{localnewsdata.newsTitle}</h2>
           <hr />
            <p className="text-gray-600 text-[12px] sm:text-[14px] py-2 ">{localnewsdata.date} ,{localnewsdata.location}</p>
            <hr />
            <p className="text-base sm:text-[16px] text-[13px] py-2">{localnewsdata.description}</p>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Match Details:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
             {localnewsdata.matchDetails}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">key moments:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
            {localnewsdata.keyMoments}             
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Top Batter:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
              {localnewsdata.topBatter}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Top Bowler:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
              {localnewsdata.topBowler}
              </p>
            </div>
            <div className="py-5 flex justify-center">
            <Link to={"/tournament"}><button className="bg-[#4A2EB0] text-white py-2 px-4 rounded-lg hover:bg-[#5331cf] text-[14px] sm:text-base">
                TOURNAMENT
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      
      );
}
