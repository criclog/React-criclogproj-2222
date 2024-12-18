import { Login } from "./Authentication/Login";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Header/Navbar";
import { Homesect } from "./Homesection/Homesect";


export const App=()=> {
  return(<div>
    <Login/>
    <Navbar/>
    <Homesect/>
    <Footer/>

  </div>
  ) 
}