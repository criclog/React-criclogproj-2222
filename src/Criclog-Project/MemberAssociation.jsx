import React from 'react'
import image11 from '../Assests/m1.jpg'
import image12 from '../Assests/m2.jpg'
 import image13 from '../Assests/m3.jpg'
 import image14 from '../Assests/m4.jpg'


export const Header=()=>{


return(
    <div className='w-full h-[250px] bg-[#4A2EB0] '>
    <p className=' w-full h-[200px]  font-extrabold  text-white text-[34px] flex justify-center items-center'>Acknowledgments by Cricket Associations</p>
    </div>
)}


export const Details=()=>{

    const MemberDetails=[
        {
            image:image11,
            name:"Sierra Leone Cricket Association",
            discription1:"The partnership with CricHeroes has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via CricHeroes. Once we have mastered all applications and administration of CricHeroes, we will apply for the Sierra Leone cricket association app.",
            discription2:"The customer care services are just too professional and aware of some. Anytime we called on CricHeroes, we had an instant response and workable solution. We are proud to be in partnership with CricHeroes.",
            discription3:"The partnership with CricHeroes has been a Huge blessing and improvement for Sierra Leone cricket. People all over the world can now follow Sierra Leone cricket via CricHeroes. Once we have mastered all applications and administration of CricHeroes, we will apply for the Sierra Leone cricket association app.",
            author:"Mr. Francis Samura",
            position:"CEO"
        },
        {
            image:image12,
            name:"Twenty20 Community Cricket",
            discription1:"We moved over to CricHeroes in the summer of 2020 having tried several other scoring and data applications in the past.",
            discription2:"The data provided by the Player Insights is unsurpassed and is now giving us a level of data for all our players which had previously been inaccessible. This has allowed us to work on many more areas of their games than ever before with data to back up the methodology. The fielding data collecting mis-fields, runs saved and dropped catches is particularly useful.",
            discription3:"The scoring app is the best we have used so far. Unlike some of the more often used systems it doesn’t fall over mid game and is simple to use. We have been able to train up users of all ages in no time at all.",
            author:"Darren Talbot",
             position:"Managing Director"
        },
        {
            image:image13,
            name:"Rwanda Cricket Association",
            discription1:"For the past one year Rwanda cricket has been using CricHeroes as our official scoring App for our domestic league, school's competitions, junior leagues and some international games that has been hosted in Rwanda, they have also developed a personalized app for Rwanda cricket to do Live-Scoring and players and fans can follow up on their teams scores and their own performances.",
            discription2:"We look forward to many more seasons with CricHeroes and promote our local game on their platform.",
            discription3:"We thank them for their partnerships",
            author:"Emmanuel BYIRINGIRO",
            position:"General Manager"
        },
        {
            image:image14,
            name:"Eswatini Cricket Association",
            discription1:"The online scoring application by CricHeroes has brought a lot of benefits to Eswatini Cricket Association.",
            discription2:"With our association having only one dedicated full time employee who also looks after domestic competitions and match reporting, this app has removed the burden of having to refer to the hard copy scoring book for match reports and player performance",
            discription3:"No more interruptive calls during match where cricket followers at home would like to be updated frequently on the match scores and best performing players. Identifying man of the match has been made so easy as well as awarding best batter, best bowler and player of the series at the end of a competition. Players are much impressed of the application. This makes the job of the tournament organizer very easy and transparent.",
            author:"Mandla S. Dlamini",
            position:"Office Administrator"
        },
    ]
    return(
       <div className='w-full h-[2300px] bg-gray-400 '> 
       
         <div className='w-[100%]'>
            
    {MemberDetails.map((pic,id)=>(
       <div className=' w-full grid grid-cols-1 px-[200px] gap-[50px]  pt-[60px] '>
        <div  className='w-[900px] h-[500px] bg-white shadow-sm shadow-gray-600 rounded-[10px] '>

        <div key={id}>
        <img src={pic.image} alt="" className='w-[220px] h-[130px] px-[50px]'/>
        <p className='text-[22px] font-medium px-[50px]'>{pic.name}</p>
        <p className='text-[16px] py-3 px-[50px]'>{pic.discription1}</p>
        <p className='text-[16px] py-3 px-[50px]'>{pic.discription2}</p>
        <p className='text-[16px] py-3 px-[50px]'>{pic.discription3}</p>
        <p className='text-[16px] font-bold pt-2 px-[50px]'>{pic.author}</p>
        <p className='text-[16px] font-light text-gray-600 px-[50px]'>{pic.position}</p>
         </div>
        </div>    
        </div>
    ))}
    </div>
</div>
)}

export const MemberAssociation = () => {

  return (
        <div  className='w-full h-screen font-serif '>
            <Header/>
            <Details/>

    </div>   
  )
}
export default MemberAssociation;