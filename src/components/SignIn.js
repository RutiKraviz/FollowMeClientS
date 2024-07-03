import React, {useState} from 'react';
import { Button, TextField, Typography, Container} from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
const  isUser=useSelector(state=>state.isUser)
  const handleSignIn = async () => {
    try {
      const user = {user:username,password:password}
      dispatch(SignIn(user));
      // Redirect to dashboard or do something else upon successful sign-in
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error, e.g., show error message to user
    }
  };
  if (!isUser)
  return <Navigate to={`/Login/noLog`} replace/>
  
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        Sign In
      </Typography>
      <TextField label='Username' variant='outlined' fullWidth margin='normal' value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        fullWidth
        margin='normal'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant='contained' color='primary' onClick={handleSignIn}>
        Sign In
      </Button>
    </Container>
  );
}
