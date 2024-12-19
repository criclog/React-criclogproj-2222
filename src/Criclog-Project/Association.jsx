import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'



import imgcric from '../Assests/img.jpg'
import image10 from '../Assests/img8.jpg'

import image1 from '../Assests/img 1.png'
import image2 from '../Assests/img 2.png'
import image3 from '../Assests/img 3.jpg'
import image4 from '../Assests/img 4.jpg'

import image6 from '../Assests/img 6.png'





export const Landimg=()=>{
  return(
    <div className='w-full h-[250px] bg-[#4A2EB0] font-serif '>
    <p className=' w-full h-[110px]  font-extrabold  text-white text-[34px] pl-[260px] pt-[60px]'>Ultimate Tech Platform for Cricket Associations</p>
    <p className='w-full font-light text-white text-[20px] pl-[150px] '>Built by cricketers, for cricketers, Criclog is dedicated to revolutionizing domestic cricket. Our unwavering commitment to </p>
      <span className=' w-full  font-light text-white text-[20px] pl-[400px] '> sport has made us a trusted platform for Cricket Associations globally</span>.
     </div>
  )
}

export const Scrollimg = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const Image = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image6 },
    
  ];

  return (
  <div className='w-full h-[900px] bg-white font-serif'>
    <p className='w-full flex justify-center font-serif font-semibold pt-5 text-[44px]'>PROUD ASSOCIATIONS</p>
     <div className='w-[200px] border-[5px] border-[#4A2EB0] rounded-[6px] mx-auto'></div>

      <div className='w-[100%] my-[80px] px-[100px] gap-[20px] '>
          <Slider {...settings}>
            {Image.map((pic, id) => (
              <div key={id}  >
                <img src={pic.image} alt='' className='w-[170px] h-[180px] gap-[50px] object-cover'/>
              </div>
            ))}
          </Slider>
        </div>
    
      <hr className='w-[90%] ml-[100px]' />
      <div>
       <p  className="w-full flex justify-center font-serif font-semibold pt-5 text-[44px]">Stats don't lie!</p>
       <div className='w-[200px] border-[5px] border-[#4A2EB0] rounded-[6px] mx-auto'></div>

<div className=' min-h-100vh divide-x-2 divide-[black]'>

<div className=' relative '>
<p className='text-[60px] font-bold text-[#4A2EB0] absolute pl-[350px] pt-[30px]'>40</p> 
<p className='text-[26px] font-medium absolute pl-[370px] pt-[110px]'>ICC</p>
</div>
<hr className="h-32 w-[2px] bg-black border-none" />

<div className=' relative'>
<p className='text-[60px] font-bold text-[#4A2EB0] absolute pl-[650px] top-[-100px]'>20</p> 
<p className='text-[26px] font-medium absolute pl-[660px] top-[-20px]'>BCC</p>
</div>
<hr className="h-32 w-[2px] bg-black border-none" />

<div className=' relative'>
<p className='text-[60px] font-bold text-[#4A2EB0] absolute pl-[950px] top-[-230px]'>140</p> 
<p className='text-[26px] font-medium absolute pl-[970px] top-[-150px]'>District</p>
</div>
</div>

<p className='w-[300px] h-[50px] bg-[#4A2EB0] absolute px-[50PX] py-3  mx-[540px]  top-[1000px] text-white text-[16px] rounded-[5px] cursor-pointer '>VIEW ALL ASSOICATIONS</p> 
  </div>
      </div>




  );
};


export const Adv =()=>{

  return(
    <div className='relative overflow-hidden font-serif' >
        <img src={image10} alt='' className='w-full h-[800px] flex justify-center items-center blur-[2px] overflow-hidden relative' />  

        <p className='w-full flex justify-center font-serif font-semibold absolute text-white text-[44px] top-[10px]'>One platform to rule them all</p>
        <div className='w-[200px]  border-[5px] bg-gray-600 rounded-[6px] ml-[550px] absolute top-[80px]'></div>
        <p className='w-full font-medium text-white text-[20px] pt-[20px] pl-[270px] absolute top-[80px]'>Criclog is the all-in-one solution for Cricket Associations, streamlining the management of </p>
        <span className='w-full font-medium text-white text-[20px] pl-[410px] absolute top-[130px]'>leagues, clubs, teams, players, officials, and grounds.</span> 
        <img src={imgcric} alt='' className='w-full h-[700px] flex justify-center items-center  absolute top-[100px]' />  

    </div>
  )
}

