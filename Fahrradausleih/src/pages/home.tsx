import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";



function home() {

  const navigate = useNavigate();

  return (
    <body>  
      <Header />
      <NavBar /> 
    </body>
  )
}
export default home