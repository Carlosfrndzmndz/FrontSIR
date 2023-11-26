// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import AdminEdificios from '../../Components/Edificios/Abm';
import AdminEmpleados from '../Roles/Admin/Empleados';
import AdminReclamos from '../Roles/Admin/Reclamos';
import AdminResidentes from '../Roles/Admin/Residentes';
import AdminUnidades from '../Roles/Admin/Unidades';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/superadmin/home" element={<SuperAdminHome />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/empleado/home" element={<EmpleadoHome />} />
      <Route path="/encargado/home" element={<EncargadoHome />} />
      <Route path="/residente/home" element={<ResidenteHome />} />
      <Route path="/admin/residentes" element={<AdminResidentes />} />
      <Route path="/admin/empleados" element={<AdminEmpleados />} />
      <Route path="/admin/reclamos" element={<AdminReclamos />} />
      <Route path="/admin/edificios/abm" element={<AdminEdificios />} />
      <Route path="/admin/unidades" element={<AdminUnidades />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
