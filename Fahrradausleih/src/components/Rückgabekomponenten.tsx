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
import { getCookie } from '../CookieHandler';
import RückgabeElement from './RückgabeElement';


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


  const userID= getCookie('id');
  
  const api = "http://127.0.0.1:8080/users/"+ userID +"/bookings"       
  const buchungen = useQuery("aktiveBuchung", () =>
          fetch(api).then((res) => res.json()

          )

    );        

  return (

    <>
        <Grid container xs={12}  spacing={5} className="fullGrid" >
            {buchungen?.data?.map(
              (s:any)=>(
                <>
                
                  {s.aktiv?(<RückgabeElement model={s.vo.model}  id={s.id}/>):(<></>)}
  
            
                </>
              )

            )}
          	
        </Grid>                       

                               
          
    </>
  )
}
export default Rückgabekomponenten