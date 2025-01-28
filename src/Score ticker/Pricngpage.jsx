// src/App.js
import React from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-[28px]  mb-8">How's it Priced?</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Pricing Card */}
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg ">1 or More Matches</h2>
          <p className="text-[28px] mt-4">$5</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg ">One Day Plan</h2>
          <p className="text-[28px] mt-4">$30</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60 relative">
          <span className="absolute top-0 -translate-y-1/2 px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
            Recommended
          </span>
          <h2 className="text-lg ">Monthly Plan</h2>
          <p className="text-[28px] mt-4">$75</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg ">Monthly Premium Plan</h2>
          <p className="text-[28px] mt-4">$124.99</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg ">Yearly Plan</h2>
          <p className="text-[28px] mt-4">$299</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg ">Premium Plan</h2>
          <p className="text-[28px]  mt-4">$399</p>
          <p className="text-sm mt-2">*For unlimited Matches</p>
        </div>
      </div>
      <Link to={'/Login'}><button className="bg-[#4A2EB0] text-white font-medium px-6 py-2 mt-10 rounded hover:bg-white hover:text-black transition">
          PURCHASE LIVE STREAM
        </button></Link>
    </div>
  );
};

export default PricingPage;