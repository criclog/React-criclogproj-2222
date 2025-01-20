import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import cricketimg from "../Assests/cricket-match-with-player_23-2151702188.avif"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Criclogpro = () => {
  return (
    <div className="h-[250px] w-full bg-[#4A2EB0] py-[30px] text-white text-center">
      <h1 className="text-xl sm:text-2xl md:text-[34px] ">
        Criclog Pro
      </h1>
      <p className="m-3 text-sm sm:text-base md:text-[20px] py-5 ">
        Criclog Pro is the only membership you need as a cricketer. It helps you
        unlock your full potential and become a better version of yourself.
      </p>
      <button className="text-[12px] sm:text-[14px] md:text-[16px]  p-2 border-[1px] hover:scale-100 transition-all duration-500 cursor-pointer">
        BECOME PRO TODAY
      </button>
    </div>
  );
};


const ProPrivileges = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl sm:text-3xl font-serif text-[#4A2EB0] mb-8">Pro Privileges</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">

        {[
          {
            title: "CricInsights",
            description: "Improve your game like a PRO with the help of world-class insights.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/cricinsights.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing CricInsights feature",
          },
          {
            title: "Customized Themes",
            description: "Add your vibe to CricHeroes with unique themes.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/themes.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing customized themes feature",
          },
          {
            title: "Pro Club",
            description: "A club designed especially for CricHeroes Pro members.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/pro_club.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing Pro Club feature",
          },
          {
            title: "Store Discount",
            description: "Unlock an exclusive discount on CricHeroes store products. Go shop for your favourite jerseys now.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/tdr.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing store discount feature",
            footnote: "Exclusive discount on CricHeroes store products.",
          },
          {
            title: "No Ads",
            description: "No interruptions. Just you and your cricket. Browse the CricHeroes app and web ad-free.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/tdr.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing ad-free experience",
          },
          {
            title: "Live Streams",
            description: "FREE for 5 matches with Pro Infinity.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/live_stream.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing live streams feature",

          },
          {
            title: "Pro T-shirt",
            description: "*FREE with Pro Infinity Plan. Get an option to buy a t-shirt with a PRO Annum plan.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/pro_tshirt.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing Pro T-shirt feature",
            footnote: "*For India-based users only.",
          },
          {
            title: "Look for PRO Privileges",
            description: "Get even more from your membership.",
            imgSrc: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/pro_privileges.jpg?width=1920&quality=75&format=auto",
            imgAlt: "Image showcasing PRO Privileges feature",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#14212A] rounded-lg p-4 flex flex-col items-center relative h-[300px] w-full max-w-[300px]"
          >
            <h2 className="text-lg sm:text-xl text-white font-semibold mb-2">{card.title}</h2>
            <p className="text-[#93999E] text-center mb-4 text-sm sm:text-base">
              {card.description}
              {card.footnote && <span className="block text-xs text-white">{card.footnote}</span>}
            </p>
            <img
              src={card.imgSrc}
              alt={card.imgAlt}
              className="rounded-lg shadow-md h-[150px] w-[150px] bg-black absolute bottom-0"
            />
          </div>
        ))}
      </div>
    </div>


  );
};


