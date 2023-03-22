import './styles/Standort.scss';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { autocompleteClasses, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { useQuery } from 'react-query';
import "./Fahrradkarte.tsx"
import Fahrradübersicht from './Fahrradübersicht';
import { Col } from 'react-bootstrap';


function Rückgabekomponenten() {
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
  const api = "http://127.0.0.1:8080/fahrrad"       
  const fahrradData = useQuery("Fahrrad", () =>
        fetch(api ).then((res) => res.json())
    );        

  return (

    <body>
      
                  
    
        <Grid container xs={12}  spacing={5} className="fullGrid" >
            {fahrradData?.data?.map(
              (s:any)=>(
                <>
                  <Grid item xs={6} className="picture" spacing={5}>
              <img src="{s.pictureLink}" alt="Avatar" className="image"> 
              </img>
              
            </Grid>
            <Grid item xs={6}  >
              <Grid item xs={12} >
                <Card className='Karte'>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Informationen über das Fahrrad
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Model: {s.model}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Preis: {s.price}
                    </Typography>
                  </CardContent>
                </Card>               
              </Grid>
              
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
export default Rückgabekomponenten