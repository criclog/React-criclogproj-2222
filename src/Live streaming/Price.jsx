import React, { useState } from "react";
import phone from "../Assests/goodphone (1).png";
import wifi from "../Assests/4gwifi.png";
import powerbank from "../Assests/powerbank.png";
import tripod from "../Assests/tripod.png";
import { IoIosArrowDown } from "react-icons/io";

const MainCompontent = () => {
  return (
    <div className="relative w-full h-auto bg-black text-white py-10 px-4">
      <h1 className="text-2xl sm:text-3xl flex justify-center mb-6">
        Subscription Priced?
      </h1>
      <Price />
      <h2 className="mt-10 text-center text-xl sm:text-2xl">
        *Stream unlimited matches in Daily, Monthly, Yearly Plans
      </h2>
      <div className="flex justify-center mt-8">
        <button className="bg-[#4A2EB0] text-white font-medium px-6 py-2 rounded hover:bg-white hover:text-black transition">
          PURCHASE LIVE STREAM
        </button>
      </div>
    </div>
  );
};

const Cards = ({ data }) => {
  const { title, price } = data ?? {};
  return (
    <div className="bg-gray-900 w-full max-w-[220px] h-[150px] flex flex-col justify-center items-center rounded shadow-lg">
      <h1 className="font-bold text-lg">{title}</h1>
      <h2 className="text-xl mt-2">{price}</h2>
    </div>
  );
};

const Price = () => {
  const cardsData = [
    { title: "Per Match", price: "₹ 269" },
    { title: "One Day Plan", price: "₹ 1299" },
    { title: "Monthly Plan", price: "₹ 4499" },
    { title: "Monthly Premium", price: "₹ 6000" },
    { title: "Yearly Plan", price: "₹ 11999" },
    { title: "Premium Match", price: "₹ 14999" },
  ];

  return (
    <div className="grid grid-cols-sm:grid-cols-3 items-center  lg:grid-cols-6 gap-6 justify-center mt-6">
      {cardsData.map((card, index) => (
        <Cards key={index} data={card} />
      ))}
    </div>
  );
};

// Icons Component
export const Icons = () => {
  const items = [
    { title: "Quality Phone Camera", image: phone },
    { title: "4G WiFi", image: wifi },
    { title: "Power Bank", image: powerbank },
    { title: "Tripod", image: tripod },
  ];

  return (
    <div className="mt-12 px-4">
      <h1 className="text-2xl font-bold text-center text-[#4A2EB0] mb-8">
        What do you need?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-300 rounded shadow-lg p-6 flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
            <img src={item.image} alt={item.title} className="w-[80px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Video Component
export const Video = () => {
  return (
    <div className="w-full bg-white py-10 flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">
        Example criclog Live Streams
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pGvp5Q-1Yag?si=NRezOMRobtOz7Xvy"
        title="YouTube video player"
        className="w-full max-w-[560px] aspect-video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// FAQ Component
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I purchase criclog Live Streaming in advance for my match?",
      answer:
        "Yes, absolutely. In fact, we recommend it. Just schedule your match and purchase criclog Live Stream for that. You can do actual live streaming whenever the match starts.",
    },
    {
      question: "What do I need for quality live streaming?",
      answer:
        "To get the best quality, you need a stable internet connection, a good camera phone, and proper lighting conditions.",
    },
    {
      question: "Can I use more than one camera phone for criclog live streaming?",
      answer: "Currently, criclog supports only one camera phone for live streaming at a time.",
    },
    {
      question: "Which phones will give the best result for live streaming?",
      answer:
        "High-end smartphones with better cameras and processors, like iPhones and flagship Android devices, give the best results.",
    },
    {
      question: "Can we Live Stream the match on our own YouTube channel?",
      answer: "No, criclog streams matches to their designated platform only.",
    },
    {
      question: "On which YouTube channel can I see my match?",
      answer: "You can watch your match on the official criclog YouTube channel.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-3xl  text-center text-[#4a2be0] mb-8">FAQ</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded shadow-md">
            <button
              className="w-full text-left flex justify-between items-center px-4 py-3 text-gray-700 font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 bg-gray-50 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCompontent;
