import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Update } from '../services/authService';
// import { useNavigate } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import { Autocomplete } from '@react-google-maps/api';

export default function UserProfile() {
  // הגדרת משתנים סטייט לכל פרט משתמש
  const user = useSelector( state => state.currentUser);
  const isUser = useSelector( state => state.isUser);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setFullAddress(autocomplete.getPlace().formatted_address);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const handleUpdeteUser = (e) => {
    e.preventDefault();
    console.log(`Details saved: firstName: ${firstName}, lastName: ${lastName}, address: ${fullAddress}, email: ${email}`);
    dispatch(Update(e));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate('/Map');
  };


  return (
    <Stack
    component="form"
    sx={{
      width: "50ch",
      "& .MuiTextFieldRoot": { m: 1, width: "25ch" },
      alignContent: "center",
      position: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    }}
    spacing={2}
    noValidate
    autoComplete="off"
    onSubmit={(event) => handleUpdeteUser(event)}
  >
   
       <Typography variant='h5' gutterBottom>
        Update User Profile
      </Typography>
      <TextField label='FirstName' variant='outlined' fullWidth margin='normal' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <TextField label='LastName' variant='outlined' fullWidth margin='normal' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {/* <Autocomplete label='FullAddress' variant='outlined' fullWidth margin='normal' value={fullAddress} onChange={(e) => setFullAddress(e.target.value)} /> */}
      {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} options={{ types: ['(regions)'] }}> */}
        <TextField label="FullAddress" variant="outlined" fullWidth margin="normal" value={fullAddress} onChange={(e)=> setFullAddress(e.target.value)} InputLabelProps={{shrink: true,}}/>
      {/* </Autocomplete> */}
      <TextField label='Email' variant='outlined' fullWidth margin='normal' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button
          sx={{
            alignContent: "center",
            position: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            borderWidth: "2px",
            marginTop: "14px",
          }}
          variant="outlined"
          type="submit"
          color="third"
        >
          update
        </Button>,
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle textAlign={'center'} id='alert-dialog-title'>
        {'Update Details'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Your details have been successfully saved!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}