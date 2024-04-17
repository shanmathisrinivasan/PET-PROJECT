import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AHome.css';
import { Button, AppBar, Toolbar, Container, Typography, Card, CardContent } from '@mui/material';

const AHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <AppBar className="app-bar" position="static" style={{ backgroundColor: 'rgba(188,143,143)' }}>
        <Toolbar>
          <div className="app-bar-buttons">
            <Button color="inherit" component={Link} to="/login" className="login-button">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="background">
        <h1>Pets & Paws</h1>
      </div>
    </div>
  );
}

export default AHome;
