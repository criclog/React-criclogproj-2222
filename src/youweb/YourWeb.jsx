import React from 'react';
import { Link } from 'react-router-dom';


export const YourWeb = () => {
  return (
    <div>
      
      <div className=" min-h-100vh w-full bg-[#4A2EB0] py-[40px] md:py-[60px] text-white text-center">
        <h1 className="text-2xl md:text-[26px] font-bold">YOUR WEB FROM CRICSLOG</h1>
        <p className="mt-2 text-[18px]">Your League. Your Brand. Your Website</p>
      </div>

      
      <div className="px-4 md:px-6 lg:px-20">
        
        <h1 className="text-[#4A2EB0] font-bold text-3xl md:text-2xl text-center py-8">
          Introducing Your Web
        </h1>

        {[{ img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/own-your-brand-updated.png?width=750&quality=75&format=auto", title: 'Empower Your Brand', desc: 'Created to perfectly match your branding vision' },
          { img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/match-center-integration-updated.png?width=750&quality=75&format=auto", title: 'Live Match Centre', desc: 'Deliver live score updates and comprehensive league insights to your fans', reverse: true },
          { img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/publish-your-content-updated.png?width=750&quality=75&format=auto", title: 'Share Your Story', desc: 'Keep your audience engaged by delivering your message directly' },
          { img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/maximum-visibility-to-your-sponsors-updated.png?width=750&quality=75&format=auto", title: 'Delivering Value to Your Sponsors', desc: 'Your Web offers unrivaled visibility for your brand partners', reverse: true },
          { img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/social-media-integration-updated.png?width=750&quality=75&format=auto", title: 'Connect Your Social Channels', desc: 'Make it easy for your followers to engage with your social media' },
          { img: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/media-releases-and-news-updated.png?width=750&quality=75&format=auto", title: 'News & Announcements', desc: 'Keep your audience informed with the latest updates and events', reverse: true }].map((section, id) => (
          <div
            key={id}
            className={`flex flex-col-reverse md:flex-row ${
              section.reverse ? 'md:flex-row-reverse' : ''
            } items-center justify-between gap-4 md:gap-6 lg:gap-10 py-8`}
          >
            <img
              src={section.img}
              alt=""
              className="h-[150px] w-[250px] sm:h-[100px] sm:w-[250px] md:w-[250px] lg:h-[200px] lg:w-[320px] hover:scale-110 transition-all duration-500 cursor-pointer"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-[18px] md:text-[16px] lg:text-[20px]">{section.title}</h1>
              <h2 className="text-sm md:text-xs lg:text-base">{section.desc}</h2>
            </div>
          </div>
        ))}

       
        <div className="flex flex-col justify-center items-center py-8">
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-[#4A2EB0]">Proud Partners</h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-5">
            {["https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/wmcb.png?width=750&quality=75&format=auto", "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/cricket-canada.png?width=750&quality=75&format=auto", "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_web_landing/gtcc.png?width=750&quality=75&format=auto"].map((partner, idx) => (
              <img key={idx} src={partner} alt="" className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#14212A] w-full h-auto py-8 md:py-6 justify-center items-center gap-4">
          <h1 className="text-lg md:text-base lg:text-xl text-white text-center">
            Get Your Web with Your Branding now!
          </h1>
          <Link to={'/Contact'}> <button className="bg-[#4A2EB0] text-white px-3 py-2 md:px-4 md:py-2 rounded-md w-[120px] md:w-[150px]">
          Contact Us
          </button></Link>
        </div>


    </div>
  );
};


