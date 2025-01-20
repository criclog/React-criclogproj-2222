import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";




const Crickettips = () => {


const[openfaq,setOpenfaq] =useState(null);
const[openBowling,setOpenBowling] =useState(null);
const[openUmpire,setOpenUmpire] =useState(null);
const[openFielding,setOpenFielding] =useState(null);
const[openBasics,setOpenBasics] =useState(null);
const[openDrills,setOpenDrills] =useState(null);
const[openGame,setOpenGame] =useState(null);
const[openYourBat,setOpenYourBat] =useState(null);
const[openKnock,setOpenKnock] =useState(null);
const[openStumps,setOpenStumps] =useState(null);
const[openIntroduction,setOpenIntroduction] =useState(null);
const[openBatting,setOpenBatting] =useState(null);
const[openBattingDrills,setOpenBattingDrills] =useState(null);


const faqs = [
    {
        Detail:"How to Make a Run Out",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/SBlyekzhRKk" title="How to Make a Run Out | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Catch the Ball",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/IQUbko9LbgU" title="How to Catch the Ball | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Stop the Ball",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/xRf3_UFtAaE" title="How to Stop the Ball | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Throw the Ball",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/faVOAI0hKrA" title="How to Throw the Ball | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
]

const Bowling = [
    {
        Detail:"How to Bowl an Inswinger",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/Nwfzvl0Jpf8" title="How to Bowl an Inswinger | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Bowl an Outswinger",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/IfS_uW1dCQA" title="How to Bowl an Outswinger | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Bowl an Off Cutter",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/BgBc2r0U4oI" title="How to Bowl an Off Cutter | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Bowl a Leg Spin",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/ziPMGzmToDA" title="How to Bowl a Leg Spin | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Bowl Good Line",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/tHwT1Xb02ag" title="How to Bowl Good Line | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"How to Bowl Good Length",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/K_2W3cFSk14" title="How to Bowl Good Length | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"Bowling too full? Bowling too short? A simple explanation to help you synchronise top and bottom half",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/aH7DSTNLRlU" title="Introduction to Bowling | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"How to stay on track? Make sure you maintain the correct body movement throughout your bowling action",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/FuCnHQatMXE" title="Bowling too full? Bowling too short?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
]

const Umpire =[
    {
    Detail:"The Role of the Umpire",
    Videos:<iframe width="558" height="400" src="https://www.youtube.com/embed/8gEnNnzjroc" title="The Role of the Umpire | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Fielding =[
    {
    Detail:"Fielding Drill - Part 1",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/kALxvWbtdYU" title="Fielding Drills - Part 1 | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"Fielding Drills - Part 2",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/5hcLj0ldTfk" title="Fielding Drills - Part 2 | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Basics =[
    {
    Detail:"Equipment Used by the Wicketkeeper",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/cPS8yx9-H3Y" title="Equipment Used by the Wicketkeeper | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Drills =[
    {
    Detail:"Wicket Keeping Drills - Part 1",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/N4GBsnRdF_o" title="Wicket Keeping Drills - Part 1 | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"Wicket Keeping Drills - Part 2",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/aG9594yQ2NE" title="Wicket Keeping Drills - Part 2 | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Game =[
    {
    Detail:"Basic Ball Drill",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/0Xef5IatgEs" title="Basic Ball Drill | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"Ball on Cone Drill",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/b4FGXJRNxew" title="Ball on Cone Drill | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"French Cricket",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/PMNlgIiF61g" title="French Cricket | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"Continuous Cricket",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/g96k9hr5MHE" title="Continuous Cricket | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const YourBat =[
    {
    Detail:"How to Replace the Grip on Your Bat",
    Videos:<iframe width="558" height="400" src="https://www.youtube.com/embed/4aLU44Rs48Q" title="How to Replace the Grip on Your Bat | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Knock =[

    {
    Detail:"Learn to Knock In a New Cricket Bat",
    Videos:<iframe width="558" height="400" src="https://www.youtube.com/embed/5kK4iDcsmR4" title="Learn to Knock In a New Cricket Bat | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},

]
const Stumps =[

    {
    Detail:" How to Pitch the Stumps",
    Videos:<iframe width="558" height="400" src="https://www.youtube.com/embed/SlGEd_Bj2F8" title="How to Pitch the Stumps | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]
const Introduction=[

    {
    Detail:"  Introduction to Cricket",
    Videos:<iframe width="558" height="400" src="https://www.youtube.com/embed/tPdU_LhDsow" title="Introduction to Cricket | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]

const Batting= [
    {
        Detail:"Learn the Equipment Used for Batting",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/gusv3BsHd3g" title="Learn the Grip and Stance | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"Learn the Grip and Stance",
        Videos:<iframe width="560" height="315" src="https://youtu.be/IQUbko9LbgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"Learn the Backlift and Footwork",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/7SBYgRCk9bg" title="Learn the Backlift and Footwork | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Play a Front Foot Defence",
        Videos:<iframe width="718" height="400" src="https://www.youtube.com/embed/CdlYCoqUVEQ" title="How to Play a Front Foot Defence | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Play a Back Foot Defence",
        Videos:<iframe width="718" height="400" src="https://www.youtube.com/embed/sKIwkvdAyJU" title="How to Play a Back Foot Defence | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"How to Play a Straight Drive",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/Fpjp2o2arVs" title="How to Play a Straight Drive | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"How to Play an Off Drive",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/kAtrMpWiClw" title="How to Play an Off Drive | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }, {
        Detail:"How to Play an On Drive",
        Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/1VTrkMuIPhk" title="How to Play an On Drive | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
]
const BattingDrills=[
    {
    Detail:"Drag the Bat",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/47g4gYOk5ME" title="Drag the Bat | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
{
    Detail:"Batting Placement Drill",
    Videos:<iframe width="556" height="400" src="https://www.youtube.com/embed/26P_1z3lA9Y" title="Batting Placement Drill | Cricket" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
},
]




const toggleFAQS = (index) =>{
    setOpenfaq(openfaq === index ? null : index)
}

const toggleBowling = (index) =>{
    setOpenBowling(openBowling  === index ? null : index)
}
const toggleUmpire = (index) =>{
    setOpenUmpire(openUmpire === index ? null : index)
}
const toggleFielding = (index) =>{
    setOpenFielding(openFielding === index ? null : index)
}
const toggleBasics = (index) =>{
    setOpenBasics(openBasics === index ? null : index)
}
const toggleDrills = (index) =>{
    setOpenDrills(openDrills === index ? null : index)
}
const toggleGame = (index) =>{
    setOpenGame(openGame === index ? null : index)
}
const toggleYourBat = (index) =>{
    setOpenYourBat(openYourBat === index ? null : index)
}
const toggleKnock  = (index) =>{
    setOpenKnock (openKnock  === index ? null : index)
}
const toggleStumps = (index) =>{
    setOpenStumps(openStumps=== index ? null : index)
}
const toggleIntroduction = (index) =>{
    setOpenIntroduction(openIntroduction=== index ? null : index)
}
const toggleBatting= (index) =>{
    setOpenBatting(openBatting=== index ? null : index)
}
const toggleBattingDrills= (index) =>{
    setOpenBattingDrills(openBattingDrills=== index ? null : index)
}




  return (
    <div className='w-full bg-gray-100 min-h-100vh    '>
     
     <div className='w-full min-h-100vh bg-[#4D28D4] flex flex-col justify-center items-center gap-[20px] py-[50px] px-[50px]'>
      <h2 className='text-[white] md:text-[30px] sm:text-[26px] text-[24px]  text-center'>Cricket Tips</h2>
      <p className='md:text-[18px] sm:text-[17px] text-[16px] text-[white]'>From Better To Best! Improve Your Cricket Skills Using These Tips.</p>
    </div>


        {/* Video */}
        
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>1. Fielding</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3 '>
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

                        <span className='font-semibold text-gray-700 text-[14px]  sm:text-[18px]'>{faq.Detail}</span>   
                        <span className='text-gray-500'>
                            {openfaq === index ?  <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
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
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>2. Bowling</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                Bowling.map((Bowling,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleBowling(index)}
                        >

                        <span className='font-semibold text-gray-700'>{Bowling.Detail}</span>   
                        <span className='text-gray-500'>
                            {openBowling === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openBowling === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {Bowling.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>3. The Role of the Umpire</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                Umpire.map((Umpire,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleUmpire(index)}
                        >

                        <span className='font-semibold text-gray-700'>{Umpire.Detail}</span>   
                        <span className='text-gray-500'>
                            {openUmpire === index ? <IoIosArrowDown className='rotate-180'/> :<IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openUmpire === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {Umpire.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>4. Fielding Drills</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                Fielding.map((Fielding,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleFielding(index)}
                        >

                        <span className='font-semibold text-gray-700'>{Fielding.Detail}</span>   
                        <span className='text-gray-500'>
                            {openFielding === index ?  <IoIosArrowDown className='rotate-180'/>:<IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openFielding === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {Fielding.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>5. Wicket keeping - Basics</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                Basics.map((Basics,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleBasics(index)}
                        >

                        <span className='font-semibold text-gray-700'>{Basics.Detail}</span>   
                        <span className='text-gray-500'>
                            {openBasics === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/>  }
                            </span> 

                        </button>
                        {openBasics === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {Basics.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>



        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>6. Wicketkeeping Drills</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Drills.map(( Drills,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleDrills(index)}
                        >

                        <span className='font-semibold text-gray-700'>{ Drills.Detail}</span>   
                        <span className='text-gray-500'>
                            {openDrills === index ?  <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openDrills === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Drills.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>


        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>7. Drills to Improve your Game4. Fielding Drills</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Game.map(( Game,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleGame(index)}
                        >

                        <span className='font-semibold text-gray-700'>{ Game.Detail}</span>   
                        <span className='text-gray-500'>
                            {openGame === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openGame === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Game.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>8. How to Replace the Grip on Your Bat</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 YourBat.map(( YourBat,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleYourBat(index)}
                        >

                        <span className='font-semibold text-gray-700'>{ YourBat.Detail}</span>   
                        <span className='text-gray-500'>
                            {openYourBat === index ?  <IoIosArrowDown className='rotate-180'/>:<IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openYourBat === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { YourBat.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>9. Learn to Knock In a New Cricket Bat</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Knock.map(( Knock,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleKnock(index)}
                        >

                        <span className='font-semibold text-gray-700'>{ Knock.Detail}</span>   
                        <span className='text-gray-500'>
                            {openKnock === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openKnock === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Knock.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>10. How to Pitch the Stumps</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Stumps.map(( Stumps,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleStumps(index)}
                        >

                        <span className='font-semibold text-gray-700'>{ Stumps.Detail}</span>   
                        <span className='text-gray-500'>
                            {openStumps=== index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openStumps === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Stumps.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>11. Introduction to Cricket</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Introduction.map(( Introduction ,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleIntroduction (index)}
                        >

                        <span className='font-semibold text-gray-700'>{ Introduction.Detail}</span>   
                        <span className='text-gray-500'>
                            {openIntroduction === index ? <IoIosArrowDown className='rotate-180'/>: <IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openIntroduction  === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Introduction.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>12. Batting</h1>
        <div className='max-w-3xl mx-auto px-5 mb-3'>
            {
                 Batting.map(( Batting ,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleBatting(index)}
                        >

                        <span className='font-semibold text-gray-700'>{Batting.Detail}</span>   
                        <span className='text-gray-500'>
                            {openBatting=== index ? <IoIosArrowDown className='rotate-180'/>:<IoIosArrowDown/>  }
                            </span> 

                        </button>
                        {openBatting=== index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { Batting.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
        <h1 className='text-3xl font-medium text-center my-10 text-[#4D28D4]'>13. Batting Drills</h1>
        <div className='max-w-3xl mx-auto px-5 '>
            {
                BattingDrills.map(( BattingDrills,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 pb-10'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleBattingDrills(index)}
                        >

                        <span className='font-semibold text-gray-700'>{BattingDrills.Detail}</span>   
                        <span className='text-gray-500'>
                            {openBattingDrills=== index ? <IoIosArrowDown className='rotate-180'/>:<IoIosArrowDown/> }
                            </span> 

                        </button>
                        {openBattingDrills=== index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                { BattingDrills.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
       

    </div>
  )
}

export default Crickettips