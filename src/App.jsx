import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Local Imports
import './index.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
