import React, { Fragment, useState } from 'react'
import { PiShareFat } from "react-icons/pi";
import matchuser from "../Assests/match/user_profile.png"


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
const livescore=[{currentRR:'14.00', projected:140, overRR:"74/4", matchuserimg:matchuser, matchoff:"Rahul sharma", matchofficialrole:"Scorer" }]
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
    
    return (<>
        { 
            matchmain.map((maindata,id)=>(
               
      <div key={id} className='w-full min-h-100vh '>
        <div className='border-[1px] border-[#dfdede] pt-[15px] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
            
            <div className=' flex  justify-between px-[15px] gap-5'>
             <p className='sm:text-[14px] text-[12px] text-[#4D28D4] font-medium'>{maindata.matchname} <span className='text-[#666565] italic'>({maindata.matchtype})</span></p>
             <p className='font-medium flex gap-[10px]'>
                 <button className=' h-[22px] lg:h-[23px] text-[12px] xl:text-[14px] md:text-[13px] flex justify-center items-center font-semibold bg-[#4D28D4] text-[white] px-3 rounded-[10px] '>LIVE</button> 
                 <PiShareFat className='text-[24px] text-[#888787] cursor-pointer' />
                 </p>
             </div>
             <div className='flex  justify-between px-[15px]'>
                  <p className='sm:text-[14px] text-[12px] text-[#636262] font-medium'>{maindata.location}</p>
             </div>
             <div className='flex  justify-between px-[15px]'>
                  <p className='sm:text-[14px] text-[12px] text-[#636262] font-medium'>Toss: {maindata.tosswin} {maindata.tossstatus}</p>
             </div>
             <div className='w-full flex justify-between items-center px-[15px]'>
             <p className=' text-[15px] xl:text-[18px] md:text-[17px] text-[#4D28D4] font-semibold'>{maindata.batteam}</p>
             <h2 className='text-[15px] xl:text-[20px] md:text-[18px] flex gap-[4px] items-center text-[#4D28D4] font-semibold'>{maindata.score} <p className='text-[14px] font-semibold text-[black] '>{maindata.over}</p></h2>
             </div>
             <div className='w-full flex justify-between px-[15px]'>
              {/* bowling team name */}
             <p className=' text-[16px] xl:text-[18px] md:text-[17px] text-[#1b1b1b] font-semibold'>{maindata.bowling}</p>
            <h2 className='xl:text-[14px] md:text-[13px] text-[13px] text-[#222121] flex gap-[4px] font-semibold'>{maindata.bowlingstatus}</h2>
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
      ))}
    </>
)
  }

   
export const Matchvideo = () => {
  
    return (
      <div className='w-full min-h-100vh py-[20px] border-[1px] border-[#dfdede] pt-[15px] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'> 
     <div className='w-full flex justify-center py-[3px]'>
     <iframe className='sm:w-[400px] w-[250px] h-[180px]' src="https://www.youtube.com/embed/-1TdUlp4adE?si=ji4KjRAEjwuTO11Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <hr /> 
      {/* Live Score Details */}
      <div className="w-full flex justify-center">
        {livescore.map((score, id) => (
          <div key={id} className="w-[90%] flex items-center justify-between">
            <p className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Current RR <span className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{score.currentRR}</span></p>
            <h2 className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Projected <p className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{score.projected} <span className='sm:text-[13px] text-[11px] font-medium'>(at {score.currentRR} RPO)</span></p></h2>
            <h2 className='min-h-100vh flex flex-col text-center sm:text-[14px] text-[12px] font-semibold gap-1'>Over RR <p className=' sm:text-[16px] text-[13px] font-bold text-[#3a3939]'>{score.overRR} <span className='sm:text-[13px] text-[11px]  font-medium'>({score.currentRR})</span></p></h2>
          </div>
))}
      </div>
      </div>
    )
  }


