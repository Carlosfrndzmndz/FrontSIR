import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';
import LandingNavbar from "../../Components/Navbar/Landing";
import AdminNavbar from "../../Components/Navbar/Admin";
import ResidenteNavbar from "../../Components/Navbar/Residente";
import EmpleadoNavbar from "../../Components/Navbar/Empleado";
import EncargadoNavbar from "../../Components/Navbar/Encargado";

const App = () => {
  const [navbarType, setNavbarType] = useState('home');

  const getNavbarType = () => {
    const path = window.location.pathname;
    if (path === '/') {
      return 'home';
    } else if (path.startsWith('/admin')) {
      return 'admin';
    } else if (path.startsWith('/residente')) {
      return 'residente';
    } else if (path.startsWith('/empleado')) {
      return 'empleado';
    } else if (path.startsWith('/encargado')) {
      return 'encargado';
    } else {
      return 'home';
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    setNavbarType(getNavbarType());
  }, [window.location.pathname]);

  const renderNavbar = () => {
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

  return (
    <Router>
      <AppRoutes />
      {renderNavbar()}
    </Router>
  );
}

export default App;