export const Whycriclogsect = () => {
  const arr = [{ name: "Batting Analysis", para: "Unleash your true potential as a batsman by discovering your strengths and areas for improvement.", no: '01' }, { name: "Bowling Insights", para: " Uncover your true capabilities as a bowler and sharpen your skills.", no: '02' },
  { name: "Player Comparison", para: "Choose a player to measure yourself against in every aspect of the game.", no: '03' }, { name: "Match-Up Analysis", para: "Choose a player to evaluate your performance against them", no: '04' },
  { name: "Dynamic Match Analysis", para: "Adapt and excel with live insights to keep you at the top of your game.", no: '05' }
  ]
  const arr1 = [{ name: "Match Breakdown", para: "Understand the highs and lows of your last game to refine your strategy and skills.", no: '06' }, { name: "Pre-Match Analysis", para: "Study your opponent and craft a winning strategy ahead of the game.", no: '07' },
  { name: "Opponent Team Breakdown", para: "Evaluate the performance and strategies of your next rival team", no: '08' }, { name: "Squad Comparison", para: "Select a team to analyze how your team measures up in every area of the game.", no: '09' },
  { name: "Winning Tournament Strategy", para: "Gain deep insights into the tournament and plan your path to victory with expert strategies.", no: '10' }
  ]
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-10">
      <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#4D28D4] text-center">Why CricLog?</p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

        <div className="flex flex-col items-center gap-5 px-[20px]">
          {arr.map((value, id) => (
            <h1
              key={id}
              className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500"
            >
              <div className="flex-1 text-end">
                <p className="text-sm sm:text-base font-bold">{value.name}</p>
                <p className="text-xs sm:text-sm text-[#858484]">{value.para}</p>
              </div>
              <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.no}</p>
            </h1>
          ))}
        </div>


        <div>
          <img src=" https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/cricheroes_website_new/pro_page/pro-team-insights.png?width=1200&quality=100&format=auto " alt="Why CricLog" className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto rounded-md " />
        </div>


        <div className="flex flex-col items-center gap-5 px-[20px]">
          {arr1.map((value, id) => (
            <h1
              key={id}
              className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500"
            >
              <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.no}</p>
              <div className="flex-1 text-start">
                <p className="text-sm sm:text-base font-bold">{value.name}</p>
                <p className="text-xs sm:text-sm text-[#858484]">{value.para}</p>
              </div>
            </h1>
          ))}
        </div>
      </div>
    </div>

  )
}


const plans = [
  {
    feature: "CricInsights",
    app: true,
    appPlus: true,
  },
  {
    feature: "Customized Themes",
    app: true,
    appPlus: true,
  },
  {
    feature: "Pro Club",
    app: true,
    appPlus: true,
  },
  {
    feature: "Store Discount (*India Users Only)",
    app: true,
    appPlus: true,

  },
  {
    feature: "No Intrusive Ads",
    app: true,
    appPlus: true,
  },

  {
    feature: "Free Live Streams",
    app: false,
    appPlus: true,
  },
  {
    feature: "Pro T-shirt(*India Users Only)",
    app: false,
    appPlus: true,
  },

  {
    feature: "20+ Pro Privileges",
    app: true,
    appPlus: true,
  },

];

export const PricingTable = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 mb-6 px-4">
      <h2 className="text-2xl font-serif text-center mb-6 text-[#4A2EB0]">
        Choose Your Plan
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Features</th>
              <th className="px-4 py-2 text-center">
                Pro Annum <br />
                <span className="text-sm flex items-center justify-center">
                  <MdCurrencyRupee />
                  199
                </span>
              </th>
              <th className="px-4 py-2 text-center">
                Pro Infinity <br />
                <span className="text-sm flex items-center justify-center">
                  <MdCurrencyRupee />
                  2499</span>
              </th>

            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b`}
              >
                <td className="px-4 py-3 text-left font-medium">
                  {plan.feature}
                </td>
                <td className="px-4 py-3 text-center">
                  {plan.app ? "✓" : "x"}
                </td>
                <td className="px-4 py-3 text-center">
                  {plan.appPlus ? "✓" : "x"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};


export const Testimonials = () => {
  const testimonials = [
    {
      text: "Proud to be CricHeroes Pro member and big thanks to the team who have created this platform where we analyze our performance & take corrective steps.",
      name: "Tahir Hussain ",
      location: "New Delhi",
      image: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/pro-purchase-four/tahir_hussain.jpeg?width=96&quality=75&format=auto",
    },

    {
      text: "Loving this app, way to go! My game plan has certainly improved after using the insights from CricHeroes.",
      name: "Shobhit sinha",
      location: "Noida",
      image: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/pro-purchase-four/george_edward.jpg?width=96&quality=75&format=auto",
    },
    {
      text: "I used it for two years now. But it actually makes me think that is it worth the stats I am getting out of it.",
      name: "vickram",
      location: "Noida",
      image: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/pro-purchase-four/tahir_hussain.jpeg?width=96&quality=75&format=auto",
    }, {
      text: "PRO has been very helpful throughout the year. It has helped me become a better player as well as captain. For every match, we look into insights and make our strategy accordingly.",
      name: "Harshvardhan Sharma",
      location: "Gurugram",
      image: "https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/pro-purchase-four/dewank_pro.jpeg?width=96&quality=75&format=auto",
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "50px",
    adaptiveHeight: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-[#4A2EB0] py-10 px-4">
      <h2 className="text-center text-[white] text-2xl font-serif mb-8">Testimonials</h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#4A2EB0)] p-6  text-center"
            >
              <p className="text-white italic mb-6">"{testimonial.text}"</p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name} from ${testimonial.location}`}
                  className="rounded-full w-16 h-16 mb-4"
                />
                <p className="font-semibold text-white">
                  {testimonial.name} <span className="text-white">({testimonial.location})</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



