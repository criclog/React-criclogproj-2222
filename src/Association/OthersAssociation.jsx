import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image11 from "../Assests/association/m1.jpg";
import image12 from "../Assests/association/m2.jpg";
import image13 from "../Assests/association/m3.jpg";
import image14 from "../Assests/association/m4.jpg";
import o1 from '../Assests/association/o1.png'
import o2 from '../Assests/association/o2.jpeg'
import o3 from  '../Assests/association/o3.jpeg'
import o4 from '../Assests/association/o4.jpeg'
import o5 from '../Assests/association/o5.png'
import o6 from '../Assests/association/o6.png'
import o7 from '../Assests/association/o7.jpeg'
import o8 from '../Assests/association/o8.jpg'
import o9 from '../Assests/association/o9.jpg'
import o10 from '../Assests/association/o10.jpg'
import o11 from '../Assests/association/o11.jpg'
import o12 from '../Assests/association/o12.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Select1 } from "./IccAssociation";



export const Header5 = () => {
  return (
    <div className="min-w-[100vh] h-[200px] bg-[#4A2EB0] font-serif flex">
    <p className="w-full flex justify-center items-center text-white font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] ">
      OTHERS
    </p>
  </div>
    
  );
};

export const Option5 = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const details = [
    {
      image: image14,
      name: "Eswatini Cricket Association ",
      history:
        "The online scoring application by Criclog has brought a lot of benefits to Eswatini Cricket. ",
      author: "Mandla S. Dlamini",
      position: "Office Administrator",
    },
    {
      image: image13,
      name: "Rwanda Cricket Association",
      history:
        "For the past one year Rwanda cricket has been using Criclog as our official scoring App for our domestic league, school's competitions, junior leagues and some international games that has been hosted in Rwanda. ",
      author: "Emmanuel BYIRINGIRO",
      position: "General Manager",
    },
    {
      image: image12,
      name: "Twenty20 Community Cricket ",
      history:
        "We moved over to Criclog in the summer of 2020 having tried several other scoring and data applications in the past.",
      author: "Darren Talbot",
      position: "Managing Director",
    },

    {
      image: image11,
      name: "Sierra Leone Cricket Association ",
      history:
        "The partnership with Criclog has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via Criclog. Once we have mastered all applications and administration of Criclog, we will apply for the Sierra Leone cricket association app.",
      author: "Mr. Francis Samura",
      position: "CEO",
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();


  const buttons = [
    { path: "/icc", label: "ICC CRICKET ASSOCIATION" },
    { path: "/state", label: "STATE CRICKET ASSOCIATION" },
    { path: "/district", label: "DISTRICT CRICKET ASSOCIATION" },
    { path: "/club", label: "CRICKET CLUBS" },
    { path: "/other", label: "OTHERS" },
  ];

  return (
    <div className="w-full  font-serif ">
      <div className="w-[100%]  bg-white text-right flex ">
        <div className="w-[40%] hidden lg:block ">
          <div className="w-[100%]  px-7 py-[30px] flex flex-col gap-3 ">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`px-3 py-5 rounded-lg text-right lg:text-[20px]  
            ${
              location.pathname === button.path
                ? "bg-gray-200 text-[#4A2EB0] "
                : "bg-white text-gray-500 "
            } 
            hover:text-[#4A2EB0]`}
                onClick={() => navigate(button.path)}
              >
                {button.label}
              </button>
            ))}
          </div>
          </div>

        <div className="w-[90%] ">
          <Cardteam5 />
        </div>
      </div>

      <div className="w-[400px] sm:w-[100%] md:w-[100%] text-left lg:w-[33%] xl:w-[33%] my-9">
        <Slider {...setting}>
          {details.map((det, id) => (
            <div className="w-[100%] grid grid-cols-1 md:mx-[20px]">
              <div className="w-[90%] min-h-[50vh] sm:w-[80%] md:w-[80%] lg:w-[80%]  bg-white rounded-[10px] py-5 mx-4 shadow shadow-gray-800">
                <div key={id}>
                  <img  
                    src={det.image}   
                    alt=""
                    className="w-[110px] h-[90px] mx-3"
                  />
                  <p className="text-[22px] py-1 px-3">{det.name}</p>
                  <p className="text-[16px] text-gray-700 py-2 px-3">
                    {det.history}
                  </p>
                  <p className="text-[20px]  px-3 ">{det.author}</p>
                  <p className="text-[16px]  text-gray-700 px-3">
                    {det.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-[100%] flex justify-center items-center my-8 ">
          <Link to={"/assoication/member-assoication"}>
            <p className="min-w-[30vh] h-[45px] bg-[#4A2EB0] flex justify-center items-center   text-white rounded-[10px]">
              READ ALL
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
};

export const Cardteam5 = () => {
  const Card1s = [
    {
      image: o1,
      company: "Atlanta Cricket League",
      place:" Americas"
      
    },
    {
      image: o2,
      company: "BBL SPORTS CLUB - BAHRAIN",
    
    },
    {
      image: o3,
      company: "Hamilton and District Cricket League",
      place:" Americas"

      
    },
    {
      image: o4,
      company: "Mississauga Cricket League",
       place:" Americas"

    },
    {
      image: o5,
      company: "Ottawa Valley Cricket Council",
      place:" Americas"
   
    },
    {
      image: o6,
      company: "Brossard Cricket Association (BCA)",
      place:" Americas"
     
    },
    {
      image: o7,
      company: "RMCA- Ridge Meadows Cricket Association",
       place:" Americas"
 
    },
    {
      image: o8,
      company: "Dubai Cricket Council",
      place:"  East-Asia Pacific"

  
    },
    {
        image: o9,
        company: "South East",
      },
      {
        image: o10,
        company: "Rural Cricket Committees",
        place:" North East"
      },
      {
        image: o11,
        company: "BELONIA CRICKET ASSOCIATION",
        place:"South"
      },
      {
        image: o12,
        company: "TELIAMURA CRICKET ASSOCIATION",
        place:"West"
      }
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "United States",
    "Canada",
    "India",
    "Australia",
    "South Africa"
  ];

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="min-w-[100vh] bg-white font-serif flex justify-center items-center">
        <div className="w-[100%]  ">
          <select
            value={selectedCountry}
            onChange={handleChange}
            className="w-[40%] h-[40px] bg-gray-300 shadow flex justify-center items-center rounded-[20px]  text-gray-700 outline-none cursor-pointer my-6 mx-[30%] px-[30px] sm:w-[30%] sm:mx-[35%] md:w-[35%] md:mx-[32%] lg:mx-[1%] lg:w-[30%]  "
          >
            <option value="" disabled selected hidden>
              Select Country
            </option>
            {countries.map((country, index) => (
              <>
                <option key={index} className="text-gray-600 py-1">
                  {country}
                </option>
              </>
            ))}
          </select>
             <div className="lg:hidden block">
                   <Select1/>
                 </div>

        <div className="grid grid-cols-1 gap-4 py-5 px-4 ">
          {selectedCountry ? (
            [...Array(1)].map((i) => (
              <div key={i}
                className="w-[200px] h-[150px] bg-gray-100 shadow rounded-lg flex items-center justify-center text-gray-500 "
              >Data Not Found</div>
            ))
          ) : (
            <div className="min-w-[100vh]">
              <div className=" grid grid-cols-1 gap-4 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 ">
                {Card1s.map((card, id) => (
                  <div
                    key={id}
                    className="w-[80%] h-[100px] bg-white flex rounded-md gap-2 border border-gray-400 shadow shadow-gray-400 cursor-pointer sm:w-[85%] md:w-[90%] lg:w-[100%] xl:w-[100%] md:mx-[15%] sm:mx-[15%] lg:mx-auto"
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="w-[80px] h-[80px] rounded-[10px] mx-2 my-2"
                    />
                    <div className="flex flex-col justify-start mx-2 my-5">
                      <p className="text-[18px]">{card.company}</p>
                      <p className="text-[14px] text-gray-400 text-left">
                        {card.place}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OthersAssoication = () => {
  return (
    <>
      <div>
        <Header5 />
      </div>
      <div>
        <Option5 />
      </div>
      
    </>
  );
};

export default OthersAssoication;
