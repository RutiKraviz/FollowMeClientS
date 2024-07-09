import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Update } from '../services/authService';
import Stack from "@mui/material/Stack";

export default function UserProfile() {
  const user = useSelector(state => state.auth.currentUser);
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [fullAddress, setFullAddress] = useState(user.fullAddress || '');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, firstName, lastName, email, fullAddress };
    dispatch(Update(updatedUser));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      onSubmit={handleUpdateUser}
    >
      <Typography variant='h5' gutterBottom>
        Update User Profile
      </Typography>
      <TextField label='FirstName' variant='outlined' fullWidth margin='normal' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <TextField label='LastName' variant='outlined' fullWidth margin='normal' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <TextField label='FullAddress' variant='outlined' fullWidth margin='normal' value={fullAddress} onChange={(e) => setFullAddress(e.target.value)} />
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
        color="primary"
      >
        Update
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle textAlign={'center'} id='alert-dialog-title'>
          {'Update Details'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Your details have been successfully saved!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