export const CricNum = () => {
  return (
    <div className="w-full min-h-[400px] bg-[#ebeaf1] flex flex-col justify-center items-center  py-12 px-4 text-[black]">
    <h2 className="text-[20px] sm:text-[24px] md:text-[32px] font-serif text-center py-[40px]">
      CricLog in Numbers
    </h2>
    <div className="w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 md:divide-y-0 md:divide-x divide-[#bfbfc0]  text-[12px] sm:text-[14px] font-medium">
      <p className="text-center md:px-6 py-[10px] ">
        <span className="text-[20px] sm:text-[24px] md:text-[30px]  ">15th</span><br />
        <span className="text-[16px] sm:text-[18px] md:text-[22px] ">May 2019</span><br />
        First Match Scored
      </p>
      <p className="text-center md:px-6">
        <span className="text-[20px] sm:text-[24px] md:text-[30px] ">8M+</span><br />
        <span className="text-[16px] sm:text-[18px] md:text-[22px] ">MATCHES</span><br />
        Scored so far
      </p>
      <p className="text-center md:px-6">
        <span className="text-[20px] sm:text-[24px] md:text-[30px] ">540K+</span><br />
        <span className="text-[16px] sm:text-[18px] md:text-[22px] ">TOURNAMENTS</span><br />
        Covered so far
      </p>
      <p className="text-center md:px-6">
        <span className="text-[20px] sm:text-[24px] md:text-[30px] ">30M+</span><br />
        <span className="text-[16px] sm:text-[18px] md:text-[22px] ">PLAYERS</span><br />
        Registered so far
      </p>
    </div>
    <div className="w-[80%] sm:w-[90%] md:w-[75%] h-[1px] bg-[#bbbbbd] "></div>
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
      <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center py-[40px]">
        Become a Part of the World's Biggest Cricket Network.
      </p>
     <button className="text-[12px] sm:text-[14px] md:text-[16px] font-bold p-2 border border-black rounded-md hover:text-[#4D28D4] transition duration-200 ease-in-out">
        BECOME PRO TODAY
      </button>
    </div>
  </div>

  )
}


const CricBabaCarousel = () => {
  
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 p-4 py-[30px]">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Have you met CricBaba yet?
      </h2>

      <img src={cricketimg} className='w-[60%]' />
      
    </div>

  );
};

export const CricFooter = () => {
  return (
    <div className="bg-[#14212A] text-center flex flex-col justify-center items-center p-4  gap-2">

      <h1 className="text-[18px] md:text-2xl text-white font-light">
        Become a better cricketer. Become a <strong>CricLog Pro</strong>.
      </h1>

      <a href="" className=' text-[18px] md:text-2xl text-white font-light hover:text-[#00FFCF] '>Download The App Toay !</a>

    </div>
  );
};


export const Cricllog = () => {
  return (
    <div>
      <Criclogpro />
      <ProPrivileges />
      <Whycriclogsect />
      <PricingTable />
      <Testimonials />
      <CricNum />
      <CricBabaCarousel />
      < CricFooter />
    </div>
  );
};

