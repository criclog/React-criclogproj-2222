import React, { useState } from "react";

import live1 from "../Assests/Academy/live1.jpg"
import live2 from "../Assests/Academy/live2.jpg"
import live3 from "../Assests/Academy/live3.jpg"
import live4 from "../Assests/Academy/live4.jpg"
import live5 from "../Assests/Academy/live5.jpg"
import live6 from "../Assests/Academy/live6.jpg"
import live7 from "../Assests/Academy/live7.jpg"
import live8 from "../Assests/Academy/live8.jpg"
import live9 from "../Assests/Academy/live9.jpg"
import live10 from "../Assests/Academy/live10.jpg"


const 
cricloglive = [
  { id: 1, name: "Quick Live", location: "Live Streamer | Rohtak" , rating: 5.0, reviews: 264,img: live1 },
  { id: 2, name: "Barasa", location: "Live Streamer | Jaisalmer", rating: 3.0, reviews: 149 ,img: live2},
  { id: 3, name: "Bk Live Cricket", location: " Live Streamer | Palanpur", rating: 5.0, reviews: 185,img: live3 },
  { id: 4, name: "A 1 Sky Sports (Sridhar Yadav) Elite", location: "Live Streamer | Hyderabad (Telangana)", rating: 2.7, reviews: 133,img: live4 },
  { id: 5, name: "A. DSPL BROADCASTING", location: "Live Streamer | Hyderabad (Telangana)", rating: 3.5, reviews: 386,img: live5 },
  { id: 6, name: "Hridoy", location: "Live Streamer | Dhaka (Bangladesh)", rating: 5.0, reviews: 617 ,img: live6},
  { id: 7, name: "$KY CRICKET LIVE", location: "Live Streamer | Ahmedabad ", rating: 2.1, reviews: 43,img: live7 },
  { id: 8, name: "10 MEDIA", location: "Live Streamer | Mangalore" , rating: 5.0, reviews: 1000 ,img: live8},
  { id: 9, name: "10 Ten Sports Live", location: "Live Streamer | Surat" , rating: 1.5, reviews: 22 ,img: live9},
  { id: 10, name: "22 Yard Tennis Cricket Live", location: "Live Streamer | Mumbai" , rating: 2.0, reviews: 56,img: live10 },
];

const Cricloglive = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Match cricloglive</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cricloglive.slice(0, visibleCount).map((cricloglive) => (
            <div
              key={cricloglive.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={cricloglive.img}
                alt={cricloglive.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />


              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {cricloglive.name}
              </h2>
              
              <p className="text-gray-600 text-sm mb-2">{cricloglive.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{cricloglive.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{cricloglive.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < cricloglive.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreCards}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-[#4A2EB0] transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default  Cricloglive;