export const Matchofficial = () => {
  return (
    <div className='w-full min-h-100vh flex flex-col gap-[10px] border-2 py-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]'>
      <h2 className='px-[15px] text-[16px] font-semibold'>Match Officials</h2>
      <hr />
{
  livescore.map((matchoffical,id)=>(
   <div key={id} className='w-full min-h-100vh px-[15px] flex gap-[10px] items-center'>
      <img src={matchoffical.matchuserimg}  className='w-[50px] h-[50px] rounded-full'/>
      <h3 className='flex flex-col'>
       <p className='text-[14px] font-semibold text-[#202020]'>{matchoffical.matchoff}</p> 
       <p className='text-[12px] font-semibold text-[#5a5a5a]'> {matchoffical.matchofficialrole}</p>
      </h3>
   </div>


  ))
}
    </div>
  )
}


export const Matchdetails = () => {
  return (
    <div className='w-full min-h-100vh flex flex-col gap-[10px] border-2 py-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]'>
      <h2 className='px-[15px] text-[16px] font-semibold'>Match Details</h2>
      <hr />
{
  matchmain.map((matchdet,id)=>(
   <div key={id} className='w-full min-h-100vh px-[15px] flex flex-col gap-[10px] '>
    
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#131212]'>Series Name</p>
       <p className='text-[12px] font-semibold text-[#4D28D4]'>{matchdet.matchname}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#131212]'>Match Date</p>
       <p className='text-[12px] font-semibold text-[#121213]'>{matchdet.matchdate}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#131212]'>Location</p>
       <p className='text-[12px] font-semibold text-[#4D28D4]'>{matchdet.detaillocation}</p> 
      </h3>
      <h3 className='flex flex-col'>
        <p className='text-[14px] font-semibold text-[#131212]'>Last Updated</p>
       <p className='text-[12px] font-semibold text-[#161616]'>{matchdet.matchoff} ({matchdet.updatedtime})</p> 
      </h3>
   </div>


  ))
}
    </div>
  )
}




