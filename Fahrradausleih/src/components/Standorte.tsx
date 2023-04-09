import './styles/Standort.scss';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { autocompleteClasses, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { useQuery } from 'react-query';
import "./Fahrradkarte.tsx"
import Fahrradübersicht from './Fahrradübersicht';


function Standort() {
    const navigate = useNavigate();

    const ColoredLine = ({  }) => (
      <hr
          style={{
              color: "#1976d2",
              backgroundColor: "#1976d2",
              height: 30
          }}
      />
  );
  const api = "http://127.0.0.1:8080/standort"       
  const standortData = useQuery("Standorte", () =>
        fetch(api ).then((res) => res.json())
    );        

  return (

    <body>                  
        <Grid container xs={12}  spacing={5} className="fullGrid" >
            {standortData?.data?.map(
              (s:any)=>(
                <>
                  <Grid item xs={6} className="picture" spacing={5}>
              <img src={s.pictureLink} alt="Avatar" className="image"> 
              </img>
              
            </Grid>
            <Grid item xs={6}  >
              <Grid item xs={12} >
                <Card className='Karte'>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Informationen über den Standort
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Standort: {s.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Adresse: {s.adresse}
                    </Typography>
                  </CardContent>
                  <CardActions>
                        <Button href={`https://www.google.de/maps/@${s.latitude},${s.longitude},18.75z`} target="_blank" size="medium" color="primary">
                         Google Maps
                        </Button>
                  </CardActions>
                </Card>               
              </Grid>
              <Fahrradübersicht standort={s.id} name={s.name} adresse={s.adresse}/>
            </Grid>
            <Grid item xs={12}>
               <ColoredLine></ColoredLine>
            </Grid>         
            </>
          )

          )}
        </Grid>                       
    </body>
  )
}
export default Standort