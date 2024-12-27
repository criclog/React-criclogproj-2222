import React, { useState } from 'react'
import logo from '../Assests/logo.png'
import Playstore from '../Assests/playstore.png'
import appstore from '../Assests/appStore logo.png'
import { FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';



export const Navbar = () => {
 const[Searchbar,SetSearchbar]=useState(false)
 const [isChecked, setIsChecked] = useState(false);

 const handleToggle =()=>{
    setIsChecked(true)
};

 const handlesearch=()=>{
    SetSearchbar(true)
 }

 const handlesearchclose=()=>{
    SetSearchbar(false)
 }
 
 const handlemenuclose =()=> {
  setIsChecked(false)
};


  return (<>
    {Searchbar ? 
    (<div className='w-full h-[65px] shadow-lg shadow-[#00000038] bg-[white] flex flex-row justify-between items-center pl-[50px] fixed z-20'>

<div className='xl:w-[10%] w-[90%] flex items-center gap-4'>
<p className='text-[28px] ml-[-20px] xl:hidden visible cursor-pointer ' onClick={handleToggle} ><MdMenu/></p>   

<div className='w-full flex items-center justify-center gap-2'>
       <Link to={"/"}><img src={logo} alt="couldn't load image" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]'/></Link> 
       <Link to={"/"}><h3 className='font-bold sm:text-[18px] text-[14px] text-[#4D28D4] '>CRICLOG</h3></Link> 
       </div>
</div>

<ul className='xl:w-[70%] w-full h-full xl:flex items-center xl:gap-[25px] gap-[25px] font-semibold text-[13px] cursor-pointer xl:visible hidden'>
        
         <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>LIVE SCORES <FaCaretDown className='text-[16px]' /> </p> 
        <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
            <Link to={"/live-match"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MATCHES</li></Link>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENTS</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ASSOCIATIONS</li>
        </ul>                
        </li>
        
        <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>NETWORK<FaCaretDown className='text-[16px]' /> </p> 
        <ul className='min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
          <Link to={'/academy'}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>COMMUNITY</li></Link> 
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MARKET</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LOOKING</li>
        </ul>                
        </li>
        <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>ADD ONS<FaCaretDown className='text-[16px]' /> </p> 
        <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
          <Link to={"/Cricllog"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICLOG PRO</li> </Link> 
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LIVE STREAMING</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SCORE TICKER</li>
            <Link to={'/yourapp'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR APP</li></Link>
           <Link to={"/YourWeb"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR WEB</li></Link>
          <Link to={"/powerpromote"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>POWER PROMOTE</li></Link> 
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SUPER SPONSOR</li>
        </ul>                
        </li>
        <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>MORE <FaCaretDown className='text-[16px]' /> </p> 
        <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENT GUIDE</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICKET TIPS</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>NEWS</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>FAQS</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ORGANIZE TOURNAMENT</li>
            <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>AWARDS</li>
        </ul>                
        </li>
        
        <li className='hover:text-[#4D28D4]'>STORE</li>
       <Link to ={"/jobs"}><li className=' hover:text-[#4D28D4]'>JOBS</li> </Link> 
        <Link to={"/Contact"}><li className='hover:text-[#4D28D4]'>CONTACT US</li></Link>
                <Link to={"/Login"}><button className='py-[3px] px-[5px] text-[13px] border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>
        
    </ul>
    <p className='md:w-[20%] w-[45%] flex sm:gap-3 gap-1 items-center text-[black] visible xl:ml-[-270px] ml-0 sm:mr-[20px] mr-[10px]'>
    <input type="text" name='search' placeholder='Search Tournaments, Matches..' className='sm:text-[12px] text-[10px] rounded-md border-[2px] border-[#252525] lg:py-[5px] py-[2px] lg:w-[180px] sm:w-[120px] w-[90px] px-[4px] ' />
        <RxCross2 className='sm:text-[20px] text-[14px]' onClick={handlesearchclose}/>
        </p>
</div>)
    :(<div className='w-full h-[65px] shadow-lg shadow-[#00000038] bg-[white] flex flex-row justify-between items-center pl-[50px] fixed z-20'>

    
        <div className='xl:w-[10%] w-[90%] flex items-center gap-4'>
<p className='text-[28px] ml-[-15px] xl:hidden visible cursor-pointer ' onClick={handleToggle} ><MdMenu/></p>   
       <div className='w-full flex items-center justify-center gap-3'>
       <Link to={"/"}><img src={logo} alt="couldn't load image" className='sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]'/></Link> 
       <Link to={"/"}><h3 className='font-bold sm:text-[18px] text-[14px] text-[#4D28D4] '>CRICLOG</h3></Link> 
       </div> </div>
            <ul className='xl:w-[70%] w-full h-full xl:flex items-center xl:gap-[25px] gap-[25px] font-semibold text-[13px] cursor-pointer xl:visible hidden'>
               
                 <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>LIVE SCORES <FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                    <Link to={"/live-match"}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MATCHES</li></Link>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>TOURNAMENTS</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>ASSOCIATIONS</li>
                </ul>                
                </li>
                
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>NETWORK<FaCaretDown className='text-[16px]' /> </p> 
                <ul className='min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                <Link to={'/academy'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>COMMUNITY</li></Link>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>MARKET</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LOOKING</li>
                </ul>                
                </li>
                <li className='flex flex-col items-center group'><p className='flex items-center gap-1 hover:text-[#4D28D4]'>ADD ONS<FaCaretDown className='text-[16px]' /> </p> 
                <ul className=' min-w-100vw min-h-100vh grid flex-col bg-[white] absolute top-[65px] font-semibold rounded-md border invisible group-hover:visible ease-out delay-300'>
                <Link to={"/Cricllog"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>CRICLOG PRO</li> </Link> 
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>LIVE STREAMING</li>
                    <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>SCORE TICKER</li>
                    <Link to={'/yourapp'}><li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR APP</li></Link>
                    <Link to={"/YourWeb"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>YOUR WEB</li></Link>
                    <Link to={"/powerpromote"}> <li className='px-[15px] py-[10px] hover:text-[#4D28D4] hover:bg-[#f0f2f5]'>POWER PROMOTE</li></Link> 
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
               <Link to={"/Contact"}><li className='hover:text-[#4D28D4]'>CONTACT US</li></Link>
                <img src={Playstore} alt="couldn't load image" width="30px" height="30px"/>
                <img src={appstore} alt="couldn't load image" width="30px" height="30px"/>
                <Link  to={"/Login"}><button className='py-[3px] px-[5px] text-[13px]  border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>  
                
                </ul>
                <p className='w-[5%] text-[30px] text-[#4D28D4] visible ml-[-260px] pr-[40px]' onClick={handlesearch}><IoSearchSharp /></p>
            

    </div>)}

    <div className={`${isChecked? 'w-[80%] h-screen py-[30px] bg-[#ffffff] fixed z-30 overflow-y-scroll':"hidden"}`}> 
   <div className='w-full px-[40px] flex flex-col text-[14px] gap-5 '>
   <p onClick={handlemenuclose} className='text-[20px]'><RxCross2/></p>
   <Link  to={"/Login"}><button className='py-[6px] w-full text-[14px] font-medium border-[#4D28D4] border-[2px] rounded-md text-[black] hover:text-[white] hover:bg-[#4D28D4] ease-in-out duration-300'>SIGN IN</button> </Link>
   
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
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>TOURNAMENTS</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>ASSOCIATIONS</p>
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
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>MARKET</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>LOOKING</p>
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
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>LIVE STREAMING</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>SCORE TICKER</p>
              <Link to={'/yourapp'}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>YOUR APP</p></Link>
              <Link to={"/YourWeb"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>YOUR WEB</p></Link>
              <Link to={"/powerpromote"}><p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>POWER PROMOTE</p></Link>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>SUPER SPONSOR</p>
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
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>TOURNAMENT GUIDE</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>CRICKET TIPS</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>NEWS</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>FAQS</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>BLOG</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>ORGANIZE TOURNAMENT</p>
              <p className='hover:bg-[#00000010] p-1 hover:text-[#4D28D4]'>AWARDS</p>
              </div>
              </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            <p className='font-medium hover:text-[#4D28D4]'>STORE</p>
            <Link to ={"/jobs"}><p className='font-medium hover:text-[#4D28D4]'>JOBS</p> </Link> 
            <Link to={"/Contact"}><p className='font-medium hover:text-[#4D28D4]'>CONTACT US</p></Link>
            <div className='flex gap-10'>
            <img src={Playstore} alt="couldn't load image" width="30px" height="30px"/>
            <img src={appstore} alt="couldn't load image" width="30px" height="30px"/>
            </div>
   </div>
</div>

  </>)
}





