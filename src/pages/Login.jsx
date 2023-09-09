import { logIn } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Box sx={{ width: '450px' }}>
        <form autoComplete="off" onSubmit={handleLogin}>
          <h2>Please login</h2>
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
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
