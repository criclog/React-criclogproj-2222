import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";




const Faqs = () => {


const[openfaq,setOpenfaq] =useState(null);

const[openGen,setOpenGen] =useState(null);
const[openscore,setOpenscore] =useState(null);
const[opentour,setOpentour] =useState(null);



const faqs = [
    {
        Detail:"How to Score a Cricket Match - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Add Your Cricket Team - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Search a Player, Team, Match, Tournament - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Edit Your Profile - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Create a Match Schedule - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Resume Already Created Match - The criclog App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
]

const General = [
    {
        Question:"What is CricLogs?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"Why have you made it?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"Will criclog be paid in future?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is in it for me?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"How do I add a team?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"How do I add a player?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"Can I change my team member’s profile pic?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    
]

const Scoring = [
    {
        Question:"Who can score a match?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"How do I start a match?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"How can I resume a match if it is created in advance?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"Can I leave scoring and resume later on?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"How can I resume scoring from another phone? ",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"My phone got switched off during scoring. What should I do?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"Can I change the overs after the match has started?",
        answer:"criclog is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    
]

const tournament = [
    {
        Detail:"How do I register a tournament on criclog?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"What are the benefits of organising a tournament on criclog?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"What are the charges of scoring a tournament on criclog?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Add Scorers and Tournament Officials on criclog?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to create points table on criclog App?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to edit or delete the tournament on criclog?",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
]




const toggleFAQS = (index) =>{
    setOpenfaq(openfaq === index ? null : index)
}

const toggleGen = (content) =>{
    setOpenGen(openGen=== content ? null : content)
}
const togglescore = (content) =>{
    setOpenscore(openscore=== content ? null : content)
}
const toggletour = (index) =>{
    setOpentour(opentour=== index ? null : index)
}

  return (
    <div className='w-full bg-gray-100 min-h-screen   '>
     
     <div className='w-full min-h-100vh bg-[#4D28D4] flex flex-col justify-center items-center gap-[20px] py-[50px] px-[50px]'>
      <h2 className='text-[white] md:text-[32px] sm:text-[30px] text-[28px] font-medium text-center'>Frequently Asked Questions</h2>
      <p className='md:text-[18px] sm:text-[17px] text-[16px] text-[white]'>We Might Already Have An Answer For Your Question. Check Our FAQs And Relevant Answers Below.</p>
    </div>


        {/* Video */}
        
        <h1 className='text-3xl font-medium text-center my-10 text-blue-700'>Video-1</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                faqs.map((faq,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleFAQS(index)}
                        >

                        <span className='font-semibold text-gray-700'>{faq.Detail}</span>   
                        <span className='text-gray-500'>
                            {openfaq === index ? <IoIosArrowDown/> : <IoIosArrowDown className='rotate-180'/>}
                            </span> 

                        </button>
                        {openfaq === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {faq.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>



        {/* General */}

        <h1 className='text-3xl font-medium text-center mb-6 text-blue-700 mt-2'>General</h1>

        <div className='max-w-3xl px-5 mx-auto'>
            {
                General.map((Gen,content)=>(
                    <div
                    key={content}
                    className='border-b border-gray-300 mb-5'
                    >
                      <button
                      
                      className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                      onClick={()=> toggleGen(content)}
                      >
                      <span className='font-semibold text-gray-700'>
                        {Gen.Question}
                        </span>  
                      <span className='text-gray-500'>
                        {openGen === content ?<IoIosArrowDown/> : <IoIosArrowDown className='rotate-180'/> }
                      </span>
                      </button>

                      {openGen === content && (
                        <div className='p-4 bg-gray-50 text-gray-600 flex justify-center'>
                            {Gen.answer}
                        </div>
                      )}

                    </div>
                ))
            }
        </div>

        
        {/* Scoring Related */}

        <h1 className='text-3xl font-medium text-center mb-6 text-blue-700 mt-2'>Scoring Related</h1>

        <div className='max-w-3xl px-5 mx-auto'>
            {
                Scoring.map((score,content)=>(
                    <div
                    key={content}
                    className='border-b border-gray-300 mb-5'
                    >
                      <button
                      
                      className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                      onClick={()=> togglescore(content)}
                      >
                      <span className='font-semibold text-gray-700'>
                        {score.Question}
                        </span>  
                      <span className='text-gray-500'>
                        {openscore === content ?<IoIosArrowDown/> : <IoIosArrowDown className='rotate-180'/> }
                      </span>
                      </button>

                      {openscore === content && (
                        <div className='p-4 bg-gray-50 text-gray-600 flex justify-center'>
                            {score.answer}
                        </div>
                      )}

                    </div>
                ))
            }
        </div>
                                  
        {/* Tournament Related */}

        <h1 className='text-3xl font-medium text-center mb-6 text-blue-700'>Tournament Related</h1>
        <div className='max-w-3xl px-5 mx-auto'>
            {
                tournament.map((tour,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggletour(index)}
                        >

                        <span className='font-semibold text-gray-700'>{tour.Detail}</span>   
                        <span className='text-gray-500'>
                            {opentour === index ? <IoIosArrowDown/> : <IoIosArrowDown className='rotate-180'/>}
                            </span> 

                        </button>
                        {opentour === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center '>
                                {tour.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <div className=' flex flex-col justify-center items-center gap-3 py-[50px]'>
               <h1 className='Text-2xl font-bold'>Do you have any query ?</h1>
               <p className=''>Tell us more and we'll be happy to assist you</p>
               <button className='w-[150px] h-[40px] bg-[#4A2EB0] rounded text-[white] text-[17px]'>Contact Us</button>
        </div>

    </div>
  )
}

export default Faqs