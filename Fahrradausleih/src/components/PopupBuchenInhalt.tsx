import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogTitle } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '43ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-helperText"
          label="Nachname"
          defaultValue="Name"
          
        />
         <TextField
          id="outlined-helperText"
          label="Vorname"
          defaultValue="Name"
          
        />
         <TextField
          id="outlined-helperText"
          label="E-Mail"
          defaultValue="Name"
          
        />
         <TextField
          id="outlined-helperText"
          label="Stadt"
          defaultValue="Name"
          
        />
         <TextField
          id="outlined-helperText"
          label="Straße"
          defaultValue="Name"
          
        />
         <TextField
          id="outlined-helperText"
          label="Hausnummer"
          defaultValue="Name"
          
        />
        <DialogTitle id="alert-dialog-title">
          {"Buchungsdetails"}
        </DialogTitle>

        <TextField
          id="outlined-helperText"
          label="Modell"
          defaultValue="Name"
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Preis"
          defaultValue="Name"
          InputProps={{
            readOnly: true,
          }}
        />
       
         <TextField
          id="outlined-helperText"
          label="Stadtion"
          defaultValue="entspricht name bei standort"
          InputProps={{
            readOnly: true,
          }}
         /> 

        <TextField
          id="outlined-helperText"
          label="Adresse"
          defaultValue="Name"
          InputProps={{
            readOnly: true,
          }}
          
        />
      </div>
    </Box>
  );
}