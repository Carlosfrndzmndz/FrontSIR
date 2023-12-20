import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { refreshToken } from '../../Context/Auth';

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentDate = new Date();
    return decoded.exp < currentDate.getTime() / 1000;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token || isTokenExpired(token)) {
        if (token) {
          try {
            const refreshedToken = await refreshToken(token);
            if (refreshedToken) {
              setIsAuthenticated(true);
            } else {
              localStorage.removeItem('token');
              setIsAuthenticated(false);
            }
          } catch (error) {
            console.error('Error refreshing token:', error);
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    verifyToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
