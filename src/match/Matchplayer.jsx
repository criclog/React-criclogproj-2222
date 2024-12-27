import React, { Fragment } from 'react'
import matchplayer from "../Assests/match/best batman.svg"
import playerimg from "../Assests/match/user_profile.png"
import { IoCameraOutline } from "react-icons/io5";


const player=[{playermatch:'Parmesh Agrawal', matchplayerteam:'Smashers',  batmatch:"35 R15 B3 (4S)0 (6S)233.33 (SR)", matchbowl:'1.0 Ov.0 M16 R0 W16.00 ECO.',}]


export const Gamehero = () => {
  return (
    <> { !player ?
   ( <div className='w-full min-h-100vh border-[1px] py-[15px] flex flex-col justify-center items-center gap-[10px] px-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
      
        <img src={matchplayer} />
       <p className='text-[15px] font-semibold'>GameHeroes of the Match will automatically be generated after the match.</p>
        
    </div>):
   ( <div className='w-full min-h-100vh border-[1px] py-[15px] flex flex-col justify-center items-center gap-[10px] px-[10px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
        {
            player.map((player, id)=>(
                <Fragment key={id}>
     <div className='sm:w-[90%] w-[98%] min-h-100vh bg-[#4D28D4] text-[white] flex justify-between sm:px-[15px] px-[10px] py-[15px] gap-[20px] rounded-xl'>
       <ul className='w-full flex flex-col gap-[10px] font-semibold'>
        <li className='sm:text-[18px] text-[14px]'>PLAYER OF MATCH</li>
        <hr />
        <li className='sm:text-[16px] text-[13px]'>{player.playermatch}</li>
        <li className='sm:text-[14px] text-[12px]'>Team: {player.matchplayerteam}</li>
        <li className='sm:text-[14px] text-[12px]'>Batting: {player.batmatch}</li>
        <li className='sm:text-[14px] text-[12px]'>Bowling: {player.matchbowl}</li>
       </ul>
       <img src={playerimg} className='sm:w-[120px] sm:h-[180px] w-[70px] h-[120px] rounded-xl'/>
     </div>
          </Fragment>
     ))}
    </div>)}
    </>
  )
}



export const Teamdet = () => {
  const Team1players=["Binnu", "Alkesh", "Aniket Kumar", "Bittu", "Chhotan", "Garuav", "Hemant", "Laxman", "Manni", "Rahul Kumar","Sunny",]
  const Team2players=["Raj", "Adithya", "Arif Eqbal", "Arun yadav", "Ashan", "Bola Abd", "Kumar singh", "Manish yadav", "Sanam", "Vikash","Niraj Roy ",]
  return (
    <div className='w-full min-h-100vh flex flex-col gap-3'>
<div className='w-full min-h-100vh border-[2px]  py-[10px] flex flex-col gap-2 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
  <h1 className='px-[20px] font-semibold text-[16px]'>Smashers</h1>
  <hr />
<div className='w-full grid sm:grid-cols-4 grid-cols-2 grid-flow-row gap-5 sm:px-[15px] px-[10px] py-[10px]'>
{ Team1players.map((players,id)=>(
 <h2 key={id} className='w-full flex flex-col justify-center items-center gap-2 border-[2px] rounded-xl bg-[#ebe9e9] py-[3px]'>
  <img src={playerimg} className='w-[150px] h-[150px] rounded-md' />
  <p className='font-semibold text-[14px]'>{players}</p>
 </h2>
))
}
</div>
</div>
<div className='w-full min-h-100vh border-[2px]  py-[10px] flex flex-col gap-2 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px]'>
  <h1 className='px-[20px] font-semibold text-[16px]'>Rangers</h1>
  <hr />
<div className='w-full grid sm:grid-cols-4 grid-cols-2 grid-flow-row gap-5 sm:px-[15px] px-[10px] py-[10px]'>
{ Team2players.map((players,id)=>(
 <h2 key={id} className='w-full flex flex-col justify-center items-center gap-2 border-[2px] rounded-xl bg-[#ebe9e9] py-[3px]'>
  <img src={playerimg} className='w-[150px] h-[150px] rounded-md' />
  <p className='font-semibold text-[14px]'>{players}</p>
 </h2>
))
}
</div>
</div>

    </div>  )
}

export const Gallery=()=>{
  return(<div className='w-full min-h-100hv border-[1px] flex flex-col justify-center items-center py-[40px] gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_6px] rounded-xl '>
    <IoCameraOutline className='sm:text-[100px] text-[70px] text-[#b4b3b3]'/>
    <p className='text-[#8b8a8a] font-semibold sm:text-[16px] text-[13px] '>Oops...It's empty in here.</p>
    <p className=' font-semibold text-[#8b8a8a] sm:text-[14px] text-[12px] '>Scorer has not uploaded any photos yet.</p>
  </div>)
}
