import React, { useState } from "react";

import academy from "../Assests/Academy/cricket.academy.jpg"
import academy1 from "../Assests/Academy/cricket.academy1.jpg"
import academy2 from "../Assests/Academy/cricket.academy2.jpg"
import academy3 from "../Assests/Academy/cricket.academy3.jpg"
import academy4 from "../Assests/Academy/cricket.academy4.jpg"
import academy5 from "../Assests/Academy/cricket.academy5.jpg"
import academy6 from "../Assests/Academy/cricket.academy6.jpg"
import academy7 from "../Assests/Academy/cricket.academy7.jpg"
import academy8 from "../Assests/Academy/cricket.academy8.jpg"
import academy9 from "../Assests/Academy/cricket.academy9.jpg"


const cricketAcademies = [
  {
    title: "A One Cricket Academy",
    location: "G 4 Shivlak Square Rampura Dindoli Surat, Gujarat, India",
    rating: 4.85,
    reviews: 5,
    img: academy,
  },
  {
    title: "Aradhya Cricket Academy",
    location: "Aradhya Cricket Academy, Kalol, Gujarat",
    rating: 4.85,
    reviews: 33,
    img: academy1,
  },
  {
    title: "ARAVALI CRICKET CLUB - JAIPUR",
    location: "XM6J+7G Halotad, Rajasthan, India",
    rating: 4.85,
    reviews: 23,
    img: academy2,
  },
  {
    title: "Sunrise Cricket Academy",
    location: "Sector 4, Gurgaon, Haryana, India",
    rating: 4.6,
    reviews: 18,
    img:academy3
  },
  {
    title: "Elite Cricket Club",
    location: "Himayat Nagar, Hyderabad, Telangana, India",
    rating: 4.7,
    reviews: 21,
    img:academy4,
  },
  {
    title: "Greenfield Cricket Academy",
    location: "Kodambakkam, Chennai, Tamil Nadu, India",
    rating: 4.8,
    reviews: 12,
    img: academy5,
  },
  {
    title: "Blue Star Cricket Academy",
    location: "Wakad, Pune, Maharashtra, India",
    rating: 4.75,
    reviews: 27,
    img: academy6,
  },
  {
    title: "Legends Cricket Academy",
    location: "Satellite Road, Ahmedabad, Gujarat, India",
    rating: 4.9,
    reviews: 45,
    img: academy7,
  },
  {
    title: "Future Stars Academy",
    location: "Bangalore, Karnataka, India",
    rating: 4.8,
    reviews: 30,
    img: academy8,
  },
  {
    title: "Pro Cricket Academy",
    location: "MG Road, Kochi, Kerala, India",
    rating: 4.65,
    reviews: 15,
    img: academy9,
  },
];

function Academies() {
  const [visibleCards, setVisibleCards] = useState(6); 

  const loadMore = () => {
    setVisibleCards((prev) => prev + 3); 
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="text-center py-4 bg-[#4A2EB0] text-white text-2xl font-bold">
        Cricket Academies
      </header>

      {/* Academy Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cricketAcademies.slice(0, visibleCards).map((academy, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={academy.img}
                alt={academy.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{academy.title}</h2>
                <p className="text-sm text-gray-700 mb-2">{academy.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">
                    ★ {academy.rating}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {academy.reviews} Review(s)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCards < cricketAcademies.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-[#4A2EB0] text-white px-4 py-2 rounded hover:bg-[#4A2EB0]transition"
            >
              Load More
            </button>
          </div>
        )}
        <br />
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Benefits of joining a Cricket Academy
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Improves your technical skills</li>
            <li>Instills leadership skills early in your career</li>
            <li>Enhances quick decision-making skills</li>
            <li>Provides maximum practice opportunities</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Academies;
