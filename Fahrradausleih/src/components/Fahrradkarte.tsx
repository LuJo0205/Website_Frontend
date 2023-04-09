import './styles/Standort.scss';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { autocompleteClasses, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import PopupBuchen from "../components/PopupBuchen";


function Fahrradkarte( props:any) {
    const navigate = useNavigate();
    const {id,model, name, adresse} = props;
   
  
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card className='InnereKarte'>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {model}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <PopupBuchen id={id} model={model} name={name} adresse={adresse}/>
            </Button>
          </CardActions>
        </Card>  
    </Grid>
  )
}
export default Fahrradkarte