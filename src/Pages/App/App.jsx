import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';
const App = () => {

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
