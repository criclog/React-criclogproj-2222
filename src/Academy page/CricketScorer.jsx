import React, { useState } from "react";

import scorer1 from "../Assests/Academy/scorer1.jpg"
import scorer2 from "../Assests/Academy/scorer2.jpg"
import scorer3 from "../Assests/Academy/scorer3.jpg"
import scorer4 from "../Assests/Academy/scorer4.jpg"
import scorer5 from "../Assests/Academy/scorer5.jpg"
import scorer6 from "../Assests/Academy/scorer6.jpg"
import scorer7 from "../Assests/Academy/scorer7.jpg"
import scorer8 from "../Assests/Academy/scorer8.jpg"
import scorer9 from "../Assests/Academy/scorer9.jpg"
import scorer10 from "../Assests/Academy/scorer10.jpg"


const Score = [
  { id: 1, name: "MALARAMPURIA", ScorerName: "Scorer | Hanumangarh" ,MatchesScored:"MatchesScored: 5383", rating: 5.3, reviews: 64,img: scorer1 },
  { id: 2, name: "Shaik Afridi", ScorerName: "Scorer | Bellary",MatchesScored:"MatchesScored: 4434" , rating: 5.4, reviews: 149 ,img: scorer2},
  { id: 3, name: "Karan Soni", ScorerName: " Scorer | Ahmedabad",MatchesScored:"MatchesScored: 4554", rating: 3.0, reviews: 185,img: scorer3},
  { id: 4, name: "Nirdosh Choudhary", ScorerName: "Scorer | Ganganagar",MatchesScored:"MatchesScored:6944" , rating: 4.7, reviews: 1333 ,img: scorer4},
  { id: 5, name: "Rahul 8082119743", ScorerName: "Scorer | Mumbai",MatchesScored:"MatchesScored: 3199" , rating: 3.5, reviews: 386 ,img: scorer5},
  { id: 6, name: "Tinku Haroli", ScorerName: "Scorer | Fatehabad (Haryana)",MatchesScored:"MatchesScored: 3315" , rating: 5.7, reviews: 617,img: scorer6 },
  { id: 7, name: "16umesh", ScorerName: "Scorer | Mumbai",MatchesScored:"MatchesScored: 3296 ", rating: 4.1, reviews: 43 ,img: scorer7},
  { id: 8, name: "Wasim AkramWasim Akram", ScorerName: "Scorer | Chennai",MatchesScored:"MatchesScored: 5297" , rating: 5.0, reviews: 1000,img: scorer8 },
  { id: 9, name: "Rupesh Bhabal 8850674575", ScorerName: "Scorer | Mumbai",MatchesScored:"MatchesScored:3289" , rating: 3.5, reviews: 22 ,img: scorer9},
  { id: 10, name: "Kushal Gawade", ScorerName: "Scorer | Mumbai",MatchesScored:"MatchesScored: 372" , rating: 2.0, reviews: 56 ,img: scorer10},
];

const CricketScorer = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Match Scorer</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Score.slice(0, visibleCount).map((Score) => (
            <div
              key={Score.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={Score.img}
                alt={Score.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {Score.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2 font-bold">{Score.MatchesScored}</p>
              <p className="text-gray-600 text-sm mb-2">{Score.ScorerName}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{Score.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{Score.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < Score.length && (
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
          
           <p>A lot of decisions depend upon how the scorers score the cricket matches. Scorekeeping can be complicated and simple at the same time. You need different skills to be a cricket scorer which includes having full understanding of umpire signals, knowing the names of all players and deep knowledge of how the scoresheet works. (Kind of the most important one!)</p>
           <br />
           <p>A lot of decisions depend upon how the scorers score the cricket matches. Scorekeeping can be complicated and simple at the same time. You need different skills to be a cricket scorer which includes having full understanding of umpire signals, knowing the names of all players and deep knowledge of how the scoresheet works. (Kind of the most important o</p>
         
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          How can you register as a Scorer on Criclog?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Download the Criclog App.</li>
            <li>User friendly online scoring on our Criclog App.</li>
            <li>Register yourself as a Scorer in Ecosystem  Scorer.</li>
            <li>Easily register your tournament on our platform.</li>
            <li>Fill in basic details of yourself along with your fees and pictures.</li>
            <li>Submit the details for review.</li>
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-4">
        How does the community of scorers benefit a player?
          </h2>
        <ul className="list-disc pl-8 space-y-2">
            <li>Promptly find Scorers near your location.</li>
            <li>Check their reviews and ratings.</li>
            <li>Check their previously scored matches.</li>
            <li>Check their per match fees and other details.</li>
            <li>Connect with them easily.</li>
          </ul>
          <br />
         <p>Criclog has more than 14K scorers registered across the globe who are scoring matches and have deep understanding of Criclog scoring.</p>
          <br />
         
      <p>We also provide training to Scorers who are willing to learn digital scoring on Criclog. You can contact us for the same.</p>
        </div>
       

      </section>
    </div>
  );
};

export default CricketScorer;
