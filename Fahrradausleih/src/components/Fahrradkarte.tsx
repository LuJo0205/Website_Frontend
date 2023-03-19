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
import PopupBuchen from "../components/PopupBuchen";






function Fahrradkarte( props:any) {
    const navigate = useNavigate();
    const {id,model} = props;
    const ColoredLine = ({  }) => (
      <hr
          style={{
              color: "#1976d2",
              backgroundColor: "#1976d2",
              height: 30
          }}
      />
  );
  
  return (
    <Grid item xs={3} >
        <Card className='InnereKarte'>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {model}
                      </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            <PopupBuchen/>
                        </Button>
                    </CardActions>
                  </Card>  
    </Grid>
  )
}
export default Fahrradkarte