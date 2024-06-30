// src/components/Login.js
import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from "@mui/material/Stack";

export default function Login() {
  const navigate = useNavigate();
  const {mess}=useParams();
  const Login = () => {
    navigate('/Map');
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
    onSubmit={(event) => Login(event)}
  >
      <Typography variant='h5' gutterBottom>
        Login
      </Typography>
      <TextField label='Username' variant='outlined' fullWidth margin='normal' />
      <TextField label='Password' type='password' variant='outlined' fullWidth margin='normal' />
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
           Login
        </Button>
        {mess === "noLog" && <h1 style={{ fontFamily: 'Segoe Print,Arial',textAlign:'center', color:'gray'}}>before signIn, you have to log in</h1>}

 </Stack>
)}