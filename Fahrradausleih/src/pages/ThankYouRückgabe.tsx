
import './styles/ThankYou.scss';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/material';
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ThankYouRückgabe(){

    const navigate = useNavigate();

    
    var count = 200;

    var defaults = {
    origin: { y: 0.7 }
    };

    function fire(particleRatio: any, opts: any) {
        // @ts-ignore:next-line
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    return(
        <>
        <Header/>
        <NavBar/>
        <Container sx={{margin: "20px"}}>
            <h2 className='home-header'>Danke für Ihre Rückgabe!</h2>
        </Container>
        <Footer/>
        </>
    )
}

export default ThankYouRückgabe;