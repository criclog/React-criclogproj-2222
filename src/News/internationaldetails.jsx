import React from 'react'
import axios from "axios";  
import { toast } from "react-toastify";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Internationaldetails = () => {
  const[internewsdata,setinternewsdata]=useState([])
  const{id}=useParams();


  const Fetchinterdata=async()=>{
    await axios.get(`http://localhost:7000/getInternationalById?objectid=${id}`,)
    .then((res)=>setinternewsdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchinterdata();
},[])

    return (
        <div className="w-full flex justify-center items-center min-h-100vh bg-gray-200 p-4 sm:p-6">
        <div className=" w-full bg-white shadow-lg rounded-lg  p-1 sm:p-2 md:p-3 lg:p-3">
          <p className='w-full flex justify-center'><img
            src={`http://localhost:7000/view/${internewsdata.filename}`}
            className="w-[300px] h-[200px] flex justify-center items-center"
          /></p>
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{internewsdata.newsTitle}</h2>
           <hr />
            <p className="text-gray-600 text-[12px] sm:text-[14px] py-2 ">{internewsdata.date} ,{internewsdata.location}</p>
            <hr />
            <p className="text-base sm:text-[16px] text-[13px] py-2">{internewsdata.description}</p>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Match Details:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
             {internewsdata.matchDetails}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">key moments:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
            {internewsdata.keyMoments}             
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Top Batter:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
              {internewsdata.topBatter}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Top Bowler:</h3>
              <p className="w-[50%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
              {internewsdata.topBowler}
              </p>
            </div>
            <div className="py-5 flex justify-center">
             <button className="bg-[#4A2EB0] text-white py-2 px-4 rounded-lg hover:bg-[#5331cf] text-[14px] sm:text-base">
                TOURNAMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      
      );
}
