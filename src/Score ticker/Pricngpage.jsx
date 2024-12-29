// src/App.js
import React from "react";

const PricingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8">How's it Priced?</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Pricing Card */}
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg font-bold">1 or More Matches</h2>
          <p className="text-4xl font-semibold mt-4">$5</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg font-bold">One Day Plan</h2>
          <p className="text-4xl font-semibold mt-4">$30</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60 relative">
          <span className="absolute top-0 -translate-y-1/2 px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
            Recommended
          </span>
          <h2 className="text-lg font-bold">Monthly Plan</h2>
          <p className="text-4xl font-semibold mt-4">$75</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg font-bold">Monthly Premium Plan</h2>
          <p className="text-4xl font-semibold mt-4">$124.99</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg font-bold">Yearly Plan</h2>
          <p className="text-4xl font-semibold mt-4">$299</p>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md w-60">
          <h2 className="text-lg font-bold">Premium Plan</h2>
          <p className="text-4xl font-semibold mt-4">$399</p>
          <p className="text-sm mt-2">*For unlimited Matches</p>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-[#4A2EB0] text-white rounded-lg hover:bg-blue-500">
        PURCHASE SCORE TICKER
      </button>
    </div>
  );
};

export default PricingPage;