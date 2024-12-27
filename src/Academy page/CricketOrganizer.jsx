import React, { useState } from "react";

import organiser1 from "../Assests/Academy/organiser1.jpg"
import organiser2 from "../Assests/Academy/organiser2.jpg"
import organiser3 from "../Assests/Academy/organiser3.jpg"
import organiser4 from "../Assests/Academy/organiser4.jpg"
import organiser5 from "../Assests/Academy/organiser5.jpg"
import organiser6 from "../Assests/Academy/organiser6.jpg"
import organiser7 from "../Assests/Academy/organiser7.jpg"
import organiser8 from "../Assests/Academy/organiser8.jpg"
import organiser9 from "../Assests/Academy/organiser9.jpg"
import organiser10 from "../Assests/Academy/organiser10.jpg"

const Tournament = [
  { id: 1, name: "Zimbabwe Cricket", location: " Nottingham (England), Nairobi, Port,Dubai, Dhaka (Bangladesh),",Tournaments:"Tournaments: 444" , rating: 4.3, reviews: 9,img: organiser1 },
  { id: 2, name: "Sri Lanka Cricket Scorers", location: "Town, Mirigama, Kirindiwela, Sainthamaruthu, Dombagoda, Puttalam, Katuneriya, Ganemulla, Karachchi, Rambukkana, Boralesgamuwa",Tournaments:"Tournaments: 434" , rating: 5.4, reviews: 19,img:organiser2 },
  { id: 3, name: "Nirdosh Choudhary", location: "  Karanpura, Kurukshetra, Bikaner, Raisinghnagar, Ferozepur, Fazilka, Fatehpur (Rajasthan), Anupgarh, Padampur (Rajasthan), Jaisalmer",Tournaments:"Tournaments: 414", rating: 7.0, reviews: 15,img: organiser3 },
  { id: 4, name: "Mohan", location: " Tirupur, Gopichettipalaiyam, Madurai, Dharapuram",Tournaments:"Tournaments:944" , rating: 4.7, reviews: 133,img: organiser4  },
  { id: 5, name: "Karan Soni", location: "Ahmedabad, Gandhidham, Gandhinagar, Vadodara, Surat, Rajkot, Bhavnagar, Jamnagar, Junagadh, Nadiad, Anand, Surendranagar, Mehsana, Kalol",Tournaments:"Tournaments: 199" , rating: 3.5, reviews: 86,img: organiser5},
  { id: 6, name: "Parth Bane", location: "Mumbai",Tournaments:"Tournaments: 315" , rating: 5.7, reviews: 17,img: organiser6  },
  { id: 7, name: "Sandeep Devnath Jadhav", location: "Aurangabad (Maharashtra), Paithan",Tournaments:"Tournaments: 296 ", rating: 4.1, reviews: 43 ,img: organiser7 },
  { id: 8, name: "Rajasthan Live 24", location: "Mansa (Punjab), Fatehabad (Haryana), Fazilka, Barnala, Bhikhi, Ratiya, Rania,",Tournaments:"Tournaments: 297" , rating: 0.0, reviews: 9,img: organiser8 },
  { id: 9, name: "Unicorn Sports Acadamy", location: "Ajman, Umm al-Quwain, Sharjah",Tournaments:"Tournaments: 289" , rating: 3.5, reviews: 22 ,img: organiser9 },
  { id: 10, name: "ASN SPORTS ACADEMY - DUBAI - UAE.", location: "Dubai",Tournaments:"Tournaments: 372" , rating: 8.0, reviews: 56,img: organiser10  },
];

const Organizer = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Tournament Organizer</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Tournament.slice(0, visibleCount).map((Tournament) => (
            <div
              key={Tournament.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Tournament.img}
                alt={Tournament.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Tournament.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2 font-bold">{Tournament.Tournaments}</p>
              <p className="text-gray-600 text-sm mb-2">{Tournament.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Tournament.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Tournament.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Tournament.length && (
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
          
           <p>We can all safely say that organising a successful cricket tournament is not an easy feat to achieve. Apart from registering teams and booking grounds, the organiser also has to manage the scorers, umpires for every match. Maintaining points table, leaderboard, player awards and distributing trophies are just a few of the additional responsibilities. And above all getting sponsors to make the tournament possible.</p>
           <br />
           <p>CricCriclog App is committed to partner with all tournament organisers in this journey no matter how small or big the tournament is. We encourage tournament organisers all over the world to register their tournaments on the CricCriclog App and leave the groundwork on us.</p>
         
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          How can CricCriclog App help the tournament organiser?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Easy selection of the venue from our Grounds listing.</li>
            <li>User friendly online scoring on our CricCriclog App.</li>
            <li>Easily register your tournament on our platform.</li>
            <li>Promote your tournament on CricCriclog Market or with Power</li>
            <li>Promote your tournament on CricCriclog Market or with Power</li>
            <li>Go one step further and have Your App with your own name and branding</li>
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
         <p>CricCriclog has helped organise 170,000+ tournaments so far and thousands of new tournaments get registered every week.</p>
          <br />
         
      <p>If you are organising the cricket tournament for the first time, here is a step-by-step handbook for you.</p>
        </div>
       

      </section>
    </div>
  );
};

export default Organizer;
