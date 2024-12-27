import React, { useState } from "react";

import shop1 from "../Assests/Academy/shop1.jpg"
import shop2 from "../Assests/Academy/shop2.jpg"
import shop3 from "../Assests/Academy/shop3.jpg"
import shop4 from "../Assests/Academy/shop4.jpg"
import shop5 from "../Assests/Academy/shop5.jpg"
import shop6 from "../Assests/Academy/shop6.jpg"
import shop7 from "../Assests/Academy/shop7.jpg"
import shop8 from "../Assests/Academy/shop8.jpg"
import shop9 from "../Assests/Academy/shop9.jpg"
import shop10 from "../Assests/Academy/shop10.jpg"


const shops = [
  { id: 1, name: "CHAMPS SPORTS", location: "11, VIVEK COMPLEX, OPP. NAVJIVAN RESTAURANT, NR. VANIYAVAD CIRCLE, NADIAD", rating: 4.3, reviews: 9,img: shop1 },
  { id: 2, name: "DA SPORTZ", location: "Gaur City Sports Complex E Block, E Block, Gaur City 1, Sector 4, Greater Noida, Uttar Pradesh 201009, India", rating: 5.4, reviews: 19,img: shop2 },
  { id: 3, name: "SPORTS SPIRIT", location: "147, 1st floor Sarojamma Complex, Sarjapura Main Road, Kaikondahalli, Bengaluru, 560035, Karnataka, India", rating: 5.0, reviews: 15 ,img: shop3},
  { id: 4, name: "The Sports Factory", location: " Krishnarajapura, Bengaluru, Karnataka 560067, India", rating: 4.7, reviews: 33,img: shop4 },
  { id: 5, name: "S R SPORTS", location: "Lakhipur Gara Ghat , PO- Lakhipur, Dist- Goalpara (Assam)", rating: 8.1, reviews: 16,img: shop5 },
  { id: 6, name: "10 SPORTS", location: "mahindra showroom Maharashtra 400080", rating: 2.7, reviews: 17,img: shop6 },
  { id: 7, name: "10 Sports", location: "Vaiyapuri Nagar, Ganesha Nagar, Renganayaki Puram, Karur, Tamil Nadu 639002, India", rating: 9.1, reviews: 43,img: shop7 },
  { id: 8, name: "19 Sport", location: "Shop No. 3, Krishna Nagar Shopping Complex", rating: 0.0, reviews: 9,img: shop8 },
  { id: 9, name: "1AAL SPORTSAAL", location: "No -17 dharmaraja kovil street Saidapet railway station Saidapet", rating: 3.5, reviews: 22 ,img: shop9},
  { id: 10, name: "22 Yards Sports Shop", location: "Bengaluru, Karnataka", rating: 4.0, reviews: 5 ,img: shop10,},
];

const ShopsCards = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Cricket Shops</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shops.slice(0, visibleCount).map((shops) => (
            <div
              key={shops.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 transform hover:scale-105  duration-300"
            >
              {/* Placeholder for Image */}
              <img
                src={shops.img}
                alt={shops.title}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />


              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {shops.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{shops.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{shops.rating} ⭐</span>
                <span className="text-gray-500 text-sm">{shops.reviews} Review(s)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < shops.length && (
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
          
           <p>With millions of registered cricketers, CricCriclog is the ultimate destination to promote your cricket shop for free and get more business. Shop owners now have the opportunity to connect with their core audience directly for free and at the same time, players will have a one stop shop for their cricket needs. So what are you waiting for? Set up your Cricket Shop today on the CricCriclog App for free!</p>
         
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          How can you register your Cricket Shop on Criclog?
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Download the CricCriclog App.</li>
            <li>Register your shop in Ecosystem  Shops.</li>
            <li>Fill in basic details of your shop along with address and pictures.</li>
            <li>Submit the details for review.</li>
            <li>See your Cricket Shop in the Ecosystem in a few days.</li>
            <li>Get more business, instantly!</li>
          </ul>
        </div>
        <br />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">
          For Cricket Professionals and Businesses:
          </h2>
          <br />
          <ul className="list-disc pl-8 space-y-2">
            <li>Find cricket shops, cricket grounds and cricket academies near you.</li>
            <li>List yourself as a scorer, umpire or commentator for free and get more matches to officiate.
            </li>
            <li>List your cricket business for free and get more visibility instantly.
            
            </li>
            <li>Score your tournaments on CricCriclog and get a unique Tournament Organiser Profile.

            </li>
            <li>Find professional streamers who will live stream your cricket matches.

            </li>
            <li>List your Cricket Ground and Cricket Academies and get more students. </li>
            
          </ul>
          <br />
          <p>So what are you waiting for? If you are connected with grassroots cricket in any way, CricCriclog Ecosystem is the ultimate place to be. Download the App now.</p>
        </div>
       

      </section>
    </div>
  );
};

export default ShopsCards;
