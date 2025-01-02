import React, { useState } from "react";

import nets1 from "../Assests/Academy/nets1.jpg"
import nets2 from "../Assests/Academy/nets2.jpg"
import nets3 from "../Assests/Academy/nets3.jpg"
import nets4 from "../Assests/Academy/nets4.jpg"
import nets5 from "../Assests/Academy/nets5.jpg"
import nets6 from "../Assests/Academy/nets6.jpg"
import nets7 from "../Assests/Academy/nets7.jpg"
import nets8 from "../Assests/Academy/nets8.jpg"
import nets9 from "../Assests/Academy/nets9.jpg"
import nets10 from "../Assests/Academy/nets10.jpg"


const IndoorNets= [
  { id: 1, name: "3 Dimensional ACA Cricket Ground", location: "Indoor Nets | Gurugram ( Gurgaon )" , rating: 2.0, reviews: 64,img: nets1},
  { id: 2, name: "AAl Sportsaal", location: "Indoor Nets | Chennai",  rating: 3.0, reviews: 149,img: nets2 },
  { id: 3, name: "Academy Modasa", location: "Indoor Nets | Modasa", rating: 5.0, reviews: 185,img: nets3 },
  { id: 4, name: "Adwan Sports Veritas Cricketing Centre", location: "Indoor Nets | Noida" , rating: 2.7, reviews: 133 ,img: nets4},
  { id: 5, name: "Alagar Turf", location: "Indoor Nets | Dindigul" , rating: 3.5, reviews: 386,img: nets5 },
  { id: 6, name: "Amigos Sports Academy", location: "Indoor Nets | Panipat Taraf Ansar" , rating: 2.0, reviews: 617,img: nets6 },
  { id: 7, name: "Apex Cricket Academy Lucknow", location: "Indoor Nets | Lucknow", rating: 3.1, reviews: 43,img: nets7 },
  { id: 8, name: "Big Bash Turf", location: "Indoor Nets | Ulhasnagar", rating: 5.0, reviews: 1000,img: nets8 },
  { id: 9, name: "BP Patil Sports Academy Kharghar", location: "Indoor Nets | Navi Mumbai", rating: 4.0, reviews: 1822,img: nets9 },
  { id: 10, name: "BT SPORTS MANIA", location: "Indoor Nets | Pimpri" , rating: 3.0, reviews: 56 ,img: nets10},
];

const CricketIndoorNets = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Indoor Nets Provider        </h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IndoorNets.slice(0, visibleCount).map((IndoorNets) => (
            <div
              key={IndoorNets.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={IndoorNets.img}
                alt={IndoorNets.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />


              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {IndoorNets.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{IndoorNets.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{IndoorNets.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{IndoorNets.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < IndoorNets.length && (
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
           <p>Slowly we evolved into a much larger network connecting other community members like Umpires, Commentators, Cricket Shops, Cricket Grounds, Cricket Academies, T-shirt Vendors, IndoorNetsManufacturers, IndoorNetsVendors, and many more. The Community (previously Ecosystem) module of the criclog App allows everyone who is connected to grassroots cricket to list themselves or their services free of charge. Players, organisers can directly connect with them to either hire them or to transact. Grassroots cricket is the main reason why Cricket is the second largest sport in the world. criclog is committed to bridge the gap between the grassroots cricket and international cricket with the help of technology. We encourage everyone involved to register themselves with criclog Community and become part of this grand mission.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketIndoorNets;
