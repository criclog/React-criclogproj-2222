import React from 'react';
import ScoreTickerheder from './ScoretickerHeder';
import imgaimation from '../Assests/Scoreticketer/fullscorecard5.gif'
import { Link } from 'react-router-dom';

export const ScoreTickerPage = () => {
  return (
    <div>
        <ScoreTickerheder/>
    <div className="bg-gray-100 text-gray-800">
        
      {/* Header Section */}
      <div className="flex justify-center items-center py-8">
        <img
          src={imgaimation}
          alt="Cricket"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-4 mx-4">
        {[
          'Four',
          'Six',
          'Wicket',
          'Match Preview',
          'Toss Details',
          'Playing XI',
          'Striker Batter Profile',
          'Match Summary',
          'Player of the Match',
          'Current Partnership',
          'Striker Batter Match Score',
          'Bottom Ticker',
          'Batting Scorecard',
          'Bowling Scorecard',
          'Partnership',
          'Runs Needed',
          'Last Out Batter Stats',
          'Batting Leaderboard',
          'Bowling Leaderboard',
          'Fielding Leaderboard',
          'Boundary Leaderboard',
          'Upcoming Match List',
          'Past Match List',
        ].map((tag) => (
          <span
            key={tag}
            className="bg-[#755fc5] text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#4A2EB0]"
          >
            {tag}
          </span>
        ))}
      </div>
      

      {/* Integration Section */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-[#4A2EB0]">
          How to integrate Score Ticker in your Live Stream software?
        </h2>
        <div className="mt-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sample-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <h3 className="text-xl font-medium">
            Purchase a Score Ticker today!
          </h3>
         <Link to={'/Contact'}> <button className="mt-4 px-6 py-2 bg-[#4A2EB0]  rounded-lg text-white text-lg hover:bg-white hover:text-[#4A2EB0] transition duration-300">
            Contact us
          </button></Link>
        </div>
      </footer>
    </div>
    </div>
  );
};


