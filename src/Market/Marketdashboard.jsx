import React from "react";
import axios from "axios";  
import { toast } from "react-toastify";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Marketdashboard = () => {
    const[productdata,setprductdata]=useState([])
    const{id}=useParams();
  
  
    const Fetchprogramdata=async()=>{
      await axios.get(`https://criclogbackendtest01.vercel.app/getMarketById?objectid=${id}`,)
      .then((res)=>setprductdata(res.data))
      .catch((err)=> toast.error(err.res.data.message))
      .finally()
  }
  
  useEffect(()=>{
    Fetchprogramdata();
  },[])


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4 sm:p-6">
    <div className="max-w-md sm:max-w-lg lg:max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-1 sm:p-2 md:p-3 lg:p-3">
      <img
        src={`https://criclogbackendtest01.vercel.app/view/${productdata.filename}`}
        className="w-full min-h-[90vh] object-cover rounded-md"
      />
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{productdata.productname}</h2>
        <p className="text-gray-600 text-[12px] sm:text-[14px] py-2 ">Posted on: {productdata.createdAt} | {productdata.location}</p>
        
        <p className="text-base sm:text-[16px] text-[13px] font-semibold text-[#4A2EB0] py-2">Price: {productdata.price}.00</p>
        <hr />
        <p className="text-base sm:text-[15px] text-[12px] font-semibold text-[#494848] py-2">Seller: {productdata.sellername}</p>
        <hr />
        <div className="mt-4">
          <h3 className="text-[14px] sm:text-[20px] font-bold text-gray-800">Description</h3>
          <p className="w-[90%] text-gray-600 text-[13px] sm:text-[15px] mt-2">
           {productdata.description}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
         <button className="bg-[#4A2EB0] text-white py-2 px-4 rounded-lg hover:bg-[#5331cf] text-[14px] sm:text-base">
            Contact on App
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};



export default Marketdashboard