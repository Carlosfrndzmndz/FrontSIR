import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
const EmpleadoNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/empleado/home' className="navbar-brand" style={{ marginLeft: '20px' }}>
                <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to='/empleado/residentes' className='nav-link'>
                        Residentes
                    </NavLink>
                    <NavLink to='/empleado/empleados' className='nav-link'>
                        Empleados
                    </NavLink>
                    <NavLink to='/empleado/reclamos' className='nav-link'>
                        Reclamos
                    </NavLink>
                    <NavDropdown title="Edificios" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/abm' className="nav-link">Listado de edificios</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/habilitados' className="nav-link">Habilitados por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/duenos' className="nav-link">Dueños por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/habitantes' className="nav-link">Habitantes por edificio</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gestionar Unidad" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/abm' className="nav-link">Listado de unidades</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/transferencia-unidad' className="nav-link">Transferencia de unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/alquiler' className="nav-link">Alquiler de unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/liberar' className="nav-link">Liberar unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/habitar' className="nav-link">Habitar unidad</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/agregar-dueno' className="nav-link">Agregar Dueño</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/unidad/agregar-inquilino' className="nav-link">Agregar inquilino</NavLink>
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

export default EmpleadoNavbar;
