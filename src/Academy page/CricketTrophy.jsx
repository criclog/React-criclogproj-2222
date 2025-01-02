import React, { useState } from "react";

import trophy1 from "../Assests/Academy/trophy1.jpg"
import trophy2 from "../Assests/Academy/trophy2.jpg"
import trophy3 from "../Assests/Academy/trophy3.jpg"
import trophy4 from "../Assests/Academy/trophy4.jpg"
import trophy5 from "../Assests/Academy/trophy5.jpg"
import trophy6 from "../Assests/Academy/trophy6.jpg"
import trophy7 from "../Assests/Academy/trophy7.jpg"
import trophy8 from "../Assests/Academy/trophy8.jpg"
import trophy9 from "../Assests/Academy/trophy9.jpg"
import trophy10 from "../Assests/Academy/trophy10.jpg"


const Trophy = [
  { id: 1, name: "A2Z TROPHY DISTRIBUTOR (Ryaz & Rafique)", location: "Trophy vendor | Madurai" , rating: 4.0, reviews: 64 ,img: trophy1},
  { id: 2, name: "AAL SPORTSAAL", location: "Trophy vendor | Chennai",  rating: 3.0, reviews: 149,img: trophy2 },
  { id: 3, name: "ACM Awards", location: " Trophy vendor | Mumbai", rating: 5.0, reviews: 185 ,img: trophy3},
  { id: 4, name: "AJ Sports", location: "Trophy vendor | Bengaluru (Bangalore)" , rating: 2.7, reviews: 133,img: trophy4 },
  { id: 5, name: "AP SPORTS", location: "Trophy vendor | Ghaziabad" , rating: 3.5, reviews: 386,img: trophy5 },
  { id: 6, name: "Ariess Marketing Group", location: "Trophy vendor | Noida" , rating: 2.0, reviews: 617 ,img: trophy6},
  { id: 7, name: "Arora trophy", location: "Trophy vendor | Zira", rating: 3.1, reviews: 43,img: trophy7 },
  { id: 8, name: "Arora trophy", location: "Trophy vendor | Zira", rating: 4.0, reviews: 1000,img: trophy8 },
  { id: 9, name: "Artistic d Syners", location: "Trophy vendor | Chennai", rating: 5.0, reviews: 1822,img: trophy9 },
  { id: 10, name: "ASN Sports House Trophy And Awards", location: "Trophy vendor | Greater Noida" , rating: 2.0, reviews: 56,img: trophy10 },
];

const  CricketTrophy = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Trophy  Dealers</h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Trophy.slice(0, visibleCount).map((Trophy) => (
            <div
              key={Trophy.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Trophy.img}
                alt={Trophy.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Trophy.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{Trophy.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Trophy.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Trophy.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Trophy.length && (
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
      <br />
      <section className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
          
           <p>Since its inception in 2016, criclog is on a mission to connect every stakeholder of grassroots cricket with one another and enable meaningful transactions between them. We started with a simple scoring app, which connected players, organisers and scorers with each other.</p>
           <br />
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket trophys, Cricket Grounds, Cricket Academies, T-shirt Vendors, Bat Manufacturers, Trophy Vendors, and many more. The Community (previously Ecosystem) module of the criclog App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. criclog is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with criclog Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketTrophy;
