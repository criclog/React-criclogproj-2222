import React, { useState } from 'react'
import groupimg from '../Assests/jobimages/group photo.jpg'
import { Homenumbersect } from '../Homesection/Homesect'
import { IoIosArrowDown } from "react-icons/io";


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export const Jobs = () => {
  return (
    <div className='w-full  min-h-100vh'>
     <Jobhero/>
     <Jobspots/>
     <Jobteam/>
     <Homenumbersect/>
     <Jobchase/>
    </div>
  )
}

export const Jobhero = () => {
  return (
    <div className='w-full min-h-100vh bg-[#4D28D4] flex flex-col justify-center items-center gap-[20px] py-[50px] px-[50px]'>
      <h2 className='text-[white] md:text-[32px] sm:text-[30px] text-[28px] font-medium text-center'>Join <span className='font-semibold md:text-[38px] sm:text-[36px] text-[34px]'>CricLog</span> Team</h2>
      <p className='md:text-[18px] sm:text-[17px] text-[16px] text-[white]'>Searching for a job you love? You’ve come to the right place!</p>
    </div>
  )
}

export const Jobspots = () => {
  const jobaccordion = [
    { id: 1, head: "Full Stack Developer", subhead1:"Are you an aspiring tech enthusiast ready to leave your footprint in the world of software development?",
      para1:"Join criclog as a Full Stack Developer and contribute to transforming the digital landscape of cricket with a passionate and innovative team.",
      subhead2:"Our Mission:", para2:"As a Full Stack Developer proficient in Node.js, JavaScript, MySQL, MongoDB, Redis, and React JS (NextJS), your main role will be to develop and maintain our web applications and services."
  },
  { id: 2, head: "Acquisition All-Rounder", subhead1:"Do you have a passion for cricket and connecting with people?",
    para1:"We're on the lookout for a dynamic Acquisition All-Rounder at criclog who is as passionate about grassroots cricket as we are and eager to impact the lives of local cricketers and organizers. If you love cricket and excel at communication, we'd love to have you on our team!",
    subhead2:"Why Join criclog?", para2:"We are proudly crafted in India by passionate cricketers, for cricketers worldwide. If you're eager to be part of a team committed to revolutionizing the grassroots cricket landscape, we'd be excited to connect with you."
},
{ id: 3, head: "Pro - All Rounder", subhead1:"We're searching for our next Pro Subscription All-Rounder to join the criclog team!",
  para1:"Become a key player on our team and help us make a lasting impact. You'll collaborate with dedicated cricket fans to lead our product-driven strategies for acquiring, retaining, and engaging Pro Users. Your goal: to impress our Pro subscribers with creative solutions and flawless execution.",
  subhead2:"Who Are We?", para2:"criclog is the world’s largest cricket network, boasting over 30 million users. It empowers grassroots cricketers to showcase their skills, gain recognition, and enhance their performance through data-driven insights."
},
{ id: 4, head: "Senior Data Scientist", subhead1:"We're seeking our next Senior Data Scientist All-Rounder to join the criclog team!",
  para1:"At criclog, we're not just collecting stats; we're building an ecosystem where #CricketMatters! If you're ready to step up to the crease and help us leverage millions of data points to transform grassroots cricket, this could be your dream role!",
  subhead2:"Who Are We?", para2:"criclog is the world's largest cricket network, with over 31 million users. We empower local cricketers to showcase their talent, gain recognition, and enhance their game through data. We're building a culture where #NoRulesRules, focusing on Context over Control while growing our Talent Density. Along the way, we're fostering a Culture of Candour as we strive to reach 100 million users!"
},];


const [accord,setaccord]=useState(false)

 const handle=(id)=>{
  setaccord((previd) => (previd === id ? null : id));
 }

  return (
  
    
    <div className='w-full  min-h-100vh flex flex-col justify-center items-center gap-[20px] py-[50px]'>
             <h4 className='md:text-[28px] sm:text-[26px] font-bold text-[#222027] text-[22px]'>OPEN SPOTS</h4>

              
             <Accordion allowZeroExpanded className='w-[80%] md-[75%] flex flex-col justify-center item-center' >
      {jobaccordion.map((item) => (
        <AccordionItem key={item.id} className="w-full flex flex-col gap-3 border-[#16161623] border-[1px] p-[5px]" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p className='md:text-[17px] sm:text-[16px] text-[14px]  font-bold flex justify-between items-center px-[15px] text-[#000000d3] hover:text-[#4D28D4] easy-in-out duration-300' onClick={()=>handle(item.id)}>{item.head} {item.id!==accord ? <IoIosArrowDown/>: <IoIosArrowDown className='rotate-180'/>}</p></AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="w-full flex flex-col gap-3 px-[15px] py-[10px]">
            <p className='text-[14px] font-bold text-[#000000d3]'>{item.subhead1}</p>
            <p className='text-[14px]'>{item.para1}</p>
            <p className='text-[14px] font-bold text-[#000000d3]'>{item.subhead2}</p>
            <p className='text-[14px]'>{item.para2}</p></div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
      <p className=' w-[80%] text-center text-[14px] font-bold text-[#000000da]'>If you look forward to join our innings, please send your resume to <span className='text-[#4D28D4]'>people@criclog.in.</span>
     <br /> For other profiles, please click here.</p>
    </div>
  )
}




export const Jobteam = () => {
  return (
    <div className='w-full  min-h-100vh flex flex-col justify-center items-center gap-[30px] md:py-[40px] py-[20px]'>
             <h4 className='md:text-[28px] sm:text-[26px] font-bold text-[#222027] text-[22px]'>OUR TEAM</h4>
             <img src={groupimg} alt=" couldn't load image"  className='w-[80%] md:rounded-[20px] rounded-[10px]'/>
    </div>
  )
}

export const Jobchase = () => {
  return (
    <div className='w-full  min-h-100vh flex flex-col justify-center items-center gap-[20px] py-[60px] px-[40px]'>
             <h4 className='text-[22px] text-center sm:text-[26px] md:text-[28px] font-bold text-[#222027]'>Let’s pursue this together.</h4>
             <p className='text-[14px] md:text-[16px] text-center font-medium text-[#2e2e2e]'>Be part of our team and revolutionize the game of cricket. Please send your resume to <span className='text-[#4D28D4]'>people@criclog.in.</span></p>
             
    </div>
  )
}