export const Team1Livedata = () => {
  
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
        batlivedata.map((batlive)=>(
          <div key={batlive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
        <li className='text-[#4D28D4] font-semibold px-1'>{batlive.battername}</li>
        <li>{batlive.status}</li>
        <h1 className='sm:w-[65%] w-[60%] flex justify-between px-1'>
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
        bowllivedata.map((bowllive)=>(
          <div key={bowllive.id}>
       <ul className='w-full flex justify-between sm:px-[20px] px-[10px] sm:text-[14px] text-[11px] py-[8px] bg-[white] border-b-[1px] font-semibold'>
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

  return(<div className='w-full min-h-100vh flex flex-col gap-[20px]'>
     { 
            matchmain.map((maindata,id)=>(
  
 <Accordion key={id} allowZeroExpanded className='w-full min-h-100vh border-[1px] rounded-lg ' >
      
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[14px] flex justify-between'><p className='hover:text-[#4D28D4]'>{maindata.batteam}</p> <p className='flex items-center gap-[5px] sm:text-[14px] text-[13px]'>{maindata.score} <span className='sm:text-[12px] text-[11px] text-[#3d3c3c]'>{maindata.over}</span> <TiArrowSortedDown className='text-[20px]' /></p></h2>
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
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[14px] flex justify-between'><p className='hover:text-[#4D28D4]'>{maindata.bowling}</p> <p className='flex items-center gap-[5px] sm:text-[14px] text-[13px]'>{maindata.bowlingstatus} <span className='sm:text-[12px] text-[11px] text-[#3d3c3c]'>{maindata.bowlover}</span> <TiArrowSortedDown className='text-[20px]' /></p></h2>
             </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Team2Livedata/>
          </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
            ))}
    </div>)
}




export const Commentaryteam1=()=>{
const commentteam1=[{over:'11.5', status:'6', msg:'JAGMOHAN UPADHYAY to Deepak Sancheti, 6'}, {over:'11.6', status:'4', msg:'JAGMOHAN UPADHYAY to Deepak Sancheti, 4',endover:'11', runandwkt:'(20 runs 1 wickets)' , overscore:'108/3'},{over:'12.1', status:'W', msg:'JAGMOHAN UPADHYAY to Deepak Sancheti, no run'}, {over:'12.2', status:'6', msg:'JAGMOHAN UPADHYAY to rahul, 6'}] 

return(<div className='w-full min-h-100vh'>

  {

commentteam1.map((comment1,id)=>(
  <Fragment key={id} >
    <div className='w-full flex flex-col gap-[5px] items-center text-[14px] border-[1px] '>
      
 <div className='w-full flex gap-[10px] items-center py-[5px] sm:px-[20px] px-[10px]'>
 <h2 className='font-bold text-[#858383] sm:text-[14px] text-[11px]'>{comment1.over} </h2>
 <p className='sm:w-[30px] sm:h-[30px] w-[15px] h-[30px] px-[15px] font-semibold rounded-full flex items-center justify-center bg-[#00FFCF] sm:text-[14px] text-[12px]'>{comment1.status}</p>
 <p className='font-semibold sm:text-[14px] text-[12px]'>{comment1.msg}</p>
 </div>
 </div>
 <div className={`w-full flex justify-between text-[white] bg-[#4D28D4] py-[5px] sm:px-[20px] px-[10px] ${!comment1.endover ? "hidden":"visible"}`}>
        <div className='w-full flex gap-2 sm:text-[14px] text-[12px]  '>
       <p>END OF OVER: {comment1.endover}</p>
       <p>{comment1.runandwkt}</p></div>
       <div>
        <p className='sm:text-[15px] text-[13px] pl-[30px]'>{comment1.overscore}</p>
       </div>

      </div>
 </Fragment>
 ))}
 
</div>

)
}

export const Commentaryteam2=()=>{
  const commentteam2=[{over:'0.0', status:'0', msg:'not yet start'}] 
  
  return(<div className='w-full min-h-100vh'>
    
    {
  commentteam2.map((comment2,id)=>(
    <Fragment key={id} >
    <div className='w-full flex flex-col gap-[5px] items-center text-[14px] border-[1px] '>
      
 <div className='w-full flex gap-[10px] items-center py-[5px] sm:px-[20px] px-[10px]'>
 <h2 className='font-bold text-[#858383] sm:text-[14px] text-[11px]'>{comment2.over} </h2>
 <p className='sm:w-[30px] sm:h-[30px] w-[15px] h-[30px] px-[15px] font-semibold rounded-full flex items-center justify-center bg-[#00FFCF] sm:text-[14px] text-[12px]'>{comment2.status}</p>
 <p className='font-semibold sm:text-[14px] text-[12px]'>{comment2.msg}</p>
 </div>
 </div>
 <div className={`w-full flex justify-between text-[white] bg-[#4D28D4] py-[5px] sm:px-[20px] px-[10px] ${!comment2.endover ? "hidden":"visible"}`}>
        <div className='w-full flex gap-2 sm:text-[14px] text-[12px]  '>
       <p>END OF OVER: {comment2.endover}</p>
       <p>{comment2.runandwkt}</p></div>
       <div>
        <p className='sm:text-[15px] text-[13px] pl-[30px]'>{comment2.overscore}</p>
       </div>

      </div>
 </Fragment>
   ))}
   
  </div>
  
  )
  }




export const Commentarysec = () => {
  return (
    <div className='w-full min-h-100vh flex flex-col gap-[20px]'>
     { 
            matchmain.map((maindata,id)=>(
  
 <Accordion key={id} allowZeroExpanded className='w-full min-h-100vh border-[1px] rounded-lg ' >
      
        <AccordionItem className="w-full" allowZeroExpanded>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[13px] flex justify-between bg-[#f5f4f4]'><p className='hover:text-[#4D28D4]'>{maindata.batteam}</p>  <TiArrowSortedDown className='sm:text-[20px] text-[18px]' /></h2>
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
              <h2 className='w-full sm:px-[20px] px-[10px] py-[5px] font-semibold sm:text-[16px] text-[13px] flex justify-between bg-[#f5f4f4]'><p className='hover:text-[#4D28D4]'>{maindata.bowling}</p> <TiArrowSortedDown className='sm:text-[20px] text-[18px]' /></h2>
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