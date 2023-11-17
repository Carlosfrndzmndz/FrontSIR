// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';
import Perfil from '../Perfil';
import AdminHome from '../Admin/Home';
import ResidenteHome from '../Residentes/Home';
import AdminReclamos from '../Admin/Reclamos';
import AdminResidentes from '../Admin/Residentes';
import AdminEmpleados from '../Admin/Empleados';
import AdminEdificios from '../Admin/Edificios';
import AdminUnidades from '../Admin/Unidades';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/residente/home" element={<ResidenteHome />} />
      <Route path="/admin/residentes" element={<AdminResidentes />} />
      <Route path="/admin/empleados" element={<AdminEmpleados />} />
      <Route path="/admin/reclamos" element={<AdminReclamos />} />
      <Route path="/admin/edificios" element={<AdminEdificios />} />
      <Route path="/admin/unidades" element={<AdminUnidades />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
