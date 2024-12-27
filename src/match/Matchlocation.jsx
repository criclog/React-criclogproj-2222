import React, { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


export const Matchlocation = () => {

  const[Filteropt,setFilteropt]=useState(true)
  

  const handlenav=()=>{
    setFilteropt(false)
    
    
  }
 
  const handleFilterToggle = () => {
    setFilteropt(!Filteropt);
    
  };


  return (
    <div className='w-full min-h-100vh py-[40px] bg-[#ebebec] flex flex-col gap-[30px] justify-center items-center'>
        <p className='lg:text-[22px] text-[18px] font-semibold text-[#4d4d4d]'>Live Cricket Matches In <span className='lg:text-[20px] text-[16px] italic text-[#4D28D4] cursor-pointer'onClick={handlenav}>(Location)</span></p>
       <Link to={'/score-match'}> <div className='w-full flex flex-col gap-[30px] justify-center items-center'>
        <div className='w-[85%] sm:w-[90%] xl:w-[75%] lg:w-[80%] md:w-[90%] min-h-100vh md:grid-cols-2 grid-flow-rows   grid grid-cols-1 grid-flow-rows justify-center items-center gap-[40px] xl:gap-[60px] lg:gap-[25px] md:gap-[20px] py-[30px] cursor-pointer '>
          <Livematchcard/></div> </div></Link>
        <div className={`w-full h-full absolute top-0  ${Filteropt ? 'hidden' : 'block'}`}><MatchFilter
         handleFilterToggle={handleFilterToggle}/></div>
    </div>
  )
}



export const Livematchcard = () => {
const matchlive=[{matchname:"8th Carpediem B.R Sharma Champions Trophy 2024-25", locaion:"Jawaharlal Lal Nehru Cricket Stadium, Ghaziabad, 18-Dec-24, 40 Over,", matchtype:"Final", batteam:"Smashers", score:"4/2", over:"(1.0)", bowling:"Rangers", bowlingstatus:"yet to bat", tosswin:"Rangers", tossstatus:"won the toss and elected to field" },
{matchname:"HDFC LIFE IDPL 2024", locaion:"Turf 2, mumbai, 18-Dec-24, 7 Over,", matchtype:"PRE QUATER FINAL", batteam:"Spartans", score:"80/5", over:"(6.3)", bowling:"Dynamos", bowlingstatus:"yet to bat", tosswin:"Spartans", tossstatus:"won the toss and elected to bat" },
{matchname:"8th Carpediem B.R Sharma Champions Trophy 2024-25", locaion:"Jawaharlal Lal Nehru Cricket Stadium, Ghaziabad, 18-Dec-24, 40 Over,", matchtype:"Final", batteam:"Smashers", score:"4/2", over:"(1.0)", bowling:"Rangers", bowlingstatus:"yet to bat", tosswin:"Rangers", tossstatus:"won the toss and elected to field" },
{matchname:"HDFC LIFE IDPL 2024", locaion:"Turf 2, mumbai, 18-Dec-24, 7 Over,", matchtype:"PRE QUATER FINAL", batteam:"Spartans", score:"80/5", over:"(6.3)", bowling:"Dynamos", bowlingstatus:"yet to bat", tosswin:"Spartans", tossstatus:"won the toss and elected to bat" },
{matchname:"8th Carpediem B.R Sharma Champions Trophy 2024-25", locaion:"Jawaharlal Lal Nehru Cricket Stadium, Ghaziabad, 18-Dec-24, 40 Over,", matchtype:"Final", batteam:"Smashers", score:"4/2", over:"(1.0)", bowling:"Rangers", bowlingstatus:"yet to bat", tosswin:"Rangers", tossstatus:"won the toss and elected to field" },
{matchname:"HDFC LIFE IDPL 2024", locaion:"Turf 2, mumbai, 18-Dec-24, 7 Over,", matchtype:"PRE QUATER FINAL", batteam:"Spartans", score:"80/5", over:"(6.3)", bowling:"Dynamos", bowlingstatus:"yet to bat", tosswin:"Spartans", tossstatus:"won the toss and elected to bat" },]

    return (<>
      { 
        matchlive.map((livecard,id)=>(
        
      
         <div key={id} className='w-full min-h-100vh  border-[1px] bg-[white]  border-[#bdbcbc] divide-y-[1px]  divide-[#c9c4c4] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            {/* Matchname */}
             <p className=' w-full text-[11px] xl:text-[13px] md:text-[12px] flex justify-center font-medium py-2 text-[#272727] px-5'>{livecard.matchname}</p>
             <div className='w-full min-h-100vh flex flex-col justify-center items-center gap-[10px] px-[15px]  py-[10px]'>
                <div className='w-full min-h-100vh flex justify-between gap-[10px]'>
                  {/* location */}
             <p className='xl:text-[14px] md:text-[12px] text-[11px] font-medium text-[#494848]'>{livecard.locaion},</p>
             {/* live btn */}
             <button className='h-[22px] lg:h-[23px] text-[13px] xl:text-[14px] md:text-[13px] flex justify-center font-semibold bg-[#4D28D4] text-[white]  pr-[7px] rounded-[8px] '><IoMdArrowDropright  className='md:text-[20px] text-[19px] lg:text-[22px] text-[white] animate-pulse ease-in-out duration-100'/> LIVE</button>
             </div>

             <div className='w-full grid grid-cols-2 grid-flow-rows '>
              {/* match type */}
             <p className='text-[13px] xl:text-[15px] md:text-[14px] text-[#1f1e1e] font-semibold '>{livecard.matchtype}</p>
             
             </div>
             {/* batting team name */}
             <div className='w-full flex justify-between items-center'>
             <p className=' text-[15px] xl:text-[16px] md:text-[15px] text-[#4D28D4] font-semibold'>{livecard.batteam}</p>
             <h2 className='text-[15px] xl:text-[16px] md:text-[15px] flex gap-[4px] items-center text-[#4D28D4] font-semibold'>{livecard.score} <p className='text-[14px] font-semibold text-[black] '>{livecard.over}</p></h2>
             </div>
             <div className='w-full flex justify-between'>
              {/* bowling team name */}
             <p className=' text-[15px] xl:text-[16px] md:text-[15px] text-[#1b1b1b] font-semibold'>{livecard.bowling}</p>
            <h2 className='xl:text-[14px] md:text-[13px] text-[13px] text-[#222121] flex gap-[4px] font-semibold'>{livecard.bowlingstatus}</h2>
             </div>
             </div>
             {/* toss winning team */}
             <p className=' w-full text-[13px] xl:text-[15px] md:text-[13px] px-[15px] py-2 '><span className='font-medium text-[#000000]'>{livecard.tosswin}</span> {livecard.tossstatus}</p>
            </div>
                
      
      
    ))}
    </>
    )
  }



export const MatchFilter=({  handleFilterToggle })=>{  

  const filterdata=["Ahmedabad", "Alwar", "Ankleshvar", "Bharuch", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhidham", "Nadiad", "Gandhinagar", "Anand", "Morbi",
    "Surendranagar","Surat", "Vadodara", "Rajkot", "Vapi", "Navsari", "chennai", "mumbai", "delhi", "Veraval", "Porbandar", "Godhra", "Bhuj", "Botad", "Palanpur", "Dahod", "Valsad", "Gondal", "Amreli",
    "Mehsana", "Modasa", "Abu Road", "Asind", "Bahror", "Barmer", "Bhadasar", "Bhadra", "Bhalariya"
  ]

  const [Search, setsearch]=useState("")

  const resetCheckboxes = () => {
    const inputs = document.querySelectorAll('.filterreset');

    inputs.forEach(input => (input.checked = false));
  }


  const filtercities=filterdata.filter(filtervalue=>
    filtervalue.toLowerCase().includes(Search.toLowerCase())
  )



    return( <div className='w-full h-screen fixed bg-[#595a5c] opacity-95 flex justify-center items-center'>
      <div className='lg:w-[45%] md:w-[50%] sm:w-[50%] w-[70%] xl:w-[40%] h-[450px] bg-[#ffffff] opacity-100 rounded-lg'>
        <div className='w-full min-h-100vh text-[20px] text-[#5a5a5a] font-semibold  flex justify-between items-center py-[8px] px-[15px] border-b-[1px] border-[#c2c1c1]'>
          Filter
          <RxCross2 className='text-[20px] font-semibold cursor-pointer' onClick={handleFilterToggle}/>
        </div >
        <div className='w-full min-h-100vh text-[16px] text-[#3d3c3c]  bg-white py-[8px] px-[15px] border-b-[1px] border-[#d1d0d0]'>
           <input type="text" placeholder='search cities' value={Search} 
           onChange={e=>setsearch(e.target.value)} 
           className='w-full border-[1px] border-[#a7a5a5] rounded-md px-3 py-[2px] outline-none'/>
        </div>
        <div className="w-full h-[322px] text-[14px] overflow-y-scroll px-[15px] py-[8px]">
        {filtercities.map((filtervalue, id) => (
       <div key={id} className="flex items-center py-2">
      <input type="checkbox" name="cities" id={`city-${id}`} className=" filterreset mr-2 cursor-pointer accent-[#4D28D4] outline-none" />
      <label htmlFor={`city-${id}`}>{filtervalue}</label>
    </div>
  ))}</div>
        <div className='w-full min-h-100vh '>
          <button className='w-[50%] bg-[#e2e4e4] text-[18px] py-1 font-semibold text-[#333232] cursor-pointer' onClick={resetCheckboxes}>Reset</button>
          <button className='w-[50%] bg-[#00FFCF] text-[18px] py-1 font-semibold text-[#333232] cursor-pointer'>Apply</button>
        </div>

    </div>
     </div>
     )
  }