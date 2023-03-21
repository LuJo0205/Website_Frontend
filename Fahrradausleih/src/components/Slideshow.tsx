import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles/Slideshow.css'

const Slideshow = () => {
    const images = [
        "https://moselbike.de/img/main_img2.jpg",
        "https://www.visit-mannheim.de/extension/portal-mannheim/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800/sehen-und-erleben/sehenswertes/wasserturm/mannheim_merian_titelbild_wasserturm_-c-merian_philip-koschel_2100x1050px-web/1075465-6-ger-DE/mannheim_merian_titelbild_wasserturm_-c-merian_philip-koschel_2100x1050px-web.jpg",
        "https://www.umweltbundesamt.de/sites/default/files/medien/376/bilder/fahrradfahren_bildautor_zozzzzo_fotolia_107428778_m_0.jpg",
    ];

    return (
       <div className='slideshow-container'>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
        </Slide>
        </div> 
    );
};

export default Slideshow;