import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Homesect } from '../Homesection/Homesect'
import { Jobs } from '../Jobs page/Jobs'
import { Layout, Layout1 } from '../Layout'
import { Login } from '../Authentication/Login'
import { Matchlocation } from '../match/Matchlocation'
import { Matchlive } from '../match/Matchlive'
import Contact from '../Contact/Contact'
import {YourWeb} from '../youweb/YourWeb'
import {Powerpromote} from '../powerpromote/Powerpromote'
import { Cricllog } from '../criclogpro/Cricllog'
import { Forgot } from '../Authentication/Forgot'
import CricketCommunity from "../Academy page/Cricketcommuntiy";
import Academies from '../Academy page/CricketAcademies';
import GroundCards from '../Academy page/CricketGrounds ';
import ShopsCards from '../Academy page/CricketShop';
import Organizer from '../Academy page/CricketOrganizer';
import CricketScorer from '../Academy page/CricketScorer';
import CricketUmpire from '../Academy page/CricketUmpire';
import CricketCommentators from '../Academy page/CricketCommentators';
import Cricloglive from '../Academy page/cricloglive';
import CricketTshirst from '../Academy page/TshirtJerseycomponent';
import CricketTrophy from '../Academy page/CricketTrophy';
import CricketBat from '../Academy page/Batcomponent';
import Cricketphysiotherapist from '../Academy page/Physiotherapistcomponent';
import CricketCoach from '../Academy page/Personalcoachcomponent';
import CricketIndoorNets from '../Academy page/Indoornetcomponent';
import YourApp from '../Yourapp page/YourApp'
import Faqs from '../Faqs/Faqs'
import LiveStreamingBanner from '../Live streaming/Live'
import Market from '../Market/Market'
import FilterComponent from '../Tourment/Tourment'
import { ScoreTickerPage } from '../Score ticker/ScoreTickerPage'
import Association from '../Association/Association'

import Marketdashboard from '../Market/Marketdashboard'

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {OrganizeTournment} from '../organizetournament/Organizetournament'
import CricketAppPromo from '../Getapp/Getapp'
import LocationFilter from '../Looking/Looking'
import { Newsnavbar } from '../News/Local'
import { Localdetails } from '../News/Localdetails'
import { Internationaldetails } from '../News/internationaldetails'
import Crickettips from '../CricketTips/CricketTipscomponent'
import { Profile } from '../Profile/Profile'
import { Tournamentdashboard } from '../Tourment/Tournamentdashboard'
    




export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/live-match" element={<Matchlocation/>}/>
        <Route path='/score-match' element={<Matchlive/>}/>
        <Route path='/score-match/:id' element={<Matchlive/>}/>
        <Route path="/Faqs"element={<Faqs/>} />
        <Route path="/Market"element={<Market/>} />
        <Route path="/tournament"element={<FilterComponent/>} />
        <Route path="/tournamentdashboard/:id"element={<Tournamentdashboard/>} />
        <Route path="/Marketdashboard/:id"element={<Marketdashboard/>} />
        <Route path="/looking"element={<LocationFilter/>} />        
        <Route path="/news"element={<Newsnavbar/>} />      
        <Route path="/localnews/:id"element={<Localdetails/>} />      
        <Route path="/internationalnews/:id"element={<Internationaldetails/>} />      
        <Route path="/crickettips"element={<Crickettips/>} />      

       
        
        {/* Academy */}
<Route path="/academy" element={< CricketCommunity/>}/>
<Route path="/academies/:id" element={<Academies />} />
<Route path="/cricket/grounds/:id" element={<GroundCards />} />
<Route path="/cricket/shops/:id" element={<ShopsCards />} />
<Route path="/tournament/organisers/:id" element={<Organizer />} />
<Route path="/cricket/scorers/:id" element={<CricketScorer />} />
<Route path="/cricket/umpire/:id" element={<CricketUmpire />} />
<Route path="/cricket/commentator/:id" element={<CricketCommentators />} />
<Route path="/criclog/live/:id" element={<Cricloglive />} />
<Route path="/cricket/t-shirt-and-jersey/:id" element={<CricketTshirst />} />
<Route path="/cricket/trophy/:id" element={<CricketTrophy />} />
<Route path="/cricket/bat/:id" element={<CricketBat />} />
<Route path="/cricket/physiotherapist/:id" element={<Cricketphysiotherapist />} />
<Route path="/cricket/coach/:id" element={<CricketCoach />} />
<Route path="/cricket/indoor-nets/:id" element={<CricketIndoorNets />} />
{/* Association */}

  


</Route>

      <Route path="/" element={<Layout1/>}>
      <Route path='/Contact' element={<Contact/>}/>
     <Route path='/YourWeb' element= {<YourWeb/>} />
     <Route path="/Powerpromote" element={<Powerpromote/>}/>
     <Route path='/Cricllog' element={<Cricllog/>}/>
     <Route path='/yourapp' element={<YourApp/>}/>
     <Route path="/livestream"element={<LiveStreamingBanner/>} />
     <Route path="/scoreticker"element={<ScoreTickerPage/>} />
     <Route path='/association' element={<Association/>}/>
     <Route path='/organizetournament' element={<OrganizeTournment/>}/>
      

     </Route>



      <Route path='/Login' element={<Login/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/get-app' element={<CricketAppPromo/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}
