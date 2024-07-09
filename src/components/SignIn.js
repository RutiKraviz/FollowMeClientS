import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService';

export default function SignInComp() {
  const [userDetails, setUserDetails] = useState({
    id: '',
    firstName: '',
    lastName: '',
    password: '',
    roleId: 0,
    email: '',
    stationId: 0
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSignIn = async () => {
    try {
      await dispatch(signIn(userDetails)).then(() => {
        navigate('/Login');
      }).catch(error => {
        console.error('Sign-in error:', error);
      });
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        הרשמה
      </Typography>
      <Stack spacing={2}>
        <TextField 
          label='ת.ז.' 
          name='id'
          variant='outlined' 
          fullWidth 
          value={userDetails.id} 
          onChange={handleInputChange} 
        />
        <TextField 
          label='שם פרטי' 
          name='firstName'
          variant='outlined' 
          fullWidth 
          value={userDetails.firstName} 
          onChange={handleInputChange} 
        />
        <TextField 
          label='שם משפחה' 
          name='lastName'
          variant='outlined' 
          fullWidth 
          value={userDetails.lastName} 
          onChange={handleInputChange} 
        />
        <TextField 
          label='סיסמה' 
          name='password'
          type='password'
          variant='outlined' 
          fullWidth 
          value={userDetails.password} 
          onChange={handleInputChange} 
        />
        <TextField 
          label='מייל' 
          name='email'
          variant='outlined' 
          fullWidth 
          value={userDetails.email} 
          onChange={handleInputChange} 
        />
        <TextField 
          label='מספר תחנה - עד 30' 
          name='stationId'
          type='number'
          variant='outlined' 
          fullWidth 
          value={userDetails.stationId} 
          onChange={handleInputChange} 
        />
        <Button 
          variant='contained' 
          color='primary' 
          onClick={handleSignIn}>
          הרשמה
        </Button>
      </Stack>
    </Container>
  );
}