export const Ourproduct =()=>{
  const forms = [
    { 
      title: "League Management",
      description: "Manage your Tournaments, Matches and Player Profiles, easily & effectively.",
      free: true,
      premium: true },
    { 
      title: "Live scoring", 
      description: "Ball-by-Ball update of every match for your fans, friends & family.", 
      free: true, premium: true },
    { 
      title: "Website integration", description: "Seamless integration of match centre on your website.", 
      free: true, 
      premium: true },
    { 
      title: "Support", 
      description: "Providing you with continuous support, anytime, everywhere!", 
      free: true, 
      premium: true },
    {
       title: "Officials & Ground management", 
      description: "Coherent management of all official and ground needs.", 
      free: false, 
      premium: true },
    { 
      title: "Your App", 
      description: "Personalized mobile app to promote your brand, your way.", 
      free: false, premium: true },
    { title: "Your Web (Personalised website)", 
      description: "Personalized website for your business with your branding.", 
      free: false, 
      premium: true },
    { 
      title: "Live Streaming", 
      description: "Treat your online audience and drive engagement.", 
      free: true, 
      premium: true },
    { 
      title: "Super Sponsor", 
      description: "Provide mileage to your supportive sponsors.", 
      free: false, 
      premium: true },
    {
       title: "CricInsights", 
      description: "In-depth analysis of your player statistics.", 
      free: false, 
      premium: true },
    { 
      title: "WebInsights", 
      description: "In-depth analysis of players for better selection and apt coaching.", 
      free: true, 
      premium: true },
  ];

  return (
    <div className='w-full h-[1300px] bg-gray-200 font-serif'>
         <p className='w-full flex justify-center font-serif font-semibold pt-5 text-[44px]'>OUR PRODUCTS</p>
         <div className='w-[200px]  border-[5px] border-[#4A2EB0] rounded-[6px] ml-[550px]'>
         </div>

      <div className='w-full px-[170px] py-9'>
        <table className="w-[1000px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">PRODUCTS</th>
              <th className="py-3 px-4 text-center">FREE</th>
              <th className="py-3 px-4 text-center">PREMIUM</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form, index) => (
              <tr
                key={index}
                className="bg-white  hover:bg-gray-200 transition"
              >
                <td className="py-4 px-4 text-gray-800 text-[20px] font-semibold">
                  <p>{form.title}</p>
                  <p className="text-gray-600 text-sm">{form.description}</p>
                </td>


                <td className="py-4 px-4 text-center">
                  {form.free ? (
                    <span className="text-green-500 text-xl font-bold">&#10003;</span>
                  ) : (
                    <span className="text-red-500 text-xl font-bold">&#10007;</span>
                  )}
                </td>
                <td className="py-4 px-4 text-center">
                  {form.premium ? (
                    <span className="text-green-500 text-xl font-bold">&#10003;</span>
                  ) : (
                    <span className="text-red-500 text-xl font-bold">&#10007;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     <p className='w-[300px] h-[50px] bg-[#4A2EB0] px-7 py-3 mt-7 mx-[530px] text-white text-[16px] rounded-[5px] cursor-pointer '>CONTACT US TO KNOW MORE</p> 
  </div>
    
  );
}




export const Details=()=>{

  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000
  };


  const details=[
    {
    name:"Eswatini Cricket ",
    history:"The online scoring application by Criclog has brought a lot of benefits to Eswatini Cricket  ",
    author:"Mandla S. Dlamini",
    position:"Office Administrator"
    },
    {
      name:"Rwanda Cricket Association",
      history:"For the past one year Rwanda cricket has been using Criclog as our official scoring App for our domestic league, school's competitions, junior leagues and some international games that has been hosted in Rwanda, they have also developed a personalized app for Rwanda cricket to do Live-Scoring and players and fans can follow up on their teams scores and their own performances. ",
      author:"Emmanuel BYIRINGIRO",
      position:"General Manager"
      },
      {
        name:"Twenty20 Community Cricket ",
        history:"We moved over to Criclog in the summer of 2020 having tried several other scoring and data applications in the past.",
       author:"Darren Talbot",
        position:"Managing Director"
        },
     
        {
          name:"Sierra Leone Cricket Association ",
          history:"The partnership with Criclog has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via Criclog. Once we have mastered all applications and administration of Criclog, we will apply for the Sierra Leone cricket association app.",
          author:"Mr. Francis Samura",
          position:"CEO"
          },
  ]


  return(
    <div className='w-full h-[700px] bg-gray-300 font-serif'>
       <p className='w-full flex justify-center font-serif font-semibold pt-7 text-[44px]'>Don't listen to us, listen to them!</p>
       <div className='w-[200px]  border-[5px] border-[#4A2EB0] rounded-[6px] ml-[550px]'></div>
 

    
    
<div className='w-[100%] px-[200px]'>
    <Slider {...setting}>
{ details.map((det,id)=>(
<div className=" grid grid-cols-2  pt-[50px]"> 
<div className=' w-[400px] h-[400px] bg-white rounded-[4px] shadow-sm shadow-gray-400 '>

<div key={id} >
   
   <div>
     <p className='text-[26px] pl-5 pt-5'>{det.name}</p>
    <p className='text-[16px] pl-5 pt-2 '>{det.history}</p>
   </div>
    
 <div className='mt-[50px] text-left '>
    <p className='text-[24px] pl-5  '>{det.author}</p>
    <p className='text-[16px] pl-5 '>{det.position}</p>
 </div>
 </div>

</div>
</div> 
)) }
   </Slider> 
   </div>
<Link to={'/assoication/member-assoication'}>
<p className='w-[120px] h-[50px] bg-[#4A2EB0] px-5 py-3 mt-[50px] mx-[610px] text-white text-[16px] rounded-[5px] cursor-pointer '>READ ALL</p> 
</Link>
   
</div>

  )
}


export const Lastus=()=>{

  return(
  <div className='w-full h-[180px] bg-black font-serif'>
    <p className='w-full text-[30px] text-white pl-[450px] pt-[30px]'>Let's make Cricket better for everyone.</p>
    <p className='w-[140px] h-[50px] bg-[#4A2EB0] px-[18px] py-3 mt-7 mx-[600px] text-white text-[16px] rounded-[5px]  '>CONTACT US</p> 

  </div>
  )

}






const Association = () => {
  return (
    
<div className='w-full h-screen bg-white  '>
        <div><Landimg/></div>
        <div><Scrollimg/></div>
        <div><Adv/></div>
        <div><Ourproduct/></div>
        <div><Details/></div>
        <div><Lastus/></div>
 </div> 
  )
}
export default Association;
