import React from "react";
import logo5 from '../Assests/Sponsor/apps-page-feature.gif';
import logo from '../Assests/logo.png';
import { Link } from "react-router-dom";


const CricketAppPromo = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
    
      <div className="flex flex-col items-center justify-center text-center bg-gray-100 w-full md:w-1/2 p-6">
      <div className='w-full flex items-center justify-center gap-3 py-[30px]'>
       <Link to={"/"}><img src={logo} alt="couldn't load image" className='sm:w-[90px] sm:h-[90px] w-[40px] h-[40px]'/></Link> 
       <Link to={"/"}><h3 className='font-semibold sm:text-[30px] text-[20px] text-[#4D28D4] '>CRICLOG</h3></Link> 
       </div> 
        <h1 className="text-[22px] sm:text-5xl font-bold text-gray-800 mb-4">
          Keep track of everything cricket!
        </h1>
        <p className="text-[16px] sm:text-3xl text-gray-600 mb-6">
          Download our free and easy-to-use cricket scoring app.
        </p>
        
        <div className="flex gap-4">
          <a
            href="https://play.google.com/store/games?hl=en/"
            className="inline-block bg-black text-white py-2 px-4  sm:py-7 sm:px-5  rounded-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-40 sm:w-[250px] sm:h-[70px] sm:px-2"
            />
          </a>
          <a
            href="https://www.apple.com/in/app-store/"
            className="inline-block bg-black text-white py-2 px-4 sm:py-7 sm:px-4 rounded-lg"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-40 sm:w-[280px] sm:h-[70px]"
            />
          </a>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="text-gray-600">
             <p className="text-[16px] sm:text-[20px] px-3"><span className="text-2xl sm:text-4xl font-bold">4.8</span>Ratings</p>
          </div>
          <div className="text-gray-600">
          <p className="text-[16px] sm:text-[20px] px-3"><span className="text-2xl sm:text-4xl font-bold">4.7</span>Ratings</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  w-full md:w-1/2 p-6">
        <div className="relative w-full max-w-md ">
          <img
            src={logo5} 
            alt="App Screenshots"
            className="w-100 h-100 rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  )
}

export default CricketAppPromo;
