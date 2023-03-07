import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import GoogleMaps from "../components/GoogleMaps";
import './styles/App.scss'

function home() {

  const navigate = useNavigate();

  return (
    <body>  
      <Header />
      <NavBar />
      <Slideshow />
     <GoogleMaps />
    </body>
  )
}
export default home