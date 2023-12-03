// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LandingPage from '../landingPage';
import Login from '../Login';
import NotFound from '../NotFound';
import Perfil from '../Perfil';
import Register from '../Register';
import SuperAdminHome from '../Roles/Superadmin/Home';
import AdminHome from '../Roles/Admin/Home';
import EmpleadoHome from '../Roles/Empleado/Home';
import EncargadoHome from '../Roles/Encargado/Home';
import ResidenteHome from '../Roles/Residentes/Home';
import AdminEdificios from '../Roles/Admin/Edificio';
import AdminUsuario from '../Roles/Admin/Usuario';
import AdminReclamos from '../Roles/Admin/Reclamos';
import AdminResidentes from '../Roles/Admin/Residentes';
import AdminUnidades from '../Roles/Admin/Unidades';
import EmpleadoEdificioAbm from '../Roles/Empleado/Edificio';
import AdminAbm from '../Roles/Superadmin/Admin';
import ResidenteReclamos from '../Roles/Residentes/Reclamos';
import EmpleadoUnidades from '../Roles/Empleado/Unidades';

const AppRoutes = () => {
  return (
    <Routes>
      {/** General*/}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />

      {/** SuperAdmin*/} 
      <Route path="/superadmin/home" element={<PrivateRoute><SuperAdminHome /></PrivateRoute>} />
      <Route path="/superadmin/admin/abm" element={<PrivateRoute><AdminAbm/></PrivateRoute>} />
      <Route path="/superadmin/admin" element={<PrivateRoute><SuperAdminHome/></PrivateRoute>} />

      {/** Admin*/}
      <Route path="/admin/home" element={<PrivateRoute><AdminHome /></PrivateRoute>} />
      <Route path="/admin/residentes" element={<PrivateRoute><AdminResidentes /></PrivateRoute>} />
      <Route path="/admin/usuario" element={<PrivateRoute><AdminUsuario /></PrivateRoute>} />
      <Route path="/admin/reclamos" element={<PrivateRoute><AdminReclamos /></PrivateRoute>} />
      <Route path="/admin/edificios/abm" element={<PrivateRoute><AdminEdificios /></PrivateRoute>} />
      <Route path="/admin/unidad/abm" element={<PrivateRoute><AdminUnidades /></PrivateRoute>} />
      <Route path="/admin/unidades/transferencia-unidad" element={<PrivateRoute><AdminUnidades /></PrivateRoute>} />
      
      

      {/** Empleado*/}
      <Route path="/empleado/home" element={<PrivateRoute><EmpleadoHome /></PrivateRoute>} />
      <Route path="/empleado/edificios/abm" element={<PrivateRoute><EmpleadoEdificioAbm /></PrivateRoute>} />
      <Route path="/empleado/unidad/abm" element={<PrivateRoute><EmpleadoUnidades/></PrivateRoute>} />

      {/** Encargado*/}
      <Route path="/encargado/home" element={<PrivateRoute><EncargadoHome /></PrivateRoute>} />
      <Route path="/encargado/reclamos" element={<PrivateRoute><EncargadoHome /></PrivateRoute>} />

      {/** Residente*/}
      <Route path="/residente/home" element={<PrivateRoute><ResidenteHome /></PrivateRoute>} />
      <Route path="/residente/reclamos" element={<PrivateRoute><ResidenteReclamos /></PrivateRoute>} />
      <Route path="/residente/unidades" element={<PrivateRoute><ResidenteReclamos /></PrivateRoute>} />
    </Routes>
  );
}

export default AppRoutes;
