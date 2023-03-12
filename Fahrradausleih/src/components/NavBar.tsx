import { useNavigate } from "react-router-dom";
import './styles/NavBar.css'

function NavBar() {

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
                        }} className="right">Anmelden</a>
      </div>
      

    </body>
  )
}

export default NavBar