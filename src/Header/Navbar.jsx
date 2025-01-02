import React, { useState } from 'react'
import logo from '../Assests/logo.png'
import Playstore from '../Assests/playstore.png'
import appstore from '../Assests/appStore logo.png'
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';



export const Navbar = () => {
 const [isChecked, setIsChecked] = useState(false);


 const checkValue = localStorage.getItem("userdata");

const handleToggle =()=>{
    setIsChecked(true)
};

 const handlemenuclose =()=> {
  setIsChecked(false)
};




  return (<>
   <div className='w-full h-[65px] shadow-lg shadow-[#00000038] bg-[white] flex flex-row justify-between items-center pl-[50px] fixed z-20'>

    
        <div className='xl:w-[15%] w-[90%] flex items-center gap-4'>
<p className='text-[28px] ml-[-15px] xl:hidden visible cursor-pointer ' onClick={handleToggle} ><MdMenu/></p>   
       <div className='w-full flex items-center justify-center gap-3'>
       <Link to={"/"}><img src={logo} alt="couldn't load image" className='sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]'/></Link> 
       <Link to={"/"}><h3 className='font-bold sm:text-[18px] text-[14px] text-[#4D28D4] '>CRICLOG</h3></Link> 
       </div> </div>
            <ul className='xl:w-[72%] w-full h-full xl:flex items-center xl:gap-[25px] gap-[25px] font-semibold text-[13px] cursor-pointer xl:visible hidden'>
               
                 <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>LIVE SCORES <FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <Link to={"/live-match"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MATCHES</li></Link>
                    <Link to={"/tournament"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENTS</li></Link>
                    <Link to={'/association'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ASSOCIATIONS</li></Link>
                </ul>                
                </li>
                
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>NETWORK<FaCaretDown className='text-[16px]' /> </p> 
                <ul className='min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                <Link to={'/academy'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>COMMUNITY</li></Link>
                <Link to={'/Market'}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MARKET</li></Link>
                <Link to={'/looking'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LOOKING</li></Link>
                </ul>                
                </li>
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>ADD ONS<FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                <Link to={"/Cricllog"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICLOG PRO</li> </Link> 
                <Link to={'/livestream'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LIVE STREAMING</li></Link>
                <Link to={"/scoreticker"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SCORE TICKER</li></Link>
                    <Link to={'/yourapp'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR APP</li></Link>
                    <Link to={"/YourWeb"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR WEB</li></Link>
                    <Link to={"/powerpromote"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>POWER PROMOTE</li></Link> 
                    <Link to={'/supersponsor'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SUPER SPONSOR</li></Link> 
                </ul>                
                </li>
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>MORE <FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                   <Link to={'/crickettips'}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICKET TIPS</li></Link>
                    <Link to={'/news'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>NEWS</li></Link>
                    <Link to={'/Faqs'}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>FAQS</li></Link>
                    <Link to={"/organizetournament"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ORGANIZE TOURNAMENT</li></Link>
                  <a href="https://awards.cricheroes.in/" target='Blank'>  <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>AWARDS</li></a>
                </ul>                
                </li>
                
                <a href="https://tdr.cricheroes.com/?utm_source=cricheroes_website&utm_medium=cricheroes_tdr_icon&utm_campaign=the_dressing_room" target='Blank'><li className='hover:text-[#4D28D4]'>STORE</li></a>
               <Link to ={"/jobs"}><li className=' hover:text-[#4D28D4]'>JOBS</li> </Link> 
               <Link to={"/Contact"}><li className='hover:text-[#4D28D4]'>CONTACT US</li></Link>
                <a href="https://play.google.com/store/apps/details?id=com.cricheroes.cricheroes.alpha"><img src={Playstore} alt="couldn't load image" width="30px" height="30px"/></a>
                <a href="https://apps.apple.com/us/app/cricheroes-cricket-scoring-app/id1222844050?ls=1"><img src={appstore} alt="couldn't load image" width="30px" height="30px"/></a>
                
                {!checkValue?(<Link  to={"/Login"}><button className='py-[3px] px-[5px] text-[13px]  border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>):(
                  <Link to={'/profile'}><p className='flex  items-center gap-[5px] group'><FaCircleUser className='text-[32px] text-[#4a2eb0]' /><p className='text-[black] text-[14px] flex justify-center rounded-b-lg invisible group-hover:visible ease-out duration-200'>PROFILE</p></p></Link>
                )}  
                
                </ul>
            

    </div>

    <div className={`${isChecked? 'w-[80%] h-screen py-[30px] bg-[#ffffff] fixed z-30 overflow-y-scroll':"hidden"}`}> 
   <div className='w-full px-[40px] flex flex-col text-[14px] gap-5 '>
   <p onClick={handlemenuclose} className='text-[20px]'><RxCross2/></p>
   {!checkValue?(<Link  to={"/Login"}><button className='w-[95%] py-[5px] mx-[10px] text-[14px]  border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>):(
                  <Link to={'/profile'}><p className='mt-[10px] flex flex-col items-center gap-[15px] '><FaCircleUser className='text-[34px] text-[#4a2eb0]' /><p className='text-[black] text-[14px] flex justify-center rounded-b-lg '>PROFILE</p></p></Link>
                )}     
   <Link to={"/"}><p className='font-medium hover:text-[#4D28D4]'>HOME</p></Link>
    <Accordion allowZeroExpanded >
        <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                <p className='flex items-center gap-2 hover:text-[#4D28D4] font-medium'>LIVE SCORES <FaCaretDown className='text-[16px]' /> </p>
                 </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col gap-3 pt-[10px] font-medium'>
                <Link to={"/live-match"}> <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>MATCHES</p></Link>
             <Link to={"/tournament"}> <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>TOURNAMENTS</p></Link>
             <Link to={'/association'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>ASSOCIATIONS</p></Link>
              </div>
              </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded >
           <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                <p className='flex items-center gap-4 hover:text-[#4D28D4] font-medium'>NETWORK <FaCaretDown className='text-[16px]' /> </p>
                 </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col gap-3 pt-[10px] font-medium'>
             <Link to={'/academy'}> <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>COMMUNITY</p></Link>
              <Link to={'/Market'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>MARKET</p></Link>
              <Link to={"/looking"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>LOOKING</p></Link>
              </div>
              </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded >
           <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                <p className='flex items-center gap-2 hover:text-[#4D28D4] font-medium'>ADD ONS <FaCaretDown className='text-[16px]' /> </p>
                 </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col gap-3 pt-[10px] font-medium'>
                <Link to={"/Cricllog"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>CRICLOG PRO</p></Link>
              <Link to={'/livestream'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>LIVE STREAMING</p></Link>
              <Link to={"/scoreticker"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>SCORE TICKER</p></Link>
              <Link to={'/yourapp'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>YOUR APP</p></Link>
              <Link to={"/YourWeb"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>YOUR WEB</p></Link>
              <Link to={"/powerpromote"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>POWER PROMOTE</p></Link>
             <Link to={'/supersponsor'}> <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>SUPER SPONSOR</p></Link>
              </div>
              </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded >
           <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                <p className='flex items-center gap-2 hover:text-[#4D28D4] font-medium'>MORE <FaCaretDown className='text-[16px]' /> </p>
                 </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col gap-3 py-[10px] font-medium'>
              <Link to={'/crickettips'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>CRICKET TIPS</p></Link>
              <Link to={'/news'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>NEWS</p></Link>
              <Link to={'/Faqs'}> <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>FAQS</p></Link>
              <Link to={"/organizetournament"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>ORGANIZE TOURNAMENT</p></Link>
              <a href="https://awards.cricheroes.in/" target='Blank'><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>AWARDS</p></a>
              </div>
              </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            <a href="https://tdr.cricheroes.com/?utm_source=cricheroes_website&utm_medium=cricheroes_tdr_icon&utm_campaign=the_dressing_room" target='Blank'> <p className='font-medium hover:text-[#4D28D4]'>STORE</p></a>
            <Link to ={"/jobs"}><p className='font-medium hover:text-[#4D28D4]'>JOBS</p> </Link> 
            <Link to={"/Contact"}><p className='font-medium hover:text-[#4D28D4]'>CONTACT US</p></Link>
            <div className='flex gap-10'>
            <a href="https://play.google.com/store/apps/details?id=com.cricheroes.cricheroes.alpha"><img src={Playstore} alt="couldn't load image" width="30px" height="30px"/></a>
            <a href="https://apps.apple.com/us/app/cricheroes-cricket-scoring-app/id1222844050?ls=1"><img src={appstore} alt="couldn't load image" width="30px" height="30px"/></a>
            </div>
   </div>
</div>

  </>)
}





