import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';
import LandingPage from '../landingPage';
import LandingNavbar from "../../Components/Navbar/Landing";
import AdminNavbar from "../../Components/Navbar/Admin";
import ResidenteNavbar from "../../Components/Navbar/Residente";
import EmpleadoNavbar from "../../Components/Navbar/Empleado";
import EncargadoNavbar from "../../Components/Navbar/Encargado";

const App = () => {
  const renderNavbar = () => {
    const navbarType = getNavbarType();
    console.log(navbarType);
    switch (navbarType) {
      case 'home':
        return <LandingNavbar />;
      case 'admin':
        return <AdminNavbar />;
      case 'residente':
        return <ResidenteNavbar />;
      case 'empleado':
        return <EmpleadoNavbar />;
      case 'encargado':
        return <EncargadoNavbar />;
      default:
        return <LandingNavbar />;
    }
  };

  const getNavbarType = () => {
    const path = window.location.pathname;
    if (path === '/') {
      return 'home';
    }
    else if (path.startsWith('/admin')) {
      return 'admin';
    } else if (path.startsWith('/residente')) {
      return 'residente';
    }
    else if (path.startsWith('/empleado')) {
      return 'empleado';
    }
    else if (path.startsWith('/encargado')) {
      return 'encargado';
    }
    else {
      return 'home';
    }
  };
  return (
    <Router>
      <AppRoutes />
      <LandingPage />
      {renderNavbar()}
    </Router>
  );
}

export default App;
