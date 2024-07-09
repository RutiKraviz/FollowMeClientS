import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../services/authService';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mess } = useParams();
  const isUser = useSelector(state => state.auth.isUser);

  useEffect(() => {
    if (isUser) {
      navigate('/Map');
    }
  }, [isUser, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const inLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    dispatch(logIn(user))
      .catch(error => {
        setErrorMessage("Login failed. Please check your credentials and try again.");
        console.error("Login failed", error);
        // navigate('/Login/noLog');
      });
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
      onSubmit={inLogin}
    >
      <Typography variant='h5' gutterBottom>
        Login
      </Typography>
      <TextField
        label='Username'
        name='username'
        variant='outlined'
        fullWidth
        margin='normal'
        value={user.username}
        onChange={handleInputChange}
      />
      <TextField
        label='Password'
        type='password'
        name='password'
        variant='outlined'
        fullWidth
        margin='normal'
        value={user.password}
        onChange={handleInputChange}
      />
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
        Login
      </Button>
      {/* {errorMessage && (
        <Typography style={{ color: 'red', textAlign: 'center' }}>
          {errorMessage}
          Move to  <a href='/SignIn/'>signin</a>
        </Typography>
      )} */}
      {errorMessage && (
        <Typography style={{ fontFamily: 'Segoe Print, Arial', textAlign: 'center', color: 'gray' }}>
          Before enter, you have to <a href='/SignIn/'>Sign in</a>
        </Typography>
      )}
    </Stack>
  );
}
