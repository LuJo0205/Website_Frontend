import { useNavigate } from "react-router-dom";




function home() {

  const navigate = useNavigate();
  return (
    <body>
    
<div className="header">
  <h1>Fahrradverleih ToJO </h1>
  <p> Wir sind für sie dar</p>
</div>

<div className="navbar">
        <a onClick={() => {
                            navigate('/', {replace: false});
                        }}>Home</a>
        <a onClick={() => {
                            navigate('/Jonas', {replace: false});
                        }}>Jonas</a>
        <a href="#">Link</a>
        <a href="#" className="right">Link</a>
      </div>
</body>
  )
}

export default home