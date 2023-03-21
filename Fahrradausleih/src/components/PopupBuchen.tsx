import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PopupBuchenInhalt from './PopupBuchenInhalt';




export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
          <PopupBuchenInhalt/>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Abbrechen</Button>
          <Button  onClick={handleClose} autoFocus>
            Buchen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}