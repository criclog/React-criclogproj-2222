import React, { Fragment, useEffect, useState } from 'react'
import { PiShareFat } from "react-icons/pi";
import matchuser from "../Assests/match/user_profile.png"
import axios from "axios";  
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { TiArrowSortedDown } from "react-icons/ti";
import { LineChart  } from '@mui/x-charts';
import { Gamehero } from './Matchplayer';
import { Teamdet } from './Matchplayer';
import { Gallery } from './Matchplayer';
import { useParams } from 'react-router-dom';


export const Matchlive = () => {
  return (
    <div>
        <div className='w-full min-h-100vh flex lg:flex-row flex-col justify-center gap-[20px] px-[20px] xl:px-[70px] pt-[30px] pb-[20px]'>
          <div className='lg:w-[60%] w-full min-h-100vh flex flex-col gap-[40px] ' >
    <Maincard/>
    <h1 className='hidden'><Scorecard/></h1>
   <h1 className='hidden'> <Commentarysec/></h1>
   <h1 className='hidden'><Analysis/></h1>
   <h1 className='hidden'><Gamehero/></h1>
   <h1 className='hidden'><Teamdet/></h1>
   <h1 className='hidden'><Gallery/></h1>
    </div>
    <div className='lg:w-[35%] sm:w-[80%] w-full  min-h-100vh flex flex-col  gap-[20px] '>
    <Matchvideo/>
    <Matchofficial/>
    <Matchdetails/>
    </div>
    </div>
    </div>
  )
}

const matchmain=[{matchname:"8th Carpediem B.R Sharma Champions Trophy 2024-25", location:"Jawaharlal Lal Nehru Cricket Stadium, Ghaziabad, 18-Dec-24, 40 Over,", matchtype:"Final", batteam:"Smashers", score:"4/2", over:"(1.0)", bowling:"Rangers", bowlingstatus:"yet to bat", tosswin:"Rangers", tossstatus:"won the toss and elected to field", 
  matchdate:'19/12/2024', detaillocation:'Jawaharlal Lal Nehru Cricket Stadium, Ghaziabad', updatedtime:'2024-12-19 at 10:17',matchoff:"Rahul sharma", bowlover:""}]

const batlivedata=[{battername:"Sawan Kumar*", R:20, B:10, four:2, six:2, SR:"100.00", status:"Not out", min:'30' },
  {battername:"Shewak", R:30, B:10, four:6, six:3, SR:"100.00", status:"Not out", min:'20' }]
const bowllivedata=[{bowlername:"deepak", Over:1.3, med:0, Run:26, norun:4, four:2, six:1, WD:2, NB:0, wicket:1, ECO:"10.94"} ]
const batlivedatat2=[{battername:"Parikshit Shah*", R:0, B:0, four:0, six:0, SR:"00.00", status:"", min:'0' },
  {battername:"Lokesh", R:0, B:0, four:0, six:0, SR:"00.00", status:"", min:'0' }]
const bowllivedatat2=[{bowlername:"nivas", Over:0, med:0, Run:0, WD:0, NB:0, wicket:0, ECO:"00.00"},{bowlername:"mugesh", Over:0, med:0, Run:0, wicket:0, WD:0, NB:0, ECO:"00.00"} ]





