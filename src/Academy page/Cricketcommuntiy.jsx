import React from "react";
import { Link } from "react-router-dom";

import academy from "../Assests/academy.jpg";
import ground from "../Assests/ground.jpg";
import shop from "../Assests/shop.jpg";
import organiser from "../Assests/organiser.jpg";
import scorer from "../Assests/scorer.jpg";
import umpire from "../Assests/umpire.jpg";
import commentator from "../Assests/commentator.jpg";
import streamer from "../Assests/streamer.jpg";
import tshirt from "../Assests/tshirt-vendor.jpg";
import trophy from "../Assests/trophy-vendor.jpg";
import bat from "../Assests/bat-manufacturer.jpg";
import physio from "../Assests/physio-trainer.jpg";
import personal from "../Assests/personal-coaching.jpg";
import box from "../Assests/box-cricket.jpg";
import { Homenumbersect } from "../Homesection/Homesect";

const CricketCommunity = () => {
  const services = [
    { id: 0, name: "Academies", image: academy, path: "academies" },
    { id: 1, name: "Grounds", image: ground, path: "cricket/grounds" },
    { id: 2, name: "Shops", image: shop, path: "cricket/shops" },
    {
      id: 3,
      name: "Organisers",
      image: organiser,
      path: "tournament/organisers",
    },
    { id: 4, name: "Scorers", image: scorer, path: "cricket/scorers" },
    { id: 5, name: "Umpires", image: umpire, path: "cricket/umpire" },
    {
      id: 6,
      name: "Commentators",
      image: commentator,
      path: "cricket/commentator",
    },
    { id: 7, name: "Streamers", image: streamer, path: "criclog/live" },
    {
      id: 8,
      name: "T-shirt Vendors",
      image: tshirt,
      path: "cricket/t-shirt-and-jersey",
    },
    { id: 9, name: "Trophy Vendors", image: trophy, path: "cricket/trophy" },
    { id: 10, name: "Bat Manufacturers", image: bat, path: "cricket/bat" },
    {
      id: 11,
      name: "Physio and Fitness Trainer",
      image: physio,
      path: "cricket/physiotherapist",
    },
    {
      id: 12,
      name: "Personal Coaching",
      image: personal,
      path: "cricket/coach",
    },
    {
      id: 13,
      name: "Box Cricket & Nets",
      image: box,
      path: "cricket/indoor-nets",
    },
  ];

  return (
  <div>
    <div className="bg-[#4A2EB0] text-white text-center p-10 flex items-center justify-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold mb-5">Cricket Community</h1>
        <p className="text-lg mb-8">
          Explore and connect with the people, who make grassroots Cricket
          possible.
        </p>
        <button className="bg-transparent text-white border-2 border-white px-6 py-2 text-lg hover:bg-white hover:text-[#4A2EB0] transition duration-300">
          REGISTER NOW
        </button>
      </div>
    </div>

    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10 md:px-[150px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-md h-[200px] w-full max-w-[200px] mx-auto cursor-pointer rounded-lg overflow-hidden border-x-slate-950"
          >
            <img
              src={service.image}
              alt={service.name}
              className="h-[115px] w-[120px] mx-auto mt-6 object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            <Link to={`/${service.path}/${service.id}`}>
              <div className="absolute inset-0 bg-blue-300 bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
              <h3 className="text-lg text-[#4A2EB0] ps-[35px] font-semibold relative top-[70px] right-[12px] ">
               {service.name} <br />
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Homenumbersect/>
  </div>
);
}

export default CricketCommunity;
