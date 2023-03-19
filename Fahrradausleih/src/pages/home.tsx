import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import GoogleMaps from "../components/GoogleMaps";

import Footer from "../components/Footer";
import Attribute from "../components/Attribute";



function home() {

  

  return (
    <body>  
      <Header />
      <NavBar />
      <Slideshow />

     <GoogleMaps />
     <Footer />
    
    </body>
  )
}
export default home