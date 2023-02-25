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
                            navigate('/Jonas', {replace: false});
                        }}>Jonas</a>

        <a href="#">Link</a>
        <a onClick={() => {
                            navigate('/SignIn', {replace: false});
                        }} className="right">Anmelden</a>
      </div>
      

    </body>
  )
}

export default NavBar