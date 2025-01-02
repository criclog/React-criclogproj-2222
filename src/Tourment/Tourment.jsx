import React, { useEffect, useState } from "react";
import axios from "axios";  
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const FilterComponent = () => {
  const[Tournament,setTournament]=useState([])

  const Fetchtournamentdata=async()=>{
    await axios.get("http://localhost:7000/getallTournament",)
    .then((res)=>setTournament(res.data))
    .catch((err)=> toast.error(err.res.data.message))
    .finally()
}

useEffect(()=>{
  Fetchtournamentdata();
},[])




  const [filters, setFilters] = useState({
    status: "All",
    ballType: "All",
    category: "All",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filteredData = Tournament.filter((item) => {
    return (
      (filters.status === "All" || item.status === filters.status) &&
      (filters.ballType === "All" || item.ballType === filters.ballType) &&
      (filters.category === "All" || item.category === filters.category)
    );
  });

  return (
    <div className="flex flex-col bg-[#F3F4F4] gap-6 p-4 md:flex-row md:p-8">
      
      <div className="w-full md:w-[30%]  p-4 ml-[1%]">
        <h4 className="sm:text-[20px] text-[15px] font-semibold mb-4">Filter Options</h4>

       
        <div className="mb-4">
          <h5 className="sm:text-[18px] text-[14px] font-medium mb-2">Status</h5>
          <div className="space-y-2">
            {["All", "Ongoing", "Upcoming"].map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={filters.status === status}
                  onChange={() => handleFilterChange("status", status)}
                  className="w-4 h-4"
                />
                <span className="sm:text-[16px] text-[13px]">{status}</span>
              </label>
            ))}
          </div>
        </div>

      
        <div className="mb-4">
          <h5 className="sm:text-[18px] text-[14px] font-medium mb-2">Ball Type</h5>
          <div className="space-y-2">
            {["Tennis", "Leather"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="ballType"
                  value={type}
                  checked={filters.ballType === type}
                  onChange={() => handleFilterChange("ballType", type)}
                  className="w-4 h-4"
                />
                <span className="sm:text-[16px] text-[13px]">{type}</span>
              </label>
            ))}
          </div>
        </div>

       
        <div className="mb-4">
          <h5 className="sm:text-[18px] text-[14px] font-medium mb-2">Category</h5>
          <div className="space-y-2">
            {["Corporate", "Open"].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category} 
                  checked={filters.category === category}
                  onChange={() => handleFilterChange("category", category)}
                  className="w-4 h-4"
                />
                <span className="sm:text-[16px] text-[13px]">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-full md:w-[100%] ">
        <h4 className="sm:text-[20px] text-[14px] mb-4 text-[#7e7d7d]"> <span className=" font-bold">Leather Cricket Tournaments </span></h4>
        <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
  {filteredData.map((item) => (
    <li
      key={item.id}
      
    ><Link to={`/tournamentdashboard/${item._id}`}>
      <div className=" bg-white p-2 rounded-lg shadow hover:shadow-lg flex flex-row items-start gap-3">
          <img
            src={`http://localhost:7000/view/${item.filename}`}
            alt={`${item.name} logo`}
            className="w-[70px] h-[70px] object-cover rounded-xl border  transition-all duration-300 hover:scale-105 my-2"
          />
      
    <div className="flex flex-col justify-center gap-2 py-1">
    <h5 className="w-[30%] h-[25px] flex justify-center items-center  text-[white] rounded-full text-[15px] bg-[#4a2be0] ">{item.status}</h5> 
    <h5 className="text-[14px] font-semibold ">{item.name}</h5> 
      <p className="text-[14px] text-gray-500 ">{item.Date}</p> 
      <p className="text-[14px] text-gray-500 "> {item.location}</p>
    </div>
    </div>
     </Link>
    </li>
  ))}
</ul>


      </div>
      
    </div>
    
  );
};

export default FilterComponent;
