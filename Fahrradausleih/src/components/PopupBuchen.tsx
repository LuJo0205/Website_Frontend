import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PopupBuchenInhalt from './PopupBuchenInhalt';
import { getCookie } from '../CookieHandler';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function AlertDialog(props: any) {
  const{id,model,name, adresse}= props;
  const [open, setOpen] = React.useState(false);
  const apiUlr = `http://localhost:8080/booking`;
  const [error, setError] = useState({isError: false, msg: "No Error"});
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const send = async() => {
    const date = new Date();
    let returnDate = new Date();
    returnDate.setDate(date.getDate()+7)

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userID: getCookie('id'),
                fahrradID: id,
                bookingDate: date.toISOString().substring(0,10),
                apprxReturnDate: returnDate.toISOString().substring(0,10),

            }),
        };
        const response = await fetch(apiUlr, requestOptions);
        if (!response.ok) {
            setError({isError: true, msg: `Buchung fehlgeschlagen!`});
            
        } else if (response.ok) {
            const data: any = await response.json(); 
            navigate('/ThankYouAusleihe');
        }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined"  onClick={handleClickOpen}>
        Buchen
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth= "md"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Nutzerinformationen"}
        </DialogTitle>
        <DialogContent>
          <PopupBuchenInhalt id={id} model={model} name={name} adresse={adresse}/>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Abbrechen</Button>
          <Button  onClick={send} autoFocus>
            Buchen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}