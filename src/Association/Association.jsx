import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import imgcric from "../Assests/association/img.jpg";
import image10 from "../Assests/association/img8.jpg"; 
import image1 from "../Assests/association/img 1.png";
import image2 from "../Assests/association/img 2.png";
import image3 from "../Assests/association/img 3.jpg";
import image4 from "../Assests/association/img 4.jpg";
import image6 from "../Assests/association/img 6.png";


export const Landimg = () => {
  return (
    <div className="w-full min-h-100vh bg-[#4A2EB0]  flex flex-col py-[40px] gap-[10px] sm:px-[25px] px-[20px]">
      <p className=" text-white text-center md:text-[26px] text-[16px] sm:text-[18px]  lg:text-[32px] lg:pl-[20px]">
        Ultimate Tech Platform for Cricket Associations
      </p>
      <p className="w-full font-light text-white text-center text-[12px] sm:text-[15px] lg:text-[18px]">
        Built by cricketers, for cricketers, Criclog is dedicated to revolutionizing domestic cricket.
        Our unwavering commitment to the sport has made us a trusted platform for Cricket Associations globally.
      </p>
    </div>
  );
};


export const Scrollimg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [image1, image2, image3, image4, image6];

  return (<>
    <div className="w-full bg-white font-serif">
      <div className="text-center pt-5 px-4">
        <p className="font-serif  text-[16px] sm:text-[22px] md:text-[26px] lg:text-[30px]">
          PROUD ASSOCIATIONS
        </p>
        <div className="md:w-[15%] w-[20%] border-[3px] sm:border-[4px] border-[#4A2EB0] rounded-[6px] mx-auto my-2"></div>
        <div className="w-[80%] sm:w-[70%] mx-auto my-10">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt=""
                  className="w-[70px] sm:w-[140px] h-[70px] sm:h-[140px] object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr className="w-[90%] mx-auto my-6 border-t-[1px] border-gray-400" />
    </div>
    <div className="w-full flex flex-col items-center pt-5 px-4">
    <p className="text-center font-serif font-medium text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px]">
      Stats don't lie!
    </p>
    <div className="w-[150px] sm:w-[120px]  border-[4px] border-[#4A2EB0] rounded-[6px] my-2 lg:w-[120px]"></div>

    <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[65%] lg:w-[77%] mx-auto gap-8 md:gap-12 min-h-[50vh]">
      <div className="flex flex-col items-center md:items-start ">
        <p className="text-[40px] sm:text-[50px] lg:text-[60px] md:text-[40px]  font-bold text-[#4A2EB0]">
          40
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[26px] font-medium">
          ICC
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-[40px] sm:text-[50px] lg:text-[60px]  md:text-[40px] font-bold text-[#4A2EB0]">
          20
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[26px] font-medium">
          BCC
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold md:text-[40px] text-[#4A2EB0]">
          140
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[26px]  font-medium">
          District
        </p>
      </div>
    </div>

    <Link to={"/icc"}><button className="w-[250px]  bg-[#4A2EB0] my-8  text-white text-[14px] md:text-[16px] lg:text-[18px] lg:w-[350px] lg:py-3 rounded-[5px] px-3 py-4 cursor-pointer">
      VIEW ALL ASSOCIATIONS
    </button></Link>
  </div>
</>
  );
};

  

export const Adv = () => {
  return (
    <div className=" w-min-100vh min-h-[100vh] relative overflow-hidden font-serif md:h-[600px] my-[20px]">
      <img
        src={image10}
        alt=""
        className="w-full min-h-[100vh] flex justify-center items-center blur-[2px] opacity-80 overflow-hidden absolute md:h-[600px] "
      />
      <p className="w-full flex flex-col justify-center items-center font-serif  absolute text-black text-[20px] sm:text-[24px]  px-[10px] text-center top-[10px] md:text-[28px] lg:text-[32px]">
        One platform to rule them all
        </p>
      <p className="w-full flex justify-center items-center font-medium text-black text-[13px] my-[90px] px-4 absolute  md:text-[20px] sm:my-[70px] md:px-[120px] lg:my-[70px]  ">
        Criclog is the all-in-one solution for Cricket Associations,
        streamlining the management of leagues, clubs, teams, players, officials, and grounds.
      </p>
    
      <img
        src={imgcric}
        alt=""
        className="w-full min-h-[95vh] flex justify-center items-center absolute top-[100px] md:w-[700px] md:h-[500px] md:mx-9 lg:w-full"
      />
    </div>
  )
};



export const Ourproduct = () => {
  const forms = [
    {
      title: "League Management",
      description:
        "Manage your Tournaments, Matches and Player Profiles, easily & effectively.",
      free: true,
      premium: true,
    },
    {
      title: "Live scoring",
      description:
        "Ball-by-Ball update of every match for your fans, friends & family.",
      free: true,
      premium: true,
    },
    {
      title: "Website integration",
      description: "Seamless integration of match centre on your website.",
      free: true,
      premium: true,
    },
    {
      title: "Support",
      description:
        "Providing you with continuous support, anytime, everywhere!",
      free: true,
      premium: true,
    },
    {
      title: "Officials & Ground management",
      description: "Coherent management of all official and ground needs.",
      free: false,
      premium: true,
    },
    {
      title: "Your App",
      description: "Personalized mobile app to promote your brand, your way.",
      free: false,
      premium: true,
    },
    {
      title: "Your Web (Personalised website)",
      description: "Personalized website for your business with your branding.",
      free: false,
      premium: true,
    },
    {
      title: "Live Streaming",
      description: "Treat your online audience and drive engagement.",
      free: true,
      premium: true,
    },
    {
      title: "Super Sponsor",
      description: "Provide mileage to your supportive sponsors.",
      free: false,
      premium: true,
    },
    {
      title: "CricInsights",
      description: "In-depth analysis of your player statistics.",
      free: false,
      premium: true,
    },
    {
      title: "WebInsights",
      description:
        "In-depth analysis of players for better selection and apt coaching.",
      free: true,
      premium: true,
    },
  ];

  return (

    <div className="w-full min-h-[100vh] font-serif">
    <p className=" text-[16px] font-medium text-center mx-auto sm:text-[20px] md:text-[24px] lg:text-[28px]">
      OUR PRODUCTS
    </p>
    <div className="md:w-[10%] w-[15%] border-[3px] sm:border-[4px] border-[#4A2EB0] rounded-[6px] mx-auto my-2"></div>

  
    <div className="flex justify-center items-center my-8 ">
      <table className="w-[10%] min-h-[100vh] border-collapse border border-gray-300 sm:w-[70%] md:w-[70%] lg:w-[80%]">
        <thead>
          <tr className="bg-[#4A2EB0] text-white">
            <th className="py-3 px-4 text-left">PRODUCTS</th>
            <th className="py-3 px-4 text-center">FREE</th>
            <th className="py-3 px-4 text-center">PREMIUM</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-200 transition"
            >
              <td className="py-4 px-4 text-gray-800 text-[16px] sm:text-[20px] font-semibold">
                <p>{form.title}</p>
                <p className="text-gray-600 text-sm">{form.description}</p>
              </td>
  
              <td className="py-4 px-4 text-center">
                {form.free ? (
                  <span className="text-green-500 text-xl font-bold">
                    &#10003;
                  </span>
                ) : (
                  <span className="text-red-500 text-xl font-bold">
                    &#10007;
                  </span>
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {form.premium ? (
                  <span className="text-green-500 text-xl font-bold">
                    &#10003;
                  </span>
                ) : (
                  <span className="text-red-500 text-xl font-bold">
                    &#10007;
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    <p className="w-[40%] h-[50px] sm:w-[50%] sm:text-[16px] md:w-[40%]  lg:w-[30%]  bg-[#4A2EB0] text-center mx-auto my-6 py-3 text-white text-[12px] rounded-[5px]  cursor-pointer ">
      CONTACT US TO KNOW MORE
    </p>
  </div>
  
  
  );
};


export const Details = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const details = [
    {
      name: "Eswatini Cricket",
      history:
        "The online scoring application by Criclog has brought a lot of benefits to Eswatini Cricket.",
      author: "Mandla S. Dlamini",
      position: "Office Administrator",
    },
    {
      name: "Rwanda Cricket Association",
      history:
        "For the past one year Rwanda cricket has been using Criclog as our official scoring App for our domestic league, school's competitions, junior leagues, and some international games that have been hosted in Rwanda.",
      author: "Emmanuel BYIRINGIRO",
      position: "General Manager",
    },
    {
      name: "Twenty20 Community Cricket",
      history:
        "We moved over to Criclog in the summer of 2020 having tried several other scoring and data applications in the past.",
      author: "Darren Talbot",
      position: "Managing Director",
    },
    
    {
      name: "Sierra Leone Cricket Association",
      history:
        "The partnership with Criclog has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via Criclog.",
      author: "Mr. Francis Samura",
      position: "CEO",
    },
  ];

  return (

    <div className="w-full min-h-[100vh] font-serif py-5">
    <p className=" text-[16px] font-medium text-center mx-auto  sm:text-[20px] md:text-[24px] lg:text-[28px]">
    Don't listen to us, listen to them!
    </p>
    <div className="w-[15%] md:w-[10%]  border-[3px] sm:border-[4px] border-[#4A2EB0] rounded-[6px] mx-auto my-2"></div>

      <div className="w-full flex justify-center px-[30px] sm:px-[100px] ">
        <div className="w-[100%] sm:w-[50%] md:w-[60%] lg:w-[60%]  min-h-[100vh] grid grid-cols-1 my-5 bg-white rounded-[4px] shadow-md text-center py-[20px] px-5 ">
          <Slider {...setting}>
            {details.map((det, id) => (
              <div
                key={id}
              >
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] py-3 font-semibold ">
                  {det.name}
                </p>
                <p className="text-[14px] sm:text-[16px] text-gray-600 px-[50px]">
                  {det.history}
                </p>
                <div className="py-[40px]">
                  <p className="text-[16px] sm:text-[20px] font-medium">
                    {det.author}
                  </p>
                  <p className="text-[14px] sm:text-[16px] text-gray-500">
                    {det.position}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Link to={"/assoication/member-assoication"}>
      <p className="w-[20%] h-[40px] sm:w-[20%] sm:text-[16px] md:w-[15%]  lg:w-[10%]  bg-[#4A2EB0] text-center mx-auto my-[50px] py-2 text-white text-[14px] rounded-[5px]  cursor-pointer ">
 READ
    </p>
      </Link>
    </div>
  );
};

export const Lastus = () => {
  return (
    <div className="w-full h-[10%] bg-black font-serif py-3">
 
  <p className=" text-[16px] text-white  text-center mx-auto  sm:text-[20px] md:text-[24px] lg:text-[28px]">
  Let's make Cricket better for everyone.
    </p>
  <p className="w-[25%] h-[40px] sm:w-[20%] sm:text-[16px] md:w-[15%]  lg:w-[13%]  bg-[#4A2EB0] text-center mx-auto my-6 py-2 text-white text-[14px] rounded-[5px]  cursor-pointer ">
  CONTACT US
    </p>
</div>

  
  )
};

const Association = () => {
  return (
    <div className="w-full h-screen bg-white  ">
      <div>
        <Landimg />
      </div>
      <div>
        <Scrollimg />
      </div>
      <div>
        <Adv />
      </div>
      <div>
        <Ourproduct />
      </div>
      <div>
        <Details />
      </div>
      <div>
        <Lastus />
      </div>
    </div>
  )
};
export default Association;
