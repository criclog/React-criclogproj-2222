import React, { useEffect, useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import nodata from '../Assests/nodata.avif'
import axios from "axios";  
import { toast } from "react-toastify";

export const Matchlocation = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleApplyFilters = (selectedCities) => {
    setFilters(selectedCities);
    setShowFilter(false);
  };


  return (
    <div className="w-full min-h-100vh py-[40px] bg-[#ebebec] flex flex-col gap-[30px] justify-center items-center">
  {/* Title and Filter Toggle */}
  <p className="lg:text-[22px] text-[18px] font-semibold text-[#4d4d4d]">
    Live Cricket Matches In{" "}
    <span
      className="lg:text-[20px] text-[16px] italic text-[#4D28D4] cursor-pointer"
      onClick={handleFilterToggle}
    >
      (Location)
    </span>
  </p>

  {/* Match Filter Component */}
  <h1 className='w-full min-h-100vh absolute top-0'>{showFilter && (
    <MatchFilter
      handleFilterToggle={handleFilterToggle}
      onApplyFilters={handleApplyFilters}
    />
  )}</h1>

  {/* Match Cards */}
  <Link to={"/score-match"}>
    <div className="w-full flex gap-[30px] justify-center items-center">
      <div className="w-[85%] sm:w-[90%] xl:w-[90%] lg:w-[80%] md:w-[90%] min-h-100vh grid md:grid-cols-2 grid-cols-1 grid-flow-rows justify-center items-center gap-[40px] xl:gap-[60px] lg:gap-[25px] md:gap-[20px] py-[30px] cursor-pointer">
        <Livematchcard filters={filters} />
      </div>
    </div>
  </Link>
</div>
  )
}



export const Livematchcard = ({filters}) => {
const[matchcarddata,setmatchcarddata]=useState([])
  


  const Fetchmatchdata=async()=>{
    await axios.get("http://localhost:7000/getAllMatches",)
    .then((res)=>setmatchcarddata(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchmatchdata();
},[])



const filteredMatches = filters.length
    ? matchcarddata.filter((match) =>
        filters.some((city) =>
          match.location.toLowerCase().includes(city.toLowerCase())
        )
      )
    : matchcarddata;
    return (<>{filteredMatches.length === 0 ? (
      <div className="w-full p-4 bg-white border rounded-md shadow-md flex justify-center items-center">
        <p className=" text-gray-500 flex flex-col justify-center items-center gap-4 "> <img src={nodata} className='w-[150px] rounded-full '/>No matching data found. Please try a different filter.</p>
      </div>
    ):(
    <>
      { 
        filteredMatches.map((livecard,id)=>(
        
      
        <Link to={`/score-match/${livecard.MatchID}`}><div key={id} className='w-full min-h-100vh  border-[1px] bg-[white]  border-[#bdbcbc] divide-y-[1px]  divide-[#c9c4c4] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            {/* Matchname */}
             <p className=' w-full text-[12px] xl:text-[15px] md:text-[14px] flex justify-center font-medium py-2 text-[#272727] px-5'>{livecard.matchname}</p>
             <div className='w-full min-h-100vh flex flex-col justify-center items-center gap-[10px] px-[15px]  py-[10px]'>
                <div className='w-full min-h-100vh flex justify-between gap-[10px]'>
                  {/* location */}
             <p className='xl:text-[14px] md:text-[12px] text-[11px] font-medium text-[#494848]'>{livecard.location},</p>
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
             <h2 className='text-[15px] xl:text-[16px] md:text-[15px] flex gap-[4px] items-center text-[#4D28D4] font-semibold'>{livecard.score} <p className='text-[14px] font-semibold text-[black] '>({livecard.over})</p></h2>
             </div>
             <div className='w-full flex justify-between'>
              {/* bowling team name */}
             <p className=' text-[15px] xl:text-[16px] md:text-[15px] text-[#1b1b1b] font-semibold'>{livecard.bowlingteam}</p>
            <h2 className='xl:text-[14px] md:text-[13px] text-[13px] text-[#222121] flex gap-[4px] font-semibold'>{livecard.bowlingstatus}</h2>
             </div>
             </div>
             {/* toss winning team */}
             <p className=' w-full text-[12px] xl:text-[14px] md:text-[12px] px-[15px] py-2 '><span className='font-medium text-[#000000]'>{livecard.tosswin}</span> {livecard.tossstatus}</p>
            </div>
                
      
                </Link> 
    ))}
    </>)}</>
    )
  }



export const MatchFilter=({ handleFilterToggle, onApplyFilters })=>{  
  const filterdata=["Ahmedabad", "Alwar", "Ankleshvar", "Bharuch", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhidham", "Nadiad", "Gandhinagar", "Anand", "Morbi",
    "Surendranagar","Surat", "Vadodara", "Rajkot", "Vapi", "Navsari", "chennai", "mumbai", "delhi", "Veraval", "Porbandar", "Godhra", "Bhuj", "Botad", "Palanpur", "Dahod", "Valsad", "Gondal", "Amreli",
    "Mehsana", "Modasa", "Abu Road", "Asind", "Bahror", "Barmer", "Bhadasar", "Bhadra", "Bhalariya"
  ]

  const [search, setSearch] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCheckboxChange = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((item) => item !== city)
        : [...prev, city]
    );
  };

  const resetCheckboxes = () => {
    setSelectedCities([]);
  };

  const filterCities = filterdata.filter((filterValue) =>
    filterValue.toLowerCase().includes(search.toLowerCase())
  );




    return( <div className='w-full h-screen fixed bg-[#595a5c] opacity-95 flex justify-center items-center'>
      <div className='lg:w-[45%] md:w-[50%] sm:w-[50%] w-[70%] xl:w-[40%] h-[450px] bg-[#ffffff] opacity-100 rounded-lg'>
        <div className='w-full min-h-100vh text-[20px] text-[#5a5a5a] font-semibold  flex justify-between items-center py-[8px] px-[15px] border-b-[1px] border-[#c2c1c1]'>
          Filter
          <RxCross2 className='text-[20px] font-semibold cursor-pointer' onClick={handleFilterToggle}/>
        </div >
        <div className='w-full min-h-100vh text-[16px] text-[#3d3c3c]  bg-white py-[8px] px-[15px] border-b-[1px] border-[#d1d0d0]'>
           <input type="text" placeholder='search cities' value={search} 
           onChange={e=>setSearch(e.target.value)} 
           className='w-full border-[1px] border-[#a7a5a5] rounded-md px-3 py-[2px] outline-none'/>
        </div>
        <div className="w-full h-[322px] text-[14px] overflow-y-scroll px-[15px] py-[8px]">
        {filterCities.map((filtervalue, id) => (
       <div key={id} className="flex items-center py-2">
      <input type="checkbox" name="cities" id={`city-${id}`} className=" filterreset mr-2 cursor-pointer accent-[#4D28D4] outline-none" 
      checked={selectedCities.includes(filtervalue)}
      onChange={() => handleCheckboxChange(filtervalue)}/>
      <label htmlFor={`city-${id}`}>{filtervalue}</label>
    </div>
  ))}</div>
        <div className='w-full min-h-100vh '>
          <button className='w-[50%] bg-[#e2e4e4] text-[18px] py-1 font-semibold text-[#333232] cursor-pointer' onClick={resetCheckboxes}>Reset</button>
          <button className='w-[50%] bg-[#00FFCF] text-[18px] py-1 font-semibold text-[#333232] cursor-pointer' onClick={() => onApplyFilters(selectedCities)}>Apply</button>
        </div>

    </div>
     </div>
     )
  }

// 