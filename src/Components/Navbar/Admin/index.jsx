import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const AdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="/admin/home" style={{ marginLeft: '20px' }}>
                <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Gestionar Unidad" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/abm' className="nav-link">Listado de unidades</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/transferencia-unidad' className="nav-link">Transferencia de unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/alquiler' className="nav-link">Alquiler de unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/liberar' className="nav-link">Liberar unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/habitar' className="nav-link">Habitar unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/agregar-dueno' className="nav-link">Agregar Dueño</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/unidad/agregar-inquilino' className="nav-link">Agregar inquilino</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Edificios" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/admin/edificios/abm' className="nav-link">Listado de edificios</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/edificios/habilitados' className="nav-link">Habilitados por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/edificios/duenos' className="nav-link">Dueños por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/edificios/habitantes' className="nav-link">Habitantes por edificio</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/admin/residentes/abm' className="nav-link">Residentes</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/empleados/abm' className="nav-link">Empleados</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/encargados/abm' className="nav-link">Encargados</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reclamos" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/admin/reclamos/lista' className="nav-link">Lista de Reclamos</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/admin/reclamos/nuevo' className="nav-link">Nuevo Reclamo</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink to='/perfil' className='nav-link'><PersonIcon/></NavLink>
                    <NavLink to='/' className='nav-link'><LogoutIcon/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AdminNavbar;
