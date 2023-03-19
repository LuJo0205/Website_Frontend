import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Standorte from "../components/Standorte";


function Ausleihe() {

  return (
    <body>  
      <Header />
      <NavBar />
      <Footer />
      <Standorte />
    </body>
  )
}
export default Ausleihe