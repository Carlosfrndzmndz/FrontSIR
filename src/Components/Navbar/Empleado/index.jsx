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
                    <NavDropdown title="Edificios" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/abm' className="nav-link">Listado de edificios</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/habilitados' className="nav-link">Habilitados por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/duenios' className="nav-link">Dueños por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/inquilinos' className="nav-link">Inquilinos por edificio</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/empleado/edificios/habitantes' className="nav-link">Habitantes por edificio</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to='/empleado/unidad/abm' className="nav-link">Gestionar Unidad</NavLink>
                    <NavLink to='/empleado/residentes' className='nav-link'>
                        Residentes
                    </NavLink>
                    <NavLink to='/empleado/reclamos' className='nav-link'>
                        Reclamos
                    </NavLink>
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
