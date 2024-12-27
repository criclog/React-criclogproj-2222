import React, { useState } from "react";

import bat1 from "../Assests/bat1.jpg";
import bat2 from "../Assests/bat2.jpg";
import bat3 from '../Assests/bat3.jpg';
import bat4 from "../Assests/bat4.jpg";
import bat5 from "../Assests/bat5.jpg";
import bat6 from "../Assests/bat6.jpg";
import bat7 from "../Assests/bat7.jpg";
import bat8 from "../Assests/bat8.jpg";
import bat9 from "../Assests/bat9.jpg";
import bat10 from "../Assests/bat10.jpeg"


const Bat = [
  { id: 1, name: "(RAFIQUE RYAZ) RR SPORTS", location: "Bat Manufacture | Madurai" , rating: 4.0, reviews: 64,img:bat1 },
  { id: 2, name: "10ten Sports", location: "Bat Manufacture | Rajkot",  rating: 3.0, reviews: 149,img:bat2 },
  { id: 3, name: "4Sqare sports", location: " Bat Manufacture | Hyderabad (Telangana)", rating: 5.0, reviews: 185,img:bat3},
  { id: 4, name: "A Machine Cricket Co.", location: "Bat Manufacture | Jalandhar" , rating: 2.7, reviews: 133 ,img:bat4},
  { id: 5, name: "A2Z Sports", location: "Bat Manufacture | Meerut" , rating: 3.5, reviews: 386,img:bat5 },
  { id: 6, name: "AA SPORTS", location: "Bat Manufacture | Palayamkottai" , rating: 2.0, reviews: 617,img:bat6 },
  { id: 7, name: "AA SPORTS", location: "Bat Manufacture | Palayamkottai", rating: 3.1, reviews: 43,img:bat7 },
  { id: 8, name: "Ad Sports", location: "Bat Manufacture | Chennai", rating: 4.0, reviews: 1000 ,img:bat8 },
  { id: 9, name: "Adityasports", location: "Bat Manufacture | Meerut", rating: 5.0, reviews: 1822,img:bat9  },
  { id: 10, name: "AFS ( Al Fajer Sports)", location: "Bat Manufacture | Srinagar (Jammu and Kashmir)" , rating: 2.0, reviews: 56,img:bat10 },
];

const  CricketBat = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Bat Manufacturers</h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Bat.slice(0, visibleCount).map((Bat) => (
            <div
              key={Bat.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
             
              <img
                src={Bat.img}
                alt={Bat.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Bat.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{Bat.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Bat.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Bat.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

    
        {visibleCount < Bat.length && (
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
          
           <p>Since its inception in 2016, CricHeroes is on a mission to connect every stakeholder of grassroots cricket with one another and enable meaningful transactions between them. We started with a simple scoring app, which connected players, organisers and scorers with each other.</p>
           <br />
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket bats, Cricket Grounds, Cricket Academies, T-shirt Vendors, Bat Manufacturers, Bat Vendors, and many more. The Community (previously Ecosystem) module of the CricHeroes App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. CricHeroes is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with CricHeroes Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketBat;
