import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cric1 from '../Assests/organization/img1.jpg'
import cric2 from '../Assests/organization/img2.jpg'
import cric3 from '../Assests/organization/img3.jpg'
import cric4 from '../Assests/organization/img4.jpg'
import cric5 from '../Assests/organization/img5.jpg'

const Scrollimg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Tablets and smaller screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { image: cric1 },
    { image: cric2 },
    { image: cric3 },
    { image: cric4 },
    { image: cric5 },
  ];

  return (
    <div className="w-full bg-white font-serif py-10">
      <p className="text-center font-serif font-semibold text-3xl md:text-4xl mb-8">
        BCCI Associations on CricHeroes
      </p>
      <div className="w-full sm:px-[80px] px-[40px] lg:px-[150px]">
        <Slider {...settings}>
          {images.map((pic, id) => (
            <div key={id} className="flex justify-center">
              <img
                src={pic.image}
                alt={pic.alt}
                className="w-40 h-44 md:w-52 md:h-56 object-cover rounded-lg "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Scrollimg;