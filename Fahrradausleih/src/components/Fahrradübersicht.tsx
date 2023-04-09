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
import Fahrradkarte from './Fahrradkarte';


function Fahrradübersicht( props:any) {
    const {standort, name, adresse}=props;
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
  const api = "http://127.0.0.1:8080/standort/"+standort+"/fahrraeder"       
  const fahrradData = useQuery("Fahrrad"+standort, () =>
        fetch(api ).then((res) => res.json())
    );        

  return (

    <Grid container xs={12}  className="test">
                {fahrradData?.data?.map(
                    (s:any)=>(
                         <Fahrradkarte id={s.id} model={s.model} name={name} adresse={adresse}/>
                    )
                )}
    </Grid> 
    
  )
}
export default Fahrradübersicht