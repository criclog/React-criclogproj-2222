import React, { useEffect, useState } from "react";
import axios from "axios";  
import { toast } from "react-toastify";
import nodata from '../Assests/nodata.avif'


const categories = [
  "TEAMS FOR TOURNAMENT",
  "TOURNAMENT",
  "MATCH",
  "PLAYER",
  "TEAM",
  "GROUND",
  "UMPIRE",
  "SCORER",
  "COMMENTATOR",
];

const LocationFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const[looking,setlooking]=useState([])
  


  const Fetchprogramdata=async()=>{
    await axios.get("http://localhost:7000/getlooking",)
    .then((res)=>setlooking(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchprogramdata();
},[])

  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredData =
    selectedFilters.length === 0
      ? looking : looking.filter((item) => selectedFilters.includes(item.category)
    );

    
      
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">

       <div className='md:w-[25%] bg-white px-[50px] py-[20px] block z-10 font-serif'>
       <h2 className="py-7 text-[22px] font-semibold">Location</h2>
        <div className="text-gray-800  space-y-6">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 form-checkbox"
                onChange={() => toggleFilter(category)}
                checked={selectedFilters.includes(category)}
              />
              <span className="text-[14px]">{category}</span>
            </label>
          ))}
       </div>
  </div>
      <div className="w-full min-h-100vh p-4 md:w-3/4 ">
        <h2 className="mb-4 text-xl font-serif ">
          Find Services & Products for Your Cricket Tournament{" "}
          <span className="text-gray-500">(All Locations)</span>
        </h2>
        {filteredData.length === 0 ? (
          <div className="p-4 bg-white border rounded-md shadow-md">
                   <p className=" text-gray-500 flex flex-col justify-center items-center gap-4 "> <img src={nodata} className='w-[150px] rounded-full '/>No matching data found. Please try a different filter.</p>
          </div>
        ) :(
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white border-l-4 border-blue-500 rounded-md shadow-md hover:shadow-[#8579be]">
              <p className="text-[14px] text-gray-700 py-4 px-3 flex gap-4"><img src={`http://localhost:7000/view/${item.filename}`} className="w-[70px] h-[70px] rounded-full "/>{item.Description}</p>
              <p className=" text-xs text-gray-500 px-5">{item.createdAt}</p>
            </div>          ))}
        </div>)}
      </div>
    </div>
  );
};

export default LocationFilter;
