import React from "react";
import cric from "../Assests/whycrichome.jpg";
import QR from "../Assests/organization/getAppQr.png";
import Scrollimg from "./Scrollimg";
import { Homenumbersect } from "../Homesection/Homesect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const OrganizeTournment = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full min-h-100vh border border-blue-500 bg-[#4A2EB0] text-2xl py-[50px]">
        <div className="w-full h-full flex flex-col items-center justify-center text-white gap-5 px-4">
          <h1 className="md:text-[28px] sm:text-[24px] text-[20px]  font-semibold text-center">
            Score Cricket Tournaments for FREE
          </h1>
          <p className="text-center md:text-[20px] sm:text-[16px] text-[14px] ">
            If You Are A Tournament Organiser, You Can Manage Your Entire
            Tournament On The Criclog App Absolutely Free!
          </p>
          <Link to={'/Login'}><p className="text-xs border border-white w-[150px] h-[40px] flex items-center justify-center rounded cursor-pointer hover:bg-white hover:text-black">
            REGISTER NOW
          </p></Link>
        </div>
      </div>

      {/* Benefits Section */}
      <p className="font-medium text-3xl text-[#4D28D4] mt-8 text-center">
        Benefit
      </p>
      <Benefit />

      {/* Stats Section */}
      <Homenumbersect/>
      {/* Testimonials Section */}
    <h1 className="w-full "> <Testimonials/></h1> 
      <Scrollimg />
      <div className="w-full flex flex-col justify-center md:flex-row items-center gap-4 py-6 text-center">
        <p className="text-lg font-semibold">
          Follow all the associations on our App.
        </p>
       <Link to={'/get-app'}> <button className="text-md font-bold p-2 border border-[#4A2EB0] rounded-md text-[black] hover:bg-[#4A2EB0] hover:text-[white] transition duration-200">
          GET APP
        </button></Link>
      </div>

      {/* Final Section */}
      <div className="w-full min-h-100vh py-[40px] bg-[#14212A] flex items-center justify-between px-[50px]">
        <h1 className="w-[60%] md:text-[20px] sm:text-[16px] text-[13px] font-medium text-center text-white flex flex-col gap-2 justify-center">
          <p>Let's make your tournament more exciting!</p>
          <p>Just call us on +91 8141665555 today!</p>
        </h1>
        <p className="w-[23%] flex gap-3 items-center text-[white] md:text-[18px] sm:text-[14px] text-[12px]"> 
            <p>GetApp</p>
          <img src={QR} className="sm:w-[60px] w-[40px]" />
        </p>
      </div>
    </div>
  );
};

const Benefit = () => {
    const arr=[{name:"Live Scoring",para:"Stay updated with real-time match progress through live scoring.", no:'01'},{name:"Scorecard",para:"Dive into player stats and match results with our comprehensive Professional Scorecard.", no:'02'},
        {name:"Organise Tournaments",para:"Effortlessly manage and streamline your tournament planning.", no:'03'},{name:"Live Streaming",para:"Experience live cricket action with real-time match streaming.", no:'04'},
        {name:"The Dressing Room",para:"Discover personalized merchandise and equipment with The Dressing Room.", no:'05'}
       ]
       const arr1=[{name:"Leaderboards",para:"Monitor and compare your cricket statistics with other players, highlighting top performances and milestones.", no:'06'},{name:"CricInsights",para:"Gain detailed insights into matches, players, and opponents with CricInsights.", no:'07'},
        {name:"Highlights",para:"Introducing cricket's first AI-generated highlights for your live-streamed matches—skip the manual edits and share perfect moments instantly!", no:'08'},{name:"Looking",para:"Easily locate players, opposing teams, umpires, and scorers with Looking.", no:'09'},
        {name:"Cricket Community",para:"Join the global cricket community and connect with fellow enthusiasts.", no:'10'}
       ]
        return (
            <div className='flex flex-col justify-center items-center py-[60px] gap-[40px]'>
                               <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
    
    <div className="flex flex-col items-center gap-5 px-[20px]">
      {arr.map((value, id) => (
        <h1
          key={id}
          className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500"
        >
          <div className="flex-1 text-end">
            <p className="text-sm sm:text-base font-bold">{value.name}</p>
            <p className="text-xs sm:text-sm text-[#858484]">{value.para}</p>
          </div>
          <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.no}</p>
        </h1>
      ))}
    </div>
                    <div>
                       <img src={cric} alt=" couldn't load image" className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto rounded-md " />
                    </div>
                          
                    <div className="flex flex-col items-center gap-5 px-[20px]">
              {arr1.map((value, id) => (
                <h1
                  key={id}
                  className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500">
                  <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.no}</p>
                  <div className="flex-1 text-start">
                    <p className="text-sm sm:text-base font-bold">{value.name}</p>
                    <p className="text-xs sm:text-sm text-[#858484]">{value.para}</p>
                  </div>
                </h1>
              ))}
            </div>
       
                    
            </div>
            </div>
        )
};


export const Testimonials = () => {
    const testimonials = [
      {
        name: "Khuram Barvi ",
        video:"https://www.youtube.com/embed/pGvp5Q-1Yag?si=B1R3UPVjfSLw2EvT"
        
    },
  
    {
        name: "Asgar khan ",
        video:"https://www.youtube.com/embed/pGvp5Q-1Yag?si=B1R3UPVjfSLw2EvT"
        
    },
    {
        name: "Uday B chabhad ",
        video:"https://www.youtube.com/embed/pGvp5Q-1Yag?si=B1R3UPVjfSLw2EvT"
        
    },

  
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: "50px",
      adaptiveHeight: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
  
    return (
      <div className="bg-[#4A2EB0] py-10 px-4">
        <h2 className="text-center text-[white] text-2xl  mb-8">Testimonials</h2>
        <div className="sm:w-[70%] w-[90%] mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#4A2EB0)] p-6  text-center ">
                <iframe className="lg:w-[350px] lg:h-[280px] sm:w-[250px] sm:h-[210px] w-[220px] h-[190px] " src={testimonial.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <p className="font-medium text-white text-[18px] py-[20px]">
                    {testimonial.name}
                  </p>
                </div>
              
            ))}
          </Slider>
        </div>
      </div>
    );
  };