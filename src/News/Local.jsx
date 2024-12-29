import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Internationalnews } from './international';
import axios from "axios";  
import { toast } from "react-toastify";


export const Newsnavbar=()=>{
    return(
        <div>
             
      <div className='w-full min-h-100vh ' >
        <Navbar/>
        </div>
        <div>
       <h2 className='hidden'><Localnews/></h2> 
       <h2 className='hidden'><Internationalnews/></h2> 
        </div>
    </div>
     

    )
} 

export const Navbar = () => {

    const [activeTab, setActiveTab] = useState("Local"); // Default tab
const matchnav=["Local", "International" ]
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
    
    return (<>                    
             <div className='px-[40px] bg-[#4D28D4] '>
              <ul className='sm:text-[20px] text-[13px]  text-[white] font-medium flex gap-[40px] px-[50px]'>
             {matchnav.map((tab) => (
                    <li
                      key={tab}
                      className={`py-3 px-1 hover:text-[text] border-b-2 cursor-pointer  ${
                        activeTab === tab
                          ? "text-[white] border-[white]"
                          : "text-[white] border-[#4D28D4]"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </li>))}
              </ul>
            </div>
            
          <div className="w-full py-3">
              {activeTab === "Local" && <Localnews/> }
              {activeTab === "International" && <Internationalnews/> }
              
            </div>
         
     
    </>
)
  }


export const Localnews = () => {
  const[localnews,setlocalnews]=useState([])
  


  const Fetchlocalnewsdata=async()=>{
    await axios.get("http://localhost:7000/getnewsallData",)
    .then((res)=>setlocalnews(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchlocalnewsdata();
},[])






  return (
    <div className="px-4 ">
    {/* Card */}
    <div className=" px-[30px] py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center ">
      
      {localnews.map((news) => (
        <div
          key={news._id}
          className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg shadow-[#a09e9e] transition-shadow duration-300 cursor-pointer"
        ><Link to={`/localnews/${news._id}`}>
        <Fragment>
          
          <img
            src={`http://localhost:7000/view/${news.filename}`}
            alt='could not load image'
            className="w-[100%] h-[200px] px-3"
          />
          <div className="flex flex-col gap-[10px] py-[10px]">
          <h1 className="text-[15px] font-semibold text-[#555454] px-5">{news.newsTitle}</h1>
            <p className="text-[15px] font-medium text-[#555454] px-5">{news.date}</p>
            
          </div>
          </Fragment></Link>
        </div>
      ))}
    </div>
    
  </div>
);
};

  