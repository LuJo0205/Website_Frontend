import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogTitle } from '@mui/material';
import { useQuery } from 'react-query';
import { getCookie } from '../CookieHandler';

export default function FormPropsTextFields(props: any) {

 const{id, preis, model, name, adresse}= props;

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
          defaultValue= {getCookie('name')}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Vorname"
          defaultValue={getCookie('firstname')}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="E-Mail"
          defaultValue={getCookie('email')}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Stadt"
          defaultValue={getCookie('city')}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Straße"
          defaultValue={getCookie('street')}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Hausnummer"
          defaultValue={getCookie('number')}
          InputProps={{
            readOnly: true,
          }}
          
        />
        <DialogTitle id="alert-dialog-title">
          {"Buchungsdetails"}
        </DialogTitle>

        <TextField
          id="outlined-helperText"
          label="Modell"
          defaultValue={model}
          InputProps={{
            readOnly: true,
          }}
          
        />
         <TextField
          id="outlined-helperText"
          label="Preis"
          defaultValue={preis}
          InputProps={{
            readOnly: true,
          }}
        />
       
         <TextField
          id="outlined-helperText"
          label="Stadtion"
          defaultValue={name}
          InputProps={{
            readOnly: true,
          }}
         /> 

        <TextField
          id="outlined-helperText"
          label="Adresse"
          defaultValue={adresse}
          InputProps={{
            readOnly: true,
          }}
          
        />
      </div>
    </Box>
  );
}