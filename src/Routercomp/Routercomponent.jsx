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
import {Powerpromote} from '../Powerpromote/Powerpromote'
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



export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/live-match" element={<Matchlocation/>}/>
        <Route path='/score-match' element={<Matchlive/>}/>
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

</Route>

      <Route path="/" element={<Layout1/>}>
      <Route path='/Contact' element={<Contact/>}/>
     <Route path='/YourWeb' element= {<YourWeb/>} />
     <Route path="/Powerpromote" element={<Powerpromote/>}/>
     <Route path='/Cricllog' element={<Cricllog/>}/>
     <Route path='/yourapp' element={<YourApp/>}/>
     </Route>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      </Routes>
      
    </>
  )
}
