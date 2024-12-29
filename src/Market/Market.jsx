import React, { Fragment, useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";  
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Market Cards
const Market = () => {
  const[product,setprduct]=useState([])
  


  const Fetchprogramdata=async()=>{
    await axios.get("http://localhost:7000/getallData",)
    .then((res)=>setprduct(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchprogramdata();
},[])


  return (
    <div className="mt-10 px-4  ">
      <h1 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
        Find Services & Products for Your Cricket Tournament (All Locations)
        
      </h1>
      {/* Card */}
      <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center ">
        
        {product.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          ><Link to={`/Marketdashboard/${product._id}`}>
          <Fragment>
            <h1 className="text-[14px] font-semibold text-[#797878] p-3">{product.productname}</h1>
            <img
              src={`http://localhost:7000/view/${product.filename}`}
              alt='could not load image'
              className="w-[420px] h-[350px] object-contain bg-black"
            />
            <div className="p-4">
              
              <p className="flex items-center text-sm text-gray-600 mt-2">
                <FaCalendarCheck className="mr-2" />
                {product.createdAt}
              </p>
              <p className="flex items-center text-sm text-gray-600 mt-2">
                <IoLocationSharp className="mr-2" />
                {product.location}
              </p>
              
            </div>
            </Fragment></Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};



export default Market;
