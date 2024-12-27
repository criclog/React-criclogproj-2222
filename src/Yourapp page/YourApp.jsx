import React from 'react';



const YourHeader = () => {
  return (
    <div className="relative bg-[#4A2EB0] text-white text-center py-16">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('your-background-image-path.jpg')" }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Your <span className="text-white font-semibold">App</span> From CricLog
        </h1>
        <p className="text-lg md:text-xl px-4">
          Make your players, your followers with Your App.
        </p>
      </div>
    </div>
  );
};






const Features = () => {
 
    const arr=[   { id: "01", title: "Branding", description: "Official Your app to follow Tournaments, Matches, Players, Leaderboard, News etc with your own branding. Available in Android & iOS platforms." },
        { id: "02", title: "Manage Tournaments", description: "All your past, present, future tournaments under one official app." },
        { id: "03", title: "Scoring Engine", description: "Your scorers will have the ability to Live score all the matches from Your App." },
        { id: "04", title: "Wagon Wheel", description: "Your scorers will be able to record Wagon Wheel of every batsman." },
       ]
      const arr1=[    { id: "05", title: "Leaderboard", description: "Tournament-wise leaderboard for batsmen and bowlers with multiple filter criteria." },
        { id: "06", title: "Push Notifications", description: "Automatic notifications to users on predefined important events." },
        { id: "07", title: "News*", description: "You will be able to post different news and updates related to your past or upcoming matches, tournaments." },
        { id: "08", title: "Polls & Quizzes*", description: "You will have ability to run Polls & Quizzes in Your App." },
      ]
       return (
           <div className='flex flex-col justify-center items-center py-[60px] gap-[40px]'>
               <p className='font-semibold md:text-[36px] sm:text-[30px] text-[24px] text-[#4D28D4] '>Why CricLog?</p>
               <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
    
    <div className="flex flex-col items-center gap-5 px-[20px]">
     {arr.map((value, id) => (
       <h1
         key={id}
         className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500"
       >
         <div className="flex-1 text-end">
           <p className="text-sm sm:text-base font-bold">{value.title}</p>
           <p className="text-xs sm:text-sm text-[#858484]">{value.description}</p>
         </div>
         <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.id}</p>
       </h1>
     ))}
    </div>
                   <div>
                      <img src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/server_images/your_app_new/your-app-feature-6.jpg?width=1920&quality=100&format=auto" alt=" couldn't load image" className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto rounded-md " />
                   </div>
                         
                   <div className="flex flex-col items-center gap-5 px-[20px]">
             {arr1.map((value, id) => (
               <h1
               key={id}
               className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4 py-4 px-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 ease-in-out duration-500"
             >
               <div className="flex-1 text-end">
                 <p className="text-sm sm:text-base font-bold">{value.title}</p>
                 <p className="text-xs sm:text-sm text-[#858484]">{value.description}</p>
               </div>
               <p className="text-2xl sm:text-3xl text-[#b1afaf] font-light">{value.id}</p>
             </h1>
             ))}
           </div>
      
                   
           </div>
           </div>
       )
     }
    
     const Table = () => {
        const plans = [
          {
            feature: "Follow Live scores",
            app: true,
            appPlus: true,
          },
          {
            feature: "Player Profile and Team Profile",
            app: true,
            appPlus: true,
          },
          {
            feature: "Tournament Leaderboard",
            app: true,
            appPlus: true,
          },
          {
            feature: "Boundary Tracker",
            app: true,
            appPlus: true,
          },
          {
            feature: "Heroes of The match, tournament",
            app: true,
            appPlus: true,
          },
          {
            feature: "Teams",
            app: true,
            appPlus: true,
          },
          {
            feature: "Points table",
            app: true,
            appPlus: true,
          },
          {
            feature: "Publish News of your tournament",
            app: true,
            appPlus: true,
          },
          {
            feature: "Create and publish poll/quiz",
            app: true,
            appPlus: true,
          },
          {
            feature: "Notification Preferences",
            app: true,
            appPlus: true,
          },
          {
            feature: "5 Sponsors free every tournament",
            app: true,
            appPlus: true,
          },
          {
            feature: "Live Streaming semi-finals and finals",
            app: true,
            appPlus: true,
          },
        ];
      
        return (
          <div className="max-w-4xl mx-auto my-10 px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-[#4A2EB0]">
              Choose Your Plan
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                      Features
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-center text-sm sm:text-base">
                      Your App ($350)
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-center text-sm sm:text-base">
                      Your App+ ($499)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } border-b`}
                    >
                      <td className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium">
                        {plan.feature}
                      </td>
                      <td className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm">
                        {plan.app ? "✓" : ""}
                      </td>
                      <td className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm">
                        {plan.appPlus ? "✓" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      };
      
const Footer = () => {
  return (
    <div className="bg-gray-900 text-center py-6 sm:py-8">
      <p className="text-white text-sm sm:text-base md:text-lg mb-4">
        Get your own <strong className="font-bold">Your App</strong> with your
        own branding now!
      </p>
      <button className="bg-[#4A2EB0] text-white font-bold text-sm sm:text-base py-2 px-4 rounded hover:bg-[#371d91] transition duration-300">
        CONTACT US
      </button>
    </div>
  );
};







const YourApp = () => {
  return (
    <div>
        <YourHeader />
        <Features />
        <Table />
        <Footer />
        
    </div>
  )
}

export default YourApp;