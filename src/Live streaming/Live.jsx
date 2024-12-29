import React, { useRef } from "react";
import live from "../Assests/livestreamingicon.png";
import crc from "../Assests/photo-cricket-team-stadium-icc-man-world-cup-2023-match-generative-ai_742418-6219.jpg";
import Vimg from "../Assests/Screenshot 2024-12-17 120220.png";
import { Icons, Video, FAQ } from "../Live streaming/Price";
import MainComponent from "../Live streaming/Price";
import Footer from "../Live streaming/Footer";


const LiveStreamingBanner = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      title: "Sports Score Tickers",
      description: "Advance Score Tickers to get a feel of an international match.",
      image: Vimg,
    },
    {
      title: "Promote Sponsors",
      description: "Promote Sponsors on your live streams.",
      image: Vimg,
    },
    {
      title: "Social Media Platforms",
      description: "Reach a broader audience via social media integrations.",
      image: Vimg,
    },
  ];

  return (
    <div>
      
      {/* Header Section */}
        
      
     
      {/* Dashborad */}
     <div className="">
      
     
      <div className="relative  ">
        <img
          src={crc}
          alt="Cricket Stadium"
          className="w-full h-[300px] sm:h-[200px] object-cover "
        />
        <div className="absolute top-0 w-full h-full bg-[#4A2EB0] bg-opacity-90 flex flex-col items-center justify-center text-white text-center gap-4 px-4">
          <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold flex flex-col sm:flex-row items-center gap-4">
            CRICLOG{" "}
            <span className="w-[200px] h-[80px] sm:h-[70px] border border-black bg-black rounded flex justify-center items-center gap-4">
              <img
                src={live}
                alt="Live Icon"
                className="w-[40px] h-[25px] sm:w-[30px] sm:h-[20px]"
              />{" "}
              Live
            </span>{" "}
            STREAMING
          </h1>
          <p className="text-base sm:text-sm md:text-lg">
            Broadcast your matches to the world by streaming them live!
          </p>
          <button
            onClick={handleScroll}
            className="border border-white w-[200px] h-[50px] sm:w-[150px] sm:h-[40px] flex justify-center items-center rounded cursor-pointer hover:bg-white hover:text-black transition"
          >
            VIEW PRICING
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full min-h-screen flex flex-col gap-12 mt-10 px-4">
        <h1 className="text-center text-2xl sm:text-xl lg:text-3xl text-[#4A2EB0] font-bold">
          What do you get in a CricLogs live stream?
        </h1>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-6 lg:gap-12`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full lg:w-1/2 object-cover"
            />
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-xl sm:text-lg lg:text-2xl font-semibold">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing and Footer Section */}
      <div className="w-full mt-12">
        <section ref={sectionRef}>
          <MainComponent />
        </section>
        <Icons />
        <Video />
        <FAQ />
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default LiveStreamingBanner;