export const Maincard = () => {
  const [activeTab, setActiveTab] = useState("SCORECARD"); // Default tab
const matchnav=["SCORECARD", "COMMENTARY", "ANALYSIS", "GAMEHERO", "TEAMS", "GALLERY"]
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const[match,setmatchdata]=useState([])
  const{id}=useParams();


  const Fetchmatchdata=async()=>{
    await axios.get(`http://localhost:7000/getMatchById?MatchID=${id}`,)
    .then((res)=>setmatchdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchmatchdata();
},[])
    
    return (<>
                
      <div  className='w-full min-h-100vh  '>
        <div className='border-[1px] border-[#dfdede] pt-[15px] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
            
            <div className=' flex  justify-between px-[15px] gap-5'>
             <p className='sm:text-[14px] text-[12px] text-[#4D28D4] font-semibold'>{match.matchname} <span className='text-[#666565] italic'>({match.matchtype})</span></p>
             <p className='font-medium flex gap-[10px]'>
                 <button className=' h-[22px] lg:h-[23px] text-[12px] xl:text-[14px] md:text-[13px] flex justify-center items-center font-semibold bg-[#4D28D4] text-[white] px-3 rounded-[10px] '>LIVE</button> 
                 <PiShareFat className='text-[24px] text-[#888787] cursor-pointer' />
                 </p>
             </div>
             <div className='flex  justify-between px-[15px]'>
                  <p className='sm:text-[14px] text-[12px] text-[#8d8c8c] font-semibold'>{match.location}{match.MatchDate} {match.Updatedtime}</p>
             </div>
             <div className='flex  justify-between px-[15px]'>
                  <p className='sm:text-[14px] text-[12px] text-[#8b8b8b] font-semibold'>Toss: {match.tossstatus}</p>
             </div>
             <div className='w-full flex justify-between items-center px-[15px]'>
             <p className=' text-[15px] xl:text-[18px] md:text-[17px] text-[#4D28D4] font-semibold'>{match.batteam}</p>
             <h2 className='text-[15px] xl:text-[20px] md:text-[18px] flex gap-[4px] items-center text-[#4D28D4] font-semibold'>{match.score} <p className='text-[14px] font-semibold text-[black] '>({match.over})</p></h2>
             </div>
             <div className='w-full flex justify-between px-[15px]'>
              {/* bowling team name */}
             <p className=' text-[16px] xl:text-[18px] md:text-[17px] text-[#1b1b1b] font-semibold'>{match.bowlingteam}</p>
            <h2 className='xl:text-[14px] md:text-[13px] text-[13px] text-[#222121] flex gap-[4px] font-semibold'>{match.bowlingstatus}</h2>
             </div>
             
             <div className='px-[15px]  border-t-2 '>
              <ul className='sm:text-[12px] text-[11px] gap-3 text-[#646464] font-bold flex justify-between items-center sticky top-65 overflow-x-scroll sm:overflow-hidden'>
             {matchnav.map((tab) => (
                    <li
                      key={tab}
                      className={`py-3 px-1 hover:text-[#4D28D4] border-b-2 cursor-pointer  ${
                        activeTab === tab
                          ? "text-[#4D28D4] border-[#4D28D4]"
                          : "text-[#646464] border-[white]"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </li>))}
              </ul>
            </div>
            
          </div>
          <div className="w-full py-3">
              {activeTab === "SCORECARD" && <Scorecard />}
              {activeTab === "COMMENTARY" && <Commentarysec />}
              {activeTab === "ANALYSIS" && <Analysis />}
              {activeTab === "GAMEHERO" && <Gamehero />}
              {activeTab === "TEAMS" && <Teamdet />}
              {activeTab === "GALLERY" && <Gallery />}
            </div>
          </div>
    
    </>
)
  }

   
export const Matchvideo = () => {
  const[matchlive,setmatchlive]=useState([])
 
  const{id}=useParams();

  const Fetchlivedata=async()=>{
    await axios.get(`http://localhost:7000/getMatchLiveById?MatchID=${id}`,)
    .then((res)=>setmatchlive(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchlivedata();
},[])

    return (
      <div className='w-full min-h-100vh py-[20px] border-[1px] border-[#dfdede] pt-[15px] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'> 
     <div className='w-full flex justify-center py-[3px]'>
     <iframe className='sm:w-[400px] w-[250px] h-[180px]' src="https://www.youtube.com/embed/-1TdUlp4adE?si=ji4KjRAEjwuTO11Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <hr /> 
      {/* Live Score Details */}
      <div className="w-full flex justify-center">
        
          <div  className="w-[90%] flex items-center justify-between">
            <p className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Current RR <span className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{matchlive.currentRR}</span></p>
            <h2 className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Projected <p className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{matchlive.projected} <span className='sm:text-[13px] text-[11px] font-medium'>(at {matchlive.currentRR} RPO)</span></p></h2>
            <h2 className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Over RR <p className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{matchlive.overRR} <span className='sm:text-[13px] text-[11px]  font-medium'>({matchlive.currentRR})</span></p></h2>
          </div>

      </div>
      </div>
    )
  }


export const Matchofficial = () => {
  const[matchoff,setmatchoff]=useState([])
  const{id}=useParams();


  const Fetchmatchoffdata=async()=>{
    await axios.get(`http://localhost:7000/getMatchLiveById?MatchID=${id}`,)
    .then((res)=>setmatchoff(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchmatchoffdata();
},[])
  return (
    <div className='w-full min-h-100vh flex flex-col gap-[10px] border-2 py-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]'>
      <h2 className='px-[15px] text-[16px] font-semibold'>Match Officials</h2>
      <hr />

  
   <div className='w-full min-h-100vh px-[15px] flex gap-[10px] items-center'>
      <img src={matchuser}  className='w-[50px] h-[50px] rounded-full'/>
      <h3 className='flex flex-col'>
       <p className='text-[14px] font-semibold text-[#202020]'>{matchoff.matchofficial}</p> 
       <p className='text-[13px] font-semibold text-[#5a5a5a]'> {matchoff.matchofficialrole}</p>
      </h3>
   </div>


  
    </div>
  )
}


export const Matchdetails = () => {
  const[matchdet,setmatchdet]=useState([])
  const[matchoff,setmatchoff]=useState([])
  const{id}=useParams();


  const Fetchmatchdet=async()=>{
    await axios.get(`http://localhost:7000/getMatchById?MatchID=${id}`,)
    .then((res)=>setmatchdet(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}
const Fetchmatchoffdata=async()=>{
  await axios.get(`http://localhost:7000/getMatchLiveById?MatchID=${id}`,)
  .then((res)=>setmatchoff(res.data))
  .catch((err)=> toast.error(err.res.data.message))
  .finally()
}

useEffect(()=>{
  Fetchmatchdet();
  Fetchmatchoffdata();
},[])
  

  return (
    <div className='w-full min-h-100vh flex flex-col gap-[10px] border-2 py-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]'>
      <h2 className='px-[15px] text-[16px] font-semibold'>Match Details</h2>
      <hr />

   <div  className='w-full min-h-100vh px-[15px] flex flex-col gap-[10px] '>
    
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#464444]'>Series Name</p>
       <p className='text-[14px] font-semibold text-[#4D28D4]'>{matchdet.matchname}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#464444]'>Match Date</p>
       <p className='text-[14px] font-semibold text-[#98989b]'>{matchdet.MatchDate}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#464444]'>Location</p>
       <p className='text-[14px] font-semibold text-[#4D28D4]'>{matchdet.detaillocation}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#464444]'>Last Updated</p>
       <p className='text-[14px] font-semibold text-[#616060]'>{matchoff.matchofficial} ({matchdet.Updatedtime})</p> 
      </h3>
   </div>
    </div>
  )
}




export const Team1Livedata = () => {
  const[match,setmatchdata]=useState([])
  const[matchbowling,setmatchbowling]=useState([])
  const{id}=useParams();


  const Fetchmatchdata=async()=>{
    await axios.get(`http://localhost:7000/getBattingData1ById?MatchID=${id}`,)
    .then((res)=>setmatchdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}
const Fetchbowlingdata=async()=>{
  await axios.get(`http://localhost:7000/getBowlingDataById?MatchID=${id}`,)
  .then((res)=>setmatchbowling(res.data))
  .catch((err)=> toast.error(err.res.data.message))
  .finally()
}

useEffect(()=>{
  Fetchmatchdata();
  Fetchbowlingdata();
},[])
  
  return (
    <div className='w-full min-h-100vh border-[1px]'>
      <div>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[12px] py-[8px] bg-[#dfdede] font-semibold '>
        <li>Batters</li>
        <h1 className='sm:w-[65%] w-[58%]  flex justify-between px-1'>
        <li>R</li>
        <li>B</li>
        <li>4s</li>
        <li>6s</li>
        <li>SR</li>
        <li>min</li>
        </h1>
       </ul>
       <div>
       {
        match.map((batlive)=>(
          <div key={batlive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold px-1'>{batlive.BatterName1}</li>
        <li>{batlive.Status1}</li>
        <h1 className='sm:w-[65%] w-[60%] flex justify-between px-1'>
        <li>{batlive.Run1}</li>
        <li>{batlive.Ball1}</li>
        <li>{batlive.Four1}</li>
        <li>{batlive.Six1}</li>
        <li>{batlive.SR1}</li>
        <li >{batlive.Min1}</li>
        </h1>
       </ul>
       </div>
))}</div>
<div>
       {
        match.map((batlive)=>(
          <div key={batlive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold px-1'>{batlive.BatterName2}</li>
        <li>{batlive.Status2}</li>
        <h1 className='sm:w-[65%] w-[60%] flex justify-between px-1'>
        <li>{batlive.Run2}</li>
        <li>{batlive.Ball2}</li>
        <li>{batlive.Four2}</li>
        <li>{batlive.Six2}</li>
        <li>{batlive.SR2}</li>
        <li >{batlive.Min2}</li>
        </h1>
       </ul>
       </div>
))}</div>
        <h1 className='sm:text-[12px] text-[10px] py-[5px] px-[10px] sm:px-[20px]'>Yet to Bat:{match.Yettobat}</h1>
        <hr />
        <h1 className='sm:text-[12px] text-[10px] py-[5px] px-[10px] sm:px-[20px]'>Fall Of Wickets:{match.fallofwickets}</h1>
      </div>
      <div>
       <ul className='w-full flex justify-between px-[10px] sm:px-[20px] sm:text-[14px] text-[11px] py-[8px] bg-[#dfdede] font-semibold'>
        <li>Bowlers</li>
        <h1 className='w-[75%] flex justify-between'>
        <li>O</li>
        <li>M</li>
        <li>R</li>
        <li>W</li>
        <li>WD</li>
        <li>ECO</li>
        </h1>
       </ul>
       <div>
       {
        matchbowling.map((bowllive)=>(
          <div key={bowllive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold'>{bowllive.bowlername}</li>
        <h1 className='w-[75%] flex justify-between'>
        <li>{bowllive.over}</li>
        <li>{bowllive.med}</li>
        <li>{bowllive.run}</li>
        <li>{bowllive.wicket}</li>
        <li>{bowllive.wide}</li>
       
        <li>{bowllive.ECO}</li>
        </h1>
       </ul>
       </div>
))}</div>  
      </div>
    </div>
  )
}



export const Team2Livedata = () => {
  
  return (
    <div className='w-full min-h-100vh border-[1px]'>
      <div>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[12px] py-[8px] bg-[#dfdede] font-semibold '>
        <li>Batters</li>
        <h1 className='sm:w-[65%] w-[58%]  flex justify-between px-1'>
        <li>R</li>
        <li>B</li>
        <li>4s</li>
        <li>6s</li>
        <li>SR</li>
        <li>min</li>
        </h1>
       </ul>
       <div>
       {
        batlivedatat2.map((batlive)=>(
          <div key={batlive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[12px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold px-1'>{batlive.battername}</li>
        <li>{batlive.status}</li>
        <h1 className='sm:w-[65%] w-[58%]  flex justify-between px-1'>
        <li>{batlive.R}</li>
        <li>{batlive.B}</li>
        <li>{batlive.four}</li>
        <li>{batlive.six}</li>
        <li>{batlive.SR}</li>
        <li >{batlive.min}</li>
        </h1>
       </ul>
       </div>
))}</div>
        <h1 className='sm:text-[12px] text-[10px] py-[5px] px-[10px] sm:px-[20px]'>Yet to Bat:</h1>
        <hr />
        <h1 className='sm:text-[12px] text-[10px] py-[5px] px-[10px] sm:px-[20px]'>Fall Of Wickets:</h1>
      </div>
      <div>
       <ul className='w-full flex justify-between px-[10px] sm:px-[20px] sm:text-[14px] text-[11px] py-[8px] bg-[#dfdede] font-semibold'>
        <li>Bowlers</li>
        <h1 className='w-[75%] flex justify-between'>
        <li>O</li>
        <li>M</li>
        <li>R</li>
        <li>W</li>
        <li>WD</li>
        <li>NB</li>
        <li>ECO</li>
        </h1>
       </ul>
       <div>
       {
        bowllivedatat2.map((bowllive)=>(
          <div key={bowllive.id}>
       <ul className='w-full flex justify-between px-[10px] sm:px-[20px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold'>{bowllive.bowlername}</li>
        <h1 className='w-[75%] flex justify-between'>
        <li>{bowllive.Over}</li>
        <li>{bowllive.med}</li>
        <li>{bowllive.Run}</li>
        <li>{bowllive.wicket}</li>
        <li>{bowllive.WD}</li>
        <li>{bowllive.NB}</li>
        <li>{bowllive.ECO}</li>
        </h1>
       </ul>
       </div>
))}</div>  
      </div>
    </div>
  )
}

export const Scorecard=()=>{
  const[match,setmatchdata]=useState([])
  const{id}=useParams();


  const Fetchmatchdata=async()=>{
    await axios.get(`http://localhost:7000/getMatchById?MatchID=${id}`,)
    .then((res)=>setmatchdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}
  
  useEffect(()=>{
    Fetchmatchdata();
  },[])

  return(<div className='w-full min-h-100vh flex flex-col gap-[20px]'>
     
  
 <Accordion key={id} allowZeroExpanded className='w-full min-h-100vh border-[1px] rounded-lg ' >
      
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[14px] flex justify-between'><p className='hover:text-[#4D28D4]'>{match.batteam}</p> <p className='flex items-center gap-[5px] sm:text-[16px] text-[13px]'>{match.score} <span className='sm:text-[12px] text-[11px] text-[#3d3c3c]'>({match.over})</span> <TiArrowSortedDown className='text-[20px]' /></p></h2>
             </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Team1Livedata/>
          </AccordionItemPanel>
        </AccordionItem>
        <hr /> 
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[14px] flex justify-between'><p className='hover:text-[#4D28D4]'>{match.bowlingteam}</p> <p className='flex items-center gap-[5px] sm:text-[14px] text-[13px]'>{match.bowlingstatus} <span className='sm:text-[12px] text-[11px] text-[#3d3c3c]'>{match.bowlover}</span> <TiArrowSortedDown className='text-[20px]' /></p></h2>
             </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Team2Livedata/>
          </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
           
    </div>)
}




export const Commentaryteam1=()=>{

const[Comment1,setcomment1]=useState([])
const{id}=useParams();


const Fetchcomment1data=async()=>{
  await axios.get(`http://localhost:7000/getCommentaryById?MatchID=${id}`,)
  .then((res)=>setcomment1(res.data))
  .catch((err)=> toast.error(err.res.data.message))
  .finally()
}

useEffect(()=>{
  Fetchcomment1data();
},[])



return(<div className='w-full min-h-100vh'>
   { Comment1.map((Comment1, id)=>(
    <Fragment key={id}>
    <div className='w-full flex flex-col gap-[5px] items-center text-[14px] border-[1px] '>
      
 <div className='w-full flex gap-[10px] items-center py-[5px] sm:px-[20px] px-[10px]'>
 <h2 className='font-bold text-[#858383] sm:text-[14px] text-[11px]'>{Comment1.team1over} </h2>
 <p className='sm:w-[30px] sm:h-[30px] w-[15px] h-[30px] px-[15px] font-semibold rounded-full flex items-center justify-center bg-[#b6dbd4] sm:text-[14px] text-[12px]'>{Comment1.status1}</p>
 <p className='font-semibold sm:text-[14px] text-[12px]'>{Comment1.message1}</p>
 </div>
 </div>
 <div className={`w-full flex justify-between text-[white] bg-[#4D28D4] py-[5px] sm:px-[20px] px-[10px] ${!Comment1.endover1 ? "hidden":"visible"}`}>
        <div className='w-full flex gap-2 sm:text-[14px] text-[12px]  '>
       <p>END OF OVER: {Comment1.endover1}</p>
       <p>{Comment1.runandwicket1}</p></div>
       <div>
        <p className='sm:text-[15px] text-[13px] pl-[30px]'>{Comment1.overallscore1}</p>
       </div>

      </div></Fragment>))}
 </div> 
)
}

export const Commentaryteam2=()=>{
  const[Comment2,setcomment2]=useState([])
const{id}=useParams();


const Fetchcomment1data=async()=>{
  await axios.get(`http://localhost:7000/getCommentaryById?MatchID=${id}`,)
  .then((res)=>setcomment2(res.data))
  .catch((err)=> toast.error(err.res.data.message))
  .finally()
}

useEffect(()=>{
  Fetchcomment1data();
},[])


 
  
  return(<div className='w-full min-h-100vh'>
    
    {
  Comment2.map((comment2,id)=>(
    <Fragment key={id} >
    <div className='w-full flex flex-col gap-[5px] items-center text-[14px] border-[1px] '>
      
 <div className='w-full flex gap-[10px] items-center py-[5px] sm:px-[20px] px-[10px]'>
 <h2 className='font-bold text-[#858383] sm:text-[14px] text-[11px]'>{comment2.team2over} </h2>
 <p className='sm:w-[30px] sm:h-[30px] w-[15px] h-[30px] px-[15px] font-semibold rounded-full flex items-center justify-center bg-[#00FFCF] sm:text-[14px] text-[12px]'>{comment2.status2}</p>
 <p className='font-semibold sm:text-[14px] text-[12px]'>{comment2.message2}</p>
 </div>
 </div>
 <div className={`w-full flex justify-between text-[white] bg-[#4D28D4] py-[5px] sm:px-[20px] px-[10px] ${!comment2.endover2 ? "hidden":"visible"}`}>
        <div className='w-full flex gap-2 sm:text-[14px] text-[12px]  '>
       <p>END OF OVER: {comment2.endover2}</p>
       <p>{comment2.runandwicket2}</p></div>
       <div>
        <p className='sm:text-[15px] text-[13px] pl-[30px]'>{comment2.overallscore2}</p>
       </div>

      </div>
 </Fragment>
   ))}
   
  </div>
  
  )
  }




export const Commentarysec = () => {
  const[match,setmatchdata]=useState([])
  const{id}=useParams();


  const Fetchmatchdata=async()=>{
    await axios.get(`http://localhost:7000/getMatchById?MatchID=${id}`,)
    .then((res)=>setmatchdata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}
  
  useEffect(()=>{
    Fetchmatchdata();
  },[])
  return (
    <div className='w-full min-h-100vh flex flex-col gap-[20px]'>
     { 
            matchmain.map((maindata,id)=>(
  
 <Accordion key={id} allowZeroExpanded className='w-full min-h-100vh border-[1px] rounded-lg ' >
      
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[13px] flex justify-between bg-[#f5f4f4]'><p className='hover:text-[#4D28D4]'>{match.batteam}</p>  <TiArrowSortedDown className='sm:text-[20px] text-[18px]' /></h2>
             </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Commentaryteam1/>
          </AccordionItemPanel>
        </AccordionItem>
        <hr /> 
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[13px] flex justify-between bg-[#f5f4f4]'><p className='hover:text-[#4D28D4]'>{match.bowlingteam}</p> <TiArrowSortedDown className='sm:text-[20px] text-[18px]' /></h2>
             </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Commentaryteam2/>
          </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
            ))}
    </div>)
  
}
  

export const Analysis=()=>{
  let pData=[2,4,20,30,40,45,30]
  let uData=[1,2,3,5,40,60,50]
  let xLabels=[1,2,3,4,5,6,7,]
  return(<div className='w-full min-h-100vh border-[1px] flex flex-col gap-5 justify-center items-center py-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>

    {  matchmain.map((maindata,id)=>(
      <Fragment key={id}>
    <h1 className='sm:text-[18px] text-[15px] font-medium text-[#666464]'>Run Rate</h1>
    <div className="w-[300px] sm:w-[400px] h-[250px]">
    <LineChart

  series={[
    { data:pData , label: `${maindata.batteam}` },
    { data:uData, label: `${maindata.bowling}` },
  ]}
  xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
    </Fragment>
))}
  </div>
  )
}