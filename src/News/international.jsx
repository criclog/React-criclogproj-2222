import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";  
import { toast } from "react-toastify";





export const Internationalnews = () => {
  const[internews,setinternews]=useState([])
  


  const Fetchinternewsdata=async()=>{
    await axios.get("http://localhost:7000/getAllInternationalData",)
    .then((res)=>setinternews(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchinternewsdata();
},[])

    return (
      <div className="px-4 ">
      {/* Card */}
      <div className=" px-[30px] py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center ">
        
        {internews.map((news) => (
          <div
            key={news._id}
            className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg shadow-[#a09e9e] transition-shadow duration-300 cursor-pointer"
          ><Link to={`/internationalnews/${news._id}`}>
          <Fragment>
            
            <img
              src={`http://localhost:7000/view/${news.filename}`}
              alt='could not load image'
              className="w-full h-[200px] px-3"
            />
            <div className="flex flex-col gap-[10px] py-[10px]">
            <h1 className="text-[14px] font-semibold text-[#797878] px-5">{news.newsTitle}</h1>
              <p className="text-[14px] font-medium text-[#797878] px-5">
               
                {news.date}
              </p>
              
            </div>
            </Fragment></Link>
          </div>
        ))}
      </div>
      
    </div>
  );
  };
  
    