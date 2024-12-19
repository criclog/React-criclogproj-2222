import React, { useState } from 'react'
import logo from '../Assests/logo.png'
import Playstore from '../Assests/playstore.png'
import appstore from '../Assests/appStore logo.png'
import { FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


export const Navbar = () => {
//  const[Searchbar,SetSearchbar]=useState(false)




  return (
    <div className='w-full h-[65px] shadow-lg shadow-[#00000038] bg-[white] flex flex-row justify-between items-center pl-[50px] fixed z-20'>

    
        <div className='w-[20%] flex items-center gap-4'>
       <Link to={"/"}><img src={logo} alt="couldn't load image" width="50px" height="50px"/></Link> 
       <Link to={"/"}><h3 className='font-bold text-[18px] text-[#4D28D4] '>CRICLOG</h3></Link> 
        </div>
        
            <ul className='w-[80%] h-full flex items-center gap-[30px] font-semibold text-[14px] cursor-pointer'>
                
                 <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>LIVE SCORES <FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <Link to={"/live-match"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MATCHES</li></Link>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENTS</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ASSOCIATIONS</li>
                </ul>                
                </li>
                
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>NETWORK<FaCaretDown className='text-[16px]' /> </p> 
                <ul className='min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>COMMUNITY</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MARKET</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LOOKING</li>
                </ul>                
                </li>
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>ADD ONS<FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICLOG PRO</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LIVE STREAMING</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SCORE TICKER</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR APP</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR WEB</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>POWER PROMOTE</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SUPER SPONSOR</li>
                </ul>                
                </li>
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>MORE <FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENT GUIDE</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICKET TIPS</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>NEWS</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>FAQS</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>BLOG</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ORGANIZE TOURNAMENT</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>AWARDS</li>
                </ul>                
                </li>
                
                <li className='hover:text-[#4D28D4]'>STORE</li>
               <Link to ={"/jobs"}><li className=' hover:text-[#4D28D4]'>JOBS</li> </Link> 
                <li className='hover:text-[#4D28D4]'>CONTACT US</li>
                <img src={Playstore} alt="couldn't load image" width="30px" height="30px"/>
                <img src={appstore} alt="couldn't load image" width="30px" height="30px"/>
                <Link  to={"/Login"}><button className='p-[5px] text-[16px] border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>
                <p className='text-[30px] text-[#4D28D4]'><IoSearchSharp /></p>
            </ul>
            

    </div>
  )
}

