import React, { useState } from "react";

import commentator1 from "../Assests/Academy/commentator1.jpg"
import commentator2 from "../Assests/Academy/commentator2.jpg"
import commentator3 from "../Assests/Academy/commentator3.jpg"
import commentator4 from "../Assests/Academy/commentator4.jpg"
import commentator5 from "../Assests/Academy/commentator5.jpg"
import commentator6 from "../Assests/Academy/commentator6.jpg"
import commentator7 from "../Assests/Academy/commentator7.jpg"
import commentator8 from "../Assests/Academy/commentator8.jpg"
import commentator9 from "../Assests/Academy/commentator9.jpg"
import commentator10 from "../Assests/Academy/commentator10.jpg"

const Commentator = [
  { id: 1, name: "PADMAKAR PATIL (PADDY)", location: "Commentator | Jalgaon" ,MatchesCommentator:"MatchesCommentator: 1683", rating: 5.0, reviews: 264,img: commentator1 },
  { id: 2, name: "(Deva)Devanand Landge", location: "Commentator| Pune",MatchesCommentator:"MatchesCommentator: 1434" , rating: 3.0, reviews: 149 ,img: commentator2},
  { id: 3, name: "Noor Malek (9925464124)", location: " Commentator| Surat",MatchesCommentator:"MatchesCommentator: 1854", rating: 5.0, reviews: 185,img: commentator3 },
  { id: 4, name: "Sarfraj Mankda", location: "Commentator| Chikhli (Gujarat)",MatchesCommentator:"MatchesCommentator:1644" , rating: 2.7, reviews: 133,img: commentator4 },
  { id: 5, name: "Shankar Pawar", location: "Commentator| Solapur",MatchesCommentator:"MatchesCommentator: 1199" , rating: 3.5, reviews: 386,img: commentator5 },
  { id: 6, name: "Abhishek Prajapati", location: "Commentator| Ahmedabad",MatchesCommentator:"MatchesCommentator: 1315" , rating: 5.0, reviews: 617,img: commentator6 },
  { id: 7, name: "Jigs (SACHIN SPORTY) Umra", location: "Commentator|  Surat",MatchesCommentator:"MatchesCommentator: 1296 ", rating: 2.1, reviews: 43,img: commentator7 },
  { id: 8, name: "Raj Chauhan", location: "Commentator|  Chikhli (Gujarat)",MatchesCommentator:"MatchesCommentator: 1597" , rating: 5.0, reviews: 1000,img: commentator8 },
  { id: 9, name: "Hemant Das", location: "Commentator|  Pune",MatchesCommentator:"MatchesCommentator:1389" , rating: 1.5, reviews: 22,img: commentator9 },
  { id: 10, name: "Commentator Jitu Bishnoi", location: "Commentato| Sanchor",MatchesCommentator:"MatchesCommentator: 372" , rating: 2.0, reviews: 56,img: commentator10 },
];

const CricketCommentators = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Match Commentator</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Commentator.slice(0, visibleCount).map((Commentator) => (
            <div
              key={Commentator.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Commentator.img}
                alt={Commentator.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Commentator.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2 font-bold">{Commentator.MatchesCommentator}</p>
              <p className="text-gray-600 text-sm mb-2">{Commentator.location
}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Commentator.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Commentator.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Commentator.length && (
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
          
           <p>Watching a Cricket match would be very boring if not for the commentators. They keep the audience engaged by describing the game beautifully in real time and sharing interesting facts about the players, grounds, tournament, etc. To become an effective commentator you need good knowledge of the game, its history and ideally stats of the players who are playing the match. criclog fills this gap for the grassroots commentators by providing them up to date stats of the players, matches and tournaments. It helps the commentators excel at their job of keeping the audience entertained for the whole match.</p>
           <br />
           <p>At the same time, criclog is building a community of commentators who can list their services for free on the criclog App and get more matches to commentate. All you need to do is register yourself as a commentator on the criclog App.</p>
         
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          How can you register as a Commentatoron Criclog?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Download the Criclog App.</li>
            <li>User friendly online scoring on our Criclog App.</li>
            <li>Register yourself as a Commentatorin Ecosystem  Commentator.</li>
            <li>Easily register your tournament on our platform.</li>
            <li>Fill in basic details of yourself along with your fees and pictures.</li>
            <li>Submit the details for review.</li>
            <li>Start commenting, literally!</li>
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-4">
        How does the community of Commentators benefit a player?
          </h2>
        <ul className="list-disc pl-8 space-y-2">
            <li>Promptly find Commentators near your location.</li>
            <li>Check their reviews and ratings.</li>
            <li>Check their previously Commentator matches.</li>
            <li>Check their per match fees and other details.</li>
            <li>Connect with them easily.</li>
          </ul>
          <br />
         <p>Criclog has more than 13K Commentators registered across the globe who are scoring matches and have deep understanding of Criclog scoring.</p>
         
        </div>
       

      </section>
    </div>
  );
};

export default  CricketCommentators;
