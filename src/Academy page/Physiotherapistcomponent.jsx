import React, { useState } from "react";

import fitness1 from "../Assests/Academy/fitness1.jpg"
import fitness2 from "../Assests/Academy/fitness2.jpg"
import fitness3 from "../Assests/Academy/fitness3.jpg"
import fitness4 from "../Assests/Academy/fitness4.jpg"
import fitness5 from "../Assests/Academy/fitness5.jpg"
import fitness6 from "../Assests/Academy/fitness6.jpg"
import fitness7 from "../Assests/Academy/fitness7.jpg"
import fitness8 from "../Assests/Academy/fitness8.jpg"
import fitness9 from "../Assests/Academy/fitness9.jpg"
import fitness10 from "../Assests/Academy/fitness10.jpg"

const physiotherapist = [
  { id: 1, name: "A AHAMED RYAZ", location: "Physio Fitness Trainer | Madurai" , rating: 4.0, reviews: 64,img: fitness1 },
  { id: 2, name: "A-Z Rehab", location: "Physio Fitness Trainer | New Delhi",  rating: 5.0, reviews: 149 ,img: fitness2},
  { id: 3, name: "AA CHANGPUNG MANUAL THERAPY CLINIC", location: "Physio Fitness Trainer | Shillong", rating: 5.0, reviews: 185,img: fitness3 },
  { id: 4, name: "Aarogya physio Care.", location: "Physio Fitness Trainer | Kullu" , rating: 3.7, reviews: 133,img: fitness4 },
  { id: 5, name: "Aashirwad Physiotherapy Clinic", location: "Physio Fitness Trainer | Ghaziabad" , rating: 3.5, reviews: 386,img: fitness5 },
  { id: 6, name: "Abhishek Sharma", location: "Physio Fitness Trainer | New Delhi" , rating: 2.0, reviews: 617,img: fitness6 },
  { id: 7, name: "ACTIV PHYSIOTHERAPY CLINIC", location: "Physio Fitness Trainer | Vijayawada", rating: 3.1, reviews: 43,img: fitness7 },
  { id: 8, name: "AFSMC", location: "Physio Fitness Trainer | Jabalpur", rating: 4.5, reviews: 1000 ,img: fitness8},
  { id: 9, name: "Akshay Rathod Fitness Coach", location: "Physio Fitness Trainer | Pusad", rating: 5.0, reviews: 1822,img: fitness9 },
  { id: 10, name: "All Fit Club", location: "Physio Fitness Trainer | New Delhi" , rating: 3.2, reviews: 56 ,img: fitness10},
];

const  Cricketphysiotherapist= () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Physiotherapist & Fitness Trainer</h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {physiotherapist.slice(0, visibleCount).map((physiotherapist) => (
            <div
              key={physiotherapist.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={physiotherapist.img}
                alt={physiotherapist.title}
                className="w-[400px] h-[280px]  object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />


              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {physiotherapist.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{physiotherapist.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{physiotherapist.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{physiotherapist.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

       
        {visibleCount < physiotherapist.length && (
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
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket Shops, Cricket Grounds, Cricket Academies, T-shirt Vendors, physiotherapist Manufacturers, physiotherapist Vendors, and many more. The Community (previously Ecosystem) module of the criclog App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. criclog is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with criclog Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default Cricketphysiotherapist;
