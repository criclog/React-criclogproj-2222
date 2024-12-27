import React, { useState } from "react";

import umpire1 from "../Assests/Academy/umpire1.jpg"
import umpire2 from "../Assests/Academy/umpire2.jpg"
import umpire3 from "../Assests/Academy/umpire3.jpg"
import umpire4 from "../Assests/Academy/umpire4.jpg"
import umpire5 from "../Assests/Academy/umpire5.jpg"
import umpire6 from "../Assests/Academy/umpire6.jpg"
import umpire7 from "../Assests/Academy/umpire7.jpg"
import umpire8 from "../Assests/Academy/umpire8.jpg"
import umpire9 from "../Assests/Academy/umpire9.jpg"
import umpire10 from "../Assests/Academy/umpire10.jpg"

const Umpire = [
  { id: 1, name: "Yadav Vikas(8320401071)", UmpireName: "Umpirer | Surat" ,MatchesUmpired:"MatchesUmpired: 683", rating: 5.3, reviews: 64,img: umpire1},
  { id: 2, name: "Neeraj Kumar", UmpireName: "Umpirer | Karnal",MatchesUmpired:"MatchesUmpired: 434" , rating: 3.0, reviews: 149 ,img: umpire2 },
  { id: 3, name: "Venkatesh S", UmpireName: " Umpirer | Chennai",MatchesUmpired:"MatchesUmpired: 454", rating: 5.0, reviews: 185 ,img: umpire3},
  { id: 4, name: "Cricketer Vinoth Nagaswamy", UmpireName: "Umpirer | Kanchipuram",MatchesUmpired:"MatchesUmpired:644" , rating: 2.7, reviews: 133,img: umpire4 },
  { id: 5, name: "YASH B. PATEL", UmpireName: "Umpirer | Surat",MatchesUmpired:"MatchesUmpired: 199" , rating: 3.5, reviews: 386,img: umpire5 },
  { id: 6, name: "Ashvin Rajput", UmpireName: "Umpirer | Kalol",MatchesUmpired:"MatchesUmpired: 315" , rating: 5.0, reviews: 617 ,img: umpire6},
  { id: 7, name: "Ishwarkumar Prajapati", UmpireName: "Umpirer | Ahmedabad",MatchesUmpired:"MatchesUmpired: 296 ", rating: 2.1, reviews: 43,img: umpire7  },
  { id: 8, name: "Ajay Singh", UmpireName: "Umpirer | Hyderabad (Telangana)",MatchesUmpired:"MatchesUmpired: 597" , rating: 5.0, reviews: 1000,img: umpire8  },
  { id: 9, name: "Asit Mondal", UmpireName: "Umpirer |  Bongaon",MatchesUmpired:"MatchesUmpired:89" , rating: 1.5, reviews: 22,img: umpire9 },
  { id: 10, name: "Gajendra D R", UmpireName: "Umpirer | Bengaluru (Bangalore)",MatchesUmpired:"MatchesUmpired: 372" , rating: 2.0, reviews: 56,img: umpire10  },
];

const CricketUmpire = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Match Umpire</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Umpire.slice(0, visibleCount).map((Umpire) => (
            <div
              key={Umpire.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Umpire.img}
                alt={Umpire.title}
                className="w-[400px] h-[270px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />


              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Umpire.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2 font-bold">{Umpire.MatchesUmpired}</p>
              <p className="text-gray-600 text-sm mb-2">{Umpire.UmpireName}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Umpire.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Umpire.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Umpire.length && (
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
          
           <p>Cricket Umpires are responsible for a fair and clean game of Cricket. They should have deep knowledge of laws of cricket and should be impartial because their decisions can change the course of the game. Umpires also ensure that the equipment used and match conditions are suitable and they follow the rules of the game. Their work is not limited only during the match but also before and after the match.</p>
           <br />
           <p>At Criclog, we are creating a community where professional and amateur umpires can list their services for free and get more matches to officiate from players and tournament organisers All you need to do is register yourself as an umpire on the Criclog App.</p>
         
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          How can you register as a Umpirer on Criclog?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Download the Criclog App.</li>
            <li>User friendly online scoring on our Criclog App.</li>
            <li>Register yourself as a Umpirer in Ecosystem  Umpirer.</li>
            <li>Easily register your tournament on our platform.</li>
            <li>Fill in basic details of yourself along with your fees and pictures.</li>
            <li>Submit the details for review.</li>
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-4">
        How does the community of Umpirers benefit a player?
          </h2>
        <ul className="list-disc pl-8 space-y-2">
            <li>Promptly find Umpirers near your location.</li>
            <li>Check their reviews and ratings.</li>
            <li>Check their previously Umpired matches.</li>
            <li>Check their per match fees and other details.</li>
            <li>Connect with them easily.</li>
          </ul>
          <br />
         <p>Criclog has more than 13K Umpirers registered across the globe who are scoring matches and have deep understanding of Criclog scoring.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default CricketUmpire;
