import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import GoogleMaps from "../components/GoogleMaps";
import ColoredLine from "../components/ColoredLine";
import HomeIcons from "../components/HomeIcons";
import Footer from "../components/Footer";

function home() {

  return (
    <body>  
      <Header />
      <NavBar />
      <Slideshow /> 
      <ColoredLine/>
      <HomeIcons/>
      <ColoredLine/>
      <GoogleMaps />
      <Footer />
    </body>
  )
}
export default home