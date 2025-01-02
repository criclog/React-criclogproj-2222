import React, { useState } from "react";

import tshirt1 from "../Assests/Academy/t-shirt1.jpg"
import tshirt2 from "../Assests/Academy/t-shirt2.jpg"
import tshirt3 from "../Assests/Academy/t-shirt3.jpg"
import tshirt4 from "../Assests/Academy/t-shirt4.jpg"
import tshirt5 from "../Assests/Academy/t-shirt5.jpg"
import tshirt6 from "../Assests/Academy/t-shirt6.jpg"
import tshirt7 from "../Assests/Academy/t-shirt7.jpg"
import tshirt8 from "../Assests/Academy/t-shirt8.jpg"
import tshirt9 from "../Assests/Academy/t-shirt9.jpg"
import tshirt10 from "../Assests/Academy/t-shirt10.jpg"


const Tshirt = [
  { id: 1, name: "10 Sport", location: "T-shirt vendor | Kutch" , rating: 5.0, reviews: 64 ,img: tshirt1},
  { id: 2, name: "99Uniforms.com", location: "T-shirt vendor | New Delhi",  rating: 3.0, reviews: 149,img: tshirt2 },
  { id: 3, name: "A Creative Solutions", location: " T-shirt vendor | Noida", rating: 5.0, reviews: 185,img: tshirt3 },
  { id: 4, name: "A Creative Solutions", location: "T-shirt vendor | Noida" , rating: 2.7, reviews: 133,img: tshirt4 },
  { id: 5, name: "A Creative Solutions", location: "T-shirt vendor | Noida" , rating: 3.5, reviews: 386,img: tshirt5 },
  { id: 6, name: "AAA SPORTS CENTRE", location: "T-shirt vendor | Kalol" , rating: 5.0, reviews: 617,img: tshirt6 },
  { id: 7, name: "Aarambh Sports", location: "T-shirt vendor | Navi Mumbai", rating: 3.1, reviews: 43,img: tshirt7 },
  { id: 8, name: "AB Sports..", location: "T-shirt vendor | Bokaro", rating: 4.0, reviews: 1000 ,img: tshirt8},
  { id: 9, name: "Active Plus Tshirts Manufacturer", location: "T-shirt vendor | Ludhiana", rating: 3.5, reviews: 22,img: tshirt9 },
  { id: 10, name: "Adan Sport", location: "T-shirt vendor | Hapur" , rating: 2.0, reviews: 56,img: tshirt10 },
];

const CricketTshirst = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Match Tshirt</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Tshirt.slice(0, visibleCount).map((Tshirt) => (
            <div
              key={Tshirt.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Tshirt.img}
                alt={Tshirt.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Tshirt.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{Tshirt.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Tshirt.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Tshirt.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Tshirt.length && (
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
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket t-shirts, Cricket Grounds, Cricket Academies, T-shirt Vendors, Bat Manufacturers, Trophy Vendors, and many more. The Community (previously Ecosystem) module of the criclog App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. criclog is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with criclog Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketTshirst;
