import React, { useState } from "react";

import coach1 from "../Assests/Academy/coach1.jpg"
import coach2 from "../Assests/Academy/coach2.jpg"
import coach3 from "../Assests/Academy/coach3.jpg"
import coach4 from "../Assests/Academy/coach4.jpg"
import coach5 from "../Assests/Academy/coach5.jpg"
import coach6 from "../Assests/Academy/coach6.jpg"
import coach7 from "../Assests/Academy/coach7.jpg"
import coach8 from "../Assests/Academy/coach8.jpg"
import coach9 from "../Assests/Academy/coach9.jpg"
import coach10 from "../Assests/Academy/coach10.jpg"

const Coach = [
  { id: 1, name: "REGIONAL CRICKET CLUB", location: "Personal Cricket Coach | Bhopal" , rating: 4.0, reviews: 64,img: coach1 },
  { id: 2, name: "Throwdown Speacialist", location: "Personal Cricket Coach | Mysore",  rating: 3.0, reviews: 149,img: coach2 },
  { id: 3, name: "22 Yards Of Happiness", location: "Personal Cricket Coach | Bhopal", rating: 5.0, reviews: 185,img: coach3 },
  { id: 4, name: "Throwdown Speacialist", location: "Personal Cricket Coach | Mysore" , rating: 2.7, reviews: 133,img: coach4 },
  { id: 5, name: "22 Yards Of Happiness", location: "Personal Cricket Coach | Bhopal" , rating: 3.5, reviews: 386,img: coach5 },
  { id: 6, name: "30 Yards", location: "Personal Cricket Coach | Hosur" , rating: 2.0, reviews: 617,img: coach6 },
  { id: 7, name: "@fastbowling _world", location: "Personal Cricket Coach | Gurugram ( Gurgaon )", rating: 3.1, reviews: 43,img: coach7 },
  { id: 8, name: "A P BHANU", location: "Personal Cricket Coach | Kanpur", rating: 4.0, reviews: 1000,img: coach8 },
  { id: 9, name: "a. NIS certified Cricket Coach", location: "Personal Cricket Coach | Hyderabad (Telangana)", rating: 5.0, reviews: 1822 ,img: coach9},
  { id: 10, name: "@fastbowling _world", location: "Personal Cricket Coach | Gurugram ( Gurgaon )" , rating: 2.0, reviews: 56,img: coach10 },
];

const  CricketCoach = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Coach Manufacturers</h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Coach.slice(0, visibleCount).map((Coach) => (
            <div
              key={Coach.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Coach.img}
                alt={Coach.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Coach.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{Coach.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Coach.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Coach.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Coach.length && (
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
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket Shops, Cricket Grounds, Cricket Academies, T-shirt Vendors, Coach Manufacturers, Coach Vendors, and many more. The Community (previously Ecosystem) module of the criclog App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. criclog is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with criclog Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketCoach;
