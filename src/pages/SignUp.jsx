import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    dispatch(register({ email, password, name }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Box sx={{ width: '450px' }}>
        <h2> Please sign up!</h2>
        <form autoComplete="off" onSubmit={handleRegister}>
          <TextField
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={name}
            onChange={event => setName(event.target.value)}
            label="Enter your name"
            required
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            required
            variant="outlined"
            color="secondary"
            fullWidth
            placeholder="Please enter your email"
            sx={{ mb: 3 }}
            label="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <TextField
            type="password"
            name="password"
            placeholder="Please enter your password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Enter your password"
            required
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            sx={{ width: '450px' }}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Sign UP
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
