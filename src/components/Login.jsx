import React, { useState } from 'react';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Container, TextField, Button } from '@mui/material';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Reset error messages
    setUsernameError('');
    setPasswordError('');

    // Validate username
    if (!username.match(/[!@#$%^&*(),.?":{}|<>]/) || !username.match(/[A-Z]/)) {
      setUsernameError('Username must contain at least one special character and one uppercase letter.');
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError('Password must be at least eight characters long.');
    }
  };

  return (
    <div className="login-background">
      <Container maxWidth='xs' className="login-container" style={{ maxWidth: '300px' }}>
        <h2>Login Page</h2>
        <div className="input-container">
          <AccountCircle className="input-icon" />
          <TextField 
            variant="outlined" 
            fullWidth 
            label="Username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </div>
        {usernameError && <div className="error">{usernameError}</div>}
        <div className="input-container">
          <Lock className="input-icon" />
          <TextField 
            variant="outlined" 
            fullWidth 
            label="Password" 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
        {passwordError && <div className="error">{passwordError}</div>}
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} component={Link} to="/doption">
          Login
        </Button>
      </Container>
    </div>
  );
}

export default Login;
