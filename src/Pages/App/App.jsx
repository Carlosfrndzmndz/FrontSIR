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

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
