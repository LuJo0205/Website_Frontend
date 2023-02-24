import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function jonas() {

  const navigate = useNavigate();
  return (
    <body>
    
      <div className="header">
       <h1>Hallooooooooooo </h1>
      </div>
      <NavBar /> 
</body>
  )
}

export default jonas