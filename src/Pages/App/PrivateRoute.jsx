import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token'); // Ajusta según tu lógica de autenticación

  if (!isAuthenticated) {
    // Redirige a la página de inicio de sesión, guardando la ubicación actual
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
