import Grid from '@mui/material/Grid'; 
import LanguageIcon from '@mui/icons-material/Language';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import "./styles/Icons.scss";


function HomeIcons() {

  return (
      
     <Grid container xs={12} spacing={5} className='Abstand'>
        <Grid item xs={12}>
            <Grid container xs={12} >
                <Grid item xs={4} >
                    <Grid container xs={12}>
                        <Grid item xs={12} >
                            <LanguageIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Wir sind ein multikultureles Team und sind jederzeit für Sie da.</h3>
                        </Grid>
                    </Grid>    
                </Grid>
                <Grid item xs={4}>
                    <Grid container xs={12}>
                        <Grid item xs={12}  >
                            <PedalBikeIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Unsere Räder sind Made in Germany und besitzen die Straßenverkehrszulassung. </h3>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container xs={12}>
                        <Grid item xs={12}  >
                            <ConstructionIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Tägliche Kontrolle und Instandhaltung des Fuhrparks durch unser Serviceteam vor Ort.</h3>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>   
        </Grid>    

        <Grid item xs={12}>
            <Grid container xs={12} >
                <Grid item xs={4} >
                    <Grid container xs={12} className=''>
                        <Grid item xs={12} >
                            <LocationOnIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Unsere Fahrräder sind an den wichtigsten Orten in Mannheim erhältlich.</h3>
                        </Grid>
                    </Grid>    
                </Grid>
                <Grid item xs={4}>
                    <Grid container xs={12}>
                        <Grid item xs={12}  >
                            <HeadsetMicIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Unser Kundensupport versucht Ihre Anliegen so schnell wie möglich zu bearbeiten.</h3>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container xs={12}>
                        <Grid item xs={12}  >
                        <PublishedWithChangesIcon sx={{ fontSize: 100 }} className='Icon'/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 className='TextPosition'>Schnelle und unkompliziierte Ausleihe bzw. Rückgabe. </h3>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>   
        </Grid>    
    </Grid>
      
    
    
  )
}
export default HomeIcons