import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image11 from '../assests/m1.jpg'
import image12 from '../assests/m2.jpg'
 import image13 from '../assests/m3.jpg'
 import image14 from '../assests/m4.jpg'
import {Link} from 'react-router-dom'





export const Header1=()=>{


    return(
         <div className='w-full h-[250px] bg-[#4A2EB0] font-serif'>
         <p className='w-full flex justify-center font-serif text-white font-semibold py-[90px] text-[40px]'>ICC CRICKET ASSOCIATION </p>
         </div>
    )
}


export const Option =()=>{

  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };


  const details=[
    {
      image:image14,
    name:"Eswatini Cricket Association ",
    history:"The online scoring application by Criclog has brought a lot of benefits to Eswatini Cricket. ",
    author:"Mandla S. Dlamini",
    position:"Office Administrator"
    },
    {
      image:image13,
      name:"Rwanda Cricket Association",
      history:"For the past one year Rwanda cricket has been using Criclog as our official scoring App for our domestic league, school's competitions, junior leagues and some international games that has been hosted in Rwanda. ",
      author:"Emmanuel BYIRINGIRO",
      position:"General Manager"
      },
      {
      image:image12,
        name:"Twenty20 Community Cricket ",
        history:"We moved over to Criclog in the summer of 2020 having tried several other scoring and data applications in the past.",
       author:"Darren Talbot",
        position:"Managing Director"
        },
     
        {
      
          image:image11,
          name:"Sierra Leone Cricket Association ",
          history:"The partnership with Criclog has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via Criclog. Once we have mastered all applications and administration of Criclog, we will apply for the Sierra Leone cricket association app.",
          author:"Mr. Francis Samura",
          position:"CEO"
          },
  ]





  return(

<div className='w-[100%] h-[0px] bg-white  px-[30px] font-serif  relative'>

<div className='w-[400px] h-[900px] bg-white text-right  px-[30px] py-[20px]'>
<button className='text-[20px] py-1 hover:text-[#4A2EB0]'>ICC CRICKET ASSOICATION</button> 
<button className='text-[20px] py-4 hover:text-[#4A2EB0]'>STATE CRICKET ASSOICATION</button> 
<button className='text-[20px] py-4 hover:text-[#4A2EB0]'>DISTRICT CRICKET ASSOICATION</button> 
<button className='text-[20px] py-4 hover:text-[#4A2EB0]'>CRICKET CLUBS</button> 
<p className='text-[20px] py-4 hover:text-[#4A2EB0]'>OTHERS</p> 

<div className='w-[400px]  text-left'>
    <Slider {...setting}>
{ details.map((det,id)=>(
<div className=" grid grid-cols-1  "> 
<div className=' w-[350px] h-[370px] bg-white rounded-[10px] py-5 shadow-sm shadow-gray-400'>
<div key={id} >
    <img src={det.image} alt="" className='w-[110px] h-[90px] pl-4 pt-2' />
    <p className='text-[22px] pl-4 pt-2'>{det.name}</p>
    <p className='text-[16px] text-gray-700 pl-4 pt-1 '>{det.history}</p>
    <p className='text-[20px] pl-4 pt-4 '>{det.author}</p>
    <p className='text-[16px]  text-gray-700 pl-4  '>{det.position}</p>
 </div>
</div>
</div> 
)) }
   </Slider> 
  <Link to={'/assoication/member-assoication'}>
  <p className='w-[120px] h-[45px] bg-[#4A2EB0] px-5 py-3 my-[50px] mx-[130px] text-white rounded-[10px]'>READ ALL</p> 
  </Link>
</div>

   
</div>

</div>




)}

export const Cardteam=()=>{



  return(
<div className='w-[100%]  bg-white  px-[30px] font-serif  relative'>


<div className='w-[919px] h-[900px] bg-white absolute left-[430px]'>
  <input type="search" className='w-[400px] h-[45px] bg-gray-300 mt-6 mx-5 rounded-[30px] outline-none px-[30px] text-[18px]'
  placeholder='search'/>
</div>
</div>
)}





























const IccAssoication = () => {
  return (
<>
<div><Header1/></div>
<div><Option/></div>
<div><Cardteam/></div>

</>
)}

export default IccAssoication