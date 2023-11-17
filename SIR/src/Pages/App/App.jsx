import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';
import AdminNavbar from '../../Components/AdminNavbar';

const App = () => {
  return (
    <Router>
      <AppRoutes />
      <AdminNavbar />
    </Router>
  );
}

export default App;
