import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AHome from '../components/AHome';
import Login from '../components/Login';
import Doption from '../components/Doption';
const App = () => {
    return (
  
        <Routes>
          <Route path="/" element={<AHome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/doption" element={<Doption/>} />
        </Routes>
    );
  };
  
  export default App;
