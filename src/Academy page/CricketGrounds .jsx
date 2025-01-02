import React, { useState } from "react";
import Grounds1 from "../Assests/Academy/ground1.jpg"
import Grounds2 from "../Assests/Academy/ground2.jpg"
import Grounds3 from "../Assests/Academy/ground3.jpg"
import Grounds4 from "../Assests/Academy/ground4.jpg"
import Grounds5 from "../Assests/Academy/ground5.jpg"
import Grounds6 from "../Assests/Academy/ground6.jpg"
import Grounds7 from "../Assests/Academy/ground7.jpg"
import Grounds8 from "../Assests/Academy/ground8.jpg"
import Grounds9 from "../Assests/Academy/ground9.jpg"
import Grounds10 from "../Assests/Academy/ground10.jpg"

const grounds = [
  { id: 1, name: "New Melgiri Cricket Ground", location: "Yemikalpahad, Telangana", rating: 3.3, reviews: 6,img: Grounds1, },
  { id: 2, name: "PMR Cricket County (Ground-1)", location: "Aiznagar, Telangana", rating: 4.4, reviews: 19,img: Grounds2, },
  { id: 3, name: "PMR Cricket County (Ground-2)", location: "Aiznagar, Telangana", rating: 5.0, reviews: 15,img: Grounds3, },
  { id: 4, name: "Fine Leg Cricket Academy", location: "Bengaluru, Karnataka", rating: 4.7, reviews: 33,img: Grounds4, },
  { id: 5, name: "Aastha Turf Ground", location: "Bengaluru, Karnataka", rating: 2.1, reviews: 16,img: Grounds5, },
  { id: 6, name: "Adithya Cricket Ground - 1", location: "Peddamangalaram, Telangana", rating: 4.7, reviews: 17,img:Grounds6, },
  { id: 7, name: "Adithya Cricket Ground - 2", location: "Hyderabad, Telangana", rating: 4.1, reviews: 13,img:Grounds7, },
  { id: 8, name: "Adithya Cricket Ground - 3", location: "Hyderabad, Telangana", rating: 0.0, reviews: 9,img:Grounds8, },
  { id: 9, name: "Albatross Cricket Ground", location: "Hyderabad, Telangana", rating: 3.5, reviews: 22,img:Grounds9, },
  { id: 10, name: "Altitore Sports Oval", location: "Bengaluru, Karnataka", rating: 4.0, reviews: 5 ,img:Grounds10,},
];

const GroundCards = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8 ">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Grounds</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {grounds.slice(0, visibleCount).map((ground) => (
            <div
              key={ground.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={ground.img}
                alt={ground.title}
                className="w-[400px] h-[250px] object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {ground.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{ground.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{ground.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{ground.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < grounds.length && (
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
          <h2 className="text-center text-2xl font-bold mb-4">
          Do you own a ground or are you looking for one to play on?
          </h2>
           <p>At Cricllog, our aim is to connect every stakeholder of grassroots cricket with each other to make the world's largest Cricket Network. This means equal focus on cricketers as well as any other business or service around cricket, for e.g. Cricket Grounds.</p>
           <br />
           <p>Ground owners are always on a lookout to rent their cricket grounds to the right audience. With the criclog App, you can list your cricket facilities for free and get more bookings instantly from millions of registered cricketers on criclog.</p>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          So how to register your Cricket Ground on criclog?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Go to Community  Grounds  Register your ground.</li>
            <li>Submit the details for review.</li>
            <li>Submit the details for review</li>
            
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          Do you own a ground or are you looking for one to play on?

          </h2>
          <br />
          <p>Every cricketer requires a different set of facilities when it comes to choosing a cricket ground. Some like to play on a turf wicket, some like astroturf or a bigger outfield. Players can choose from a list of grounds near them on the criclog App and easily connect with the ground owners directly.</p>
           <br />
          <ul className="list-disc pl-8 space-y-2">
            <li>Know ground type and facilities.</li>
            <li>Get fees and other information in advance.</li>
            <li>Check out ground photos.
            </li>
            <li>Read reviews and ratings beforehand.
            </li>
            <li>Check past matches and tournaments of that particular ground.
            </li>
            <li>If you are a criclog Pro, you’ll know CricInsights of the ground to prepare your team better.
            </li>
            <li>Directly connect with ground owners.
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GroundCards;
