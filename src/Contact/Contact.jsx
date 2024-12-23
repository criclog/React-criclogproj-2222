import React from "react";

const Contact = () => {
  return (
<div className="w-full">
  
  <div className="bg-[#4A2EB0] py-10 text-white text-center">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p className="mt-2 text-sm">
      Need help? Tell us more and we'll be happy to assist you.
    </p>
  </div>


  <div className="flex flex-wrap justify-center items-center p-8 gap-8 sm:flex-col md:flex-row">
   
    <div className="bg-[#F7F7F7] w-[300px] sm:w-full md:w-[300px] shadow-md p-4 text-center rounded-md">
      <h2 className="font-bold text-lg mb-2">Association</h2>
      <p className="text-sm mb-4">For partnering with us</p>
      <p className="text-gray-600">partners@criclog.in</p>
      <p className="text-gray-600 mb-4">+91 7961810801</p>
      <button className="bg-[#4A2EB0] text-white px-4 py-2 rounded-md hover:bg-[#4a2eb0cb]">
        BOOK A DEMO
      </button>
    </div>

  
    <div className="bg-[#F7F7F7] w-[300px] sm:w-full md:w-[300px] shadow-md p-4 text-center rounded-md">
      <h2 className="font-bold text-lg mb-2">Support</h2>
      <p className="text-sm mb-4">For player queries</p>
      <p className="text-gray-600">support@criclog.in</p>
      <p className="text-gray-600 mb-4">+91 8141665555</p>
      <button className="bg-[#4A2EB0] text-white px-4 py-2 rounded-md hover:bg-[#4a2eb0cb]">
        WHATSAPP
      </button>
    </div>

  
    <div className="bg-[#F7F7F7] w-[300px] sm:w-full md:w-[300px] shadow-md p-4 text-center rounded-md">
      <h2 className="font-bold text-lg mb-2">Sales</h2>
      <p className="text-sm mb-4">For value-added services</p>
      <p className="text-gray-600">sales@criclog.in</p>
      <p className="text-gray-600 mb-4">+91 8141665523</p>
      <button className="bg-[#4A2EB0] text-white px-4 py-2 rounded-md hover:bg-[#4a2eb0cb]">
        REACH OUT
      </button>
    </div>
  </div>

  <div className="bg-[#4a2eb08a] py-5 text-center">
    <h2 className="font-bold text-2xl mb-4 text-gray-800">
      We want you to Grow With Us!
    </h2>
    <p className="text-gray-700 mb-6 px-6">
      At CricHeroes, we are building a culture where passionate people (like
      you) can grow.
    </p>
    <button className="bg-[#4A2EB0] text-white px-4 py-2 rounded-md hover:bg-[#4a2eb0cb]">
      SEE ALL OPEN POSITIONS
    </button>
  </div>

 
  <div className="bg-gray-900 text-white text-center py-4 text-sm">
    <p>
      TFL (3rd Floor) Zion Z1, Nr. Avalon Hotel, Sindhu Bhavan Road,
      Bodakdev, Ahmedabad, Gujarat - 380054.
    </p>
  </div>
</div>

  );
};

export default Contact;
