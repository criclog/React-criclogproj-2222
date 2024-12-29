import React from "react";
import logo1 from "../Assests/Sponsor/super-sponsor-benefit-1.png";
import logo2 from "../Assests/Sponsor/super-sponsor-benefit-2.png";
import logo3 from "../Assests/Sponsor/super-sponsor-benefit-3.png";
import logo4 from "../Assests/Sponsor/super-sponsor-benefit-4.png";

import { Link } from "react-router-dom";

const SuperSponsor = () => {
  return (
    <div className="w-full min-h-100vh">
      <div className="min-w-[100vh] min-h-100vh bg-[#4A2EB0] font-serif  flex flex-col py-[40px] gap-[10px] sm:px-[25px] px-[20px]">
        <p className=" w-[100%] font-extrabold text-white text-center md:text-[26px] text-[16px] sm:text-[18px]  lg:text-[32px] lg:pl-[20px]">
          Super Sponsor From CricLog
        </p>
        <p className="w-full font-light text-white text-center text-[13px] sm:text-[15px] lg:text-[18px]">
          Give maximum visibility to your sponsors on your tournament page and
          match scorecards.
        </p>
        <Link
          to={"/super-sponsor/get-app"}
          className="w-[100%] min-h-[10vh] flex justify-center items-center "
        >
          <button className="w-[15%] h-[40px] bg-[#4A2EB0] text-[12px] border-2 border-white text-white transition-transform duration-100 hover:scale-110   sm:w-[100px] sm:text-[16px]">
            GET APP
          </button>
        </Link>
      </div>

      <div className="min-w-[100vh]  my-5">
        <h1 className=" text-[#4a2eb0] flex justify-center items-center px-[80px] font-bold text-4xl">
          Benefits for Your Sponsors
        </h1>
      </div>

        <div className="min-w-[100vh] bg-white flex flex-col my-9 px-6 text-gray-700">
        <div className=" w-[100%]  sm:flex sm:flew-row sm:items-center ">
        <img
            src={logo1}
            alt="Benefit 1"
            className=" w-[35%] h-[270px] sm:w-[25%] sm:h-[430px]  mx-[100px] my-5"
          />
          <h2 className="w-[80%] sm:w-[70%] text-[30px] sm:text-[50px] mx-[60px]">
            01.
            <p className=" sm:w-[90%] text-[16px] sm:text-[20px]">
              Maximum visibility of your sponsors to the audience viewing the
              live scores.
            </p>
          </h2>
        </div>
      </div> 

      <div className="min-w-[100vh] bg-white flex flex-col my-9 px-6 text-gray-700">
        <div className=" w-[100%]  sm:flex sm:flew-row sm:items-center ">
       
          <h2 className="w-[80%] sm:w-[70%] text-[30px] sm:text-[50px] mx-[60px]">
            02.
            <p className=" sm:w-[90%] text-[16px] sm:text-[20px]">
            Strategic placements for your sponsors on tournament page & match
            scorecards.
            </p>
          </h2>
          <img
            src={logo2}
            alt="Benefit 1"
            className=" w-[35%] h-[270px] sm:w-[25%] sm:h-[430px]  mx-[100px] my-5"
          />
        </div>
      </div> 



      <div className="min-w-[100vh] bg-white flex flex-col my-9 px-6 text-gray-700">
        <div className=" w-[100%]  sm:flex sm:flew-row sm:items-center ">
        <img
            src={logo3}
            alt="Benefit 1"
            className=" w-[35%] h-[270px] sm:w-[25%] sm:h-[430px]  mx-[100px] my-5"
          />
          <h2 className="w-[80%] sm:w-[70%] text-[30px] sm:text-[50px] mx-[60px]">
            03.
            <p className=" sm:w-[90%] text-[16px] sm:text-[20px]">
            Redirect viewers to your sponsors' websites or the offer pages.

            </p>
          </h2>
          
        </div>
      </div> 
      
      <div className="min-w-[100vh] bg-white flex flex-col my-9 px-6 text-gray-700">
        <div className=" w-[100%]  sm:flex sm:flew-row sm:items-center ">
       
          <h2 className="w-[80%] sm:w-[70%] text-[30px] sm:text-[50px] mx-[60px]">
            04.
            <p className=" sm:w-[90%] text-[16px] sm:text-[20px]">
            Perpetual visibility on past matches scorecards and completed
            tournaments pages.
            </p>
          </h2>
          <img
            src={logo4}
            alt="Benefit 1"
            className=" w-[35%] h-[270px] sm:w-[25%] sm:h-[430px]  mx-[100px] my-5"
          />
        </div>
      </div> 

      <div className="min-w-[100vh] h-[70px] bg-gray-200 flex items-center my-[50px]  ">
        <p className="w-[100%] flex justify-center items-center text-center text-[20px] sm:text-[24px] gap-2 px-[20px]">
          Earn more from your Sponsors offering them these advantages. 
          <button className="w-[29%] h-[40px] bg-[#4A2EB0] text-white text-[12px] sm:w-[10%] sm:text-[14px] rounded-[10px]">
            CONTACT US
          </button>
        </p>
      </div>  
 
   <div className="min-w-[100vh] min-h-100vh bg-gray-800 font-serif  flex flex-col py-[30px] gap-[10px] sm:px-[20px] px-[10px]">
        <p className="w-[100%] text-white text-center sm:text-[24px] text-[18px]    ">
          Make your sponsors "Super Sponsors" with CricLog.
        </p>
        <p className="w-full font-light text-white text-center text-[18px] sm:text-[24px] ">
          Contact us on +91 8141665534 today!
        </p>
      </div> 
    </div>
  );
};

export default SuperSponsor;
