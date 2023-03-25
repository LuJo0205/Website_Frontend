import './styles/Standort.scss';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { autocompleteClasses, CardActionArea, CardActions, InputLabel, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { useQuery } from 'react-query';
import "./Fahrradkarte.tsx"
import Fahrradübersicht from './Fahrradübersicht';
import { Col, FormControl } from 'react-bootstrap';
import { getCookie } from '../CookieHandler';
import ColoredLine from './ColoredLine';
import { useState } from 'react';



function RückgabeElement(props:any) {
    const {model, preis,id}= props;
    const [standort,setStandort]: any = useState("");
    const navigate = useNavigate();

    const api = "http://127.0.0.1:8080/standort"       
    const standorte = useQuery("unsereStandorte", () =>
          fetch(api).then((res) => res.json()

          )

    );   
    
    
    const rückgabe = async() => {
        

        const api2 = "http://127.0.0.1:8080/booking/return/"+id+"/"+standort  
        
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(api2, requestOptions);
        if (!response.ok) {
            
            
        } else if (response.ok) {
            const data: any = await response.json(); 
            navigate('/ThankYou');
        }
        

    }
          
    

    return(
   
   
       <>
            <Grid item xs={6} className="picture" spacing={5}>
              <img src="{s.pictureLink}" alt="Avatar" className="image"> 
              </img>

            </Grid>
            <Grid item xs={6}  >
                <Card className='Karte'>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Informationen über das Fahrrad
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Model: {model}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Preis: {preis}
                    </Typography>
                    
                    
                        <InputLabel id="demo-simple-select-label">Rückgabestandort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value= {standort}
                                label="Age"
                                onChange={(event)=>setStandort(event.target.value)}
                            >

                                {standorte?.data?.map(
                                            (s:any)=>(
  
                                                <MenuItem value={s.id}>{s.name}</MenuItem>

                                            )

                                            )}

                            </Select>
                    
                    
                  </CardContent>
                  <CardActions>
                        <Button size="small" color="primary" onClick={rückgabe}>
                            Rückgabe
                        </Button>
                    </CardActions>
                </Card>               
            </Grid>

            <Grid item xs={12}>
               <ColoredLine></ColoredLine>
            </Grid>


       </>   	
    )                    

                               
          
    
  
}
export default RückgabeElement

