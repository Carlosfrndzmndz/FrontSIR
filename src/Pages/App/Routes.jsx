// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import NotFound from '../NotFound';
import Perfil from '../Perfil';
import RegistroPage from '../Register/nuevo';
import AdminEdificios from '../Roles/Admin/Edificio/Listado';
import AdminHome from '../Roles/Admin/Home';
import AdminReclamos from '../Roles/Admin/Reclamos';
import AdminResidentes from '../Roles/Admin/Residentes';
import AdminUnidades from '../Roles/Admin/Unidades/Listado';
import AdminUsuario from '../Roles/Admin/Usuario/Residente';
import EmpleadoEdificioAbm from '../Roles/Empleado/Edificio';
import EmpleadoHome from '../Roles/Empleado/Home';
import EmpleadoUnidades from '../Roles/Empleado/Unidades/Listado';
import EncargadoHome from '../Roles/Encargado/Home';
import ResidenteHome from '../Roles/Residentes/Home';
import ResidenteReclamos from '../Roles/Residentes/Reclamos';
import AdminAbm from '../Roles/Superadmin/Admin';
import SuperAdminHome from '../Roles/Superadmin/Home';
import LandingPage from '../landingPage';
import PrivateRoute from './PrivateRoute';
import EncargadoABM from '../Roles/Admin/Usuario/Encargado';
import AdminResidentesAbm from '../Roles/Admin/Usuario/Residente';
import EmpleadoResidentesAbm from '../Roles/Empleado/Residente';
import EmpleadoAbm from '../Roles/Admin/Usuario/Empleado';
import VerificarCodigo from '../Register/confirmarToken';
import RegistrarPassword from '../Register/RegistrarPassword';
import IngresoCorreo from '../RecuperoContraseña';
import NuevaContraseña from '../CambiarContraseña';
import HabitantesAdminListado from '../Roles/Admin/Edificio/Habitantes';
import HabitantesEmpleadoListado from '../Roles/Empleado/Edificio/Habitantes';
import HabitantesEncargadoListado from '../Roles/Encargado/Edificio/Habitantes';
import HabilitadosAdminListado from '../Roles/Admin/Edificio/Habilitados';
import InquilinosAdminListado from '../Roles/Admin/Edificio/Inquilinos';
import HabilitadosEmpleadoListado from '../Roles/Empleado/Edificio/Habilitados';
import DueniosAdminListado from '../Roles/Admin/Edificio/Duenios';
import HabilitadosEncargadoListado from '../Roles/Encargado/Edificio/Habilitados';
import InquilinosEmpleadoListado from '../Roles/Empleado/Edificio/Inquilinos';
import DueniosEmpleadoListado from '../Roles/Empleado/Edificio/Duenios';
import InquilinosEncargadoListado from '../Roles/Encargado/Edificio/Inquilinos';
import DueniosEncargadoListado from '../Roles/Encargado/Edificio/Duenios';


const AppRoutes = () => {
  return (
    <Routes>
      {/** General*/}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistroPage />} />
      <Route path="/register/verificar" element={<VerificarCodigo />} />
      <Route path="/register/password" element={<RegistrarPassword />} />
      <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
      <Route path="/recupero-password" element={<IngresoCorreo />} />
      <Route path="/recupero-password/nuevacontrasena" element={<NuevaContraseña />} />
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
      <Route path="/admin/encargados/abm" element={<PrivateRoute><EncargadoABM/></PrivateRoute>} />
      <Route path="/admin/empleados/abm" element={<PrivateRoute><EmpleadoAbm/></PrivateRoute>} />
      <Route path="/admin/residentes/abm" element={<PrivateRoute><AdminResidentesAbm/></PrivateRoute>} />
      <Route path="/admin/edificios/habitantes" element={<PrivateRoute><HabitantesAdminListado /></PrivateRoute>} />
      <Route path="/admin/edificios/habilitados" element={<PrivateRoute><HabilitadosAdminListado /></PrivateRoute>} />
      <Route path="/admin/edificios/inquilinos" element={<PrivateRoute><InquilinosAdminListado /></PrivateRoute>} />
      <Route path="/admin/edificios/duenios" element={<PrivateRoute><DueniosAdminListado /></PrivateRoute>} />




      {/** Empleado*/}
      <Route path="/empleado/home" element={<PrivateRoute><EmpleadoHome /></PrivateRoute>} />
      <Route path="/empleado/edificios/abm" element={<PrivateRoute><EmpleadoEdificioAbm /></PrivateRoute>} />
      <Route path="/empleado/unidad/abm" element={<PrivateRoute><EmpleadoUnidades/></PrivateRoute>} />
      <Route path="/empleado/edificios/habitantes" element={<PrivateRoute><HabitantesEmpleadoListado/></PrivateRoute>} />
      <Route path="/empleado/edificios/habilitados" element={<PrivateRoute><HabilitadosEmpleadoListado /></PrivateRoute>} />
      <Route path="/empleado/edificios/inquilinos" element={<PrivateRoute><InquilinosEmpleadoListado /></PrivateRoute>} />
      <Route path="/empleado/edificios/duenios" element={<PrivateRoute><DueniosEmpleadoListado /></PrivateRoute>} />




      {/** Encargado*/}
      <Route path="/encargado/home" element={<PrivateRoute><EncargadoHome /></PrivateRoute>} />
      <Route path="/empleado/residentes" element={<PrivateRoute><EmpleadoResidentesAbm /></PrivateRoute>} />
      <Route path="/encargado/edificios/habitantes" element={<PrivateRoute><HabitantesEncargadoListado /></PrivateRoute>} />
      <Route path="/encargado/edificios/habilitados" element={<PrivateRoute><HabilitadosEncargadoListado /></PrivateRoute>} />
      <Route path="/encargado/edificios/inquilinos" element={<PrivateRoute><InquilinosEncargadoListado /></PrivateRoute>} />
      <Route path="/encargado/edificios/duenios" element={<PrivateRoute><DueniosEncargadoListado /></PrivateRoute>} />
      {/** Residente*/} 
      <Route path="/residente/home" element={<PrivateRoute><ResidenteHome /></PrivateRoute>} />
      <Route path="/residente/reclamos" element={<PrivateRoute><ResidenteReclamos /></PrivateRoute>} />
      <Route path="/residente/unidades" element={<PrivateRoute><ResidenteReclamos /></PrivateRoute>} />
    </Routes>
  );
}


export default AppRoutes;
