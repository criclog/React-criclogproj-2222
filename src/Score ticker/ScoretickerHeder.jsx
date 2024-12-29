import React from 'react';

import img1 from "../Assests/Scoreticketer/workswithall.png"
import PricingPage from './Pricngpage';
import  img2 from '../Assests/Scoreticketer/fullscorecard1.gif'
import  img3 from '../Assests/Scoreticketer/fullscorecard2.gif'
import  img4 from '../Assests/Scoreticketer/fullscorecard3.gif'
import  img5 from '../Assests/Scoreticketer/fullscorecard4.gif'


const ScoreTickerheder = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-[#4A2EB0] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Score Ticker</h1>
        <p className="mt-4 text-lg">
          Beautiful score overlays for your live cricket matches.
        </p>
        <button className="mt-8 px-6 py-2  bg-[#4A2EB0] text-white font-semibold rounded-full shadow-md hover:bg-[#00FFCF] hover:text-[black]">
          VIEW PRICING
        </button>
      </div>

      {/* What's Included Section */}
    

      <div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-[#4A2EB0] mb-6 text-center">
      What's included?
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Content Section */}
        <div className="text-center md:text-left md:mr-8">
          <h2 className="text-xl font-bold text-gray-800 lg:pt-[50px] lg:self-start md:self-center mb-4">
          Works with all
          </h2>
          <p className="text-gray-600 text-xl mr-8 lg:pt-[2px] ">
            Give an international feel to the viewers of all your cricket matches.
          </p>
        </div>
        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          <img
            src={img1}
            alt="Score Ticker Display"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
      
    <div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        <div className="mb-6 md:mb-0 md:mr-8">
          <img
            src={img2}
            alt="Score Ticker Display"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-black lg:pt-[80px] mb-6 ">
      Full scorecard
      </h1>
          <p className="text-gray-600 text-xl lg:pt-] ">
          Get full batting and bowling scorecards between every over and innings break.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">

  <div className="flex flex-col md:flex-row items-center md:items-start">
    <div className="text-left md:mr-8 flex-1 py-12 ">
    <h1 className="text-3xl font-bold text-black lg:self-start  md:self-start mb-6">
    Animations
  </h1>
      <p className="text-gray-600 text-xl  ">
        Get real-time beautiful animations for boundaries, sixes, and wickets.
      </p>
    </div>
    {/* Image Section */}
    <div className="mt-6 md:mt-0 flex-shrink-0">
      <img
        src={img3}
        alt="Score Ticker Display"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

<div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">
     
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:mr-8">
          <img
            src={img4}
            alt="Score Ticker Display"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="text-center md:text-left  ">
        <h1 className="text-3xl font-bold text-black lg:pt-[80px] mb-6 ">
      Themes
      </h1>
          <p className="text-gray-600 text-xl lg:pt-[2px] gap-20">
          Give an international feel to the viewers of all your cricket
          matches. </p>
        </div>
      </div>
    </div>
 
    <div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold  text-[#4A2EB0] mb-6 lg:pt-[50px] text-center">
      Why Score Ticker?
      </h1>
      <br />
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Content Section */}
        <div className="text-center md:text-left py-12 md:mr-8">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          Drive fan engagement
          </h2>
          <p className="text-gray-600 text-xl mr-8 lg:pt-[2px] gap-20">
          Give an international feel to the viewers of all your cricket matches.          </p>
        </div>
        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          <img
            src={img5}
            alt="Score Ticker Display"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

  

      <PricingPage/>
      
    </div>
  );
};

export default ScoreTickerheder;
