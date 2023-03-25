import { useNavigate } from "react-router-dom";
import { getCookie } from "../CookieHandler";
import './styles/NavBar.css'

function NavBar() {
  const istAngemeldet = getCookie("firstname")
  const navigate = useNavigate();
  return (
    
    <body>
        <div className="navbar">
            <a onClick={() => {
                            navigate('/', {replace: false});
                        }}>Home</a>

            <a onClick={() => {
                            navigate('/Ausleihe', {replace: false});
                        }}>Ausleihen</a>

            <a onClick={() => {
                            navigate('/Rückgabe', {replace: false});
                        }}>Rückgabe</a>            
        <a onClick={() => {
                            navigate('/SignIn2', {replace: false});
                        }} className="right">{istAngemeldet==="null"?"Anmelden":"Hallo " +istAngemeldet}</a>
                        
      </div>
      

    </body>
  )
}

export default NavBar