import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';

const AdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/admin/home' className="navbar-brand" style={{ marginLeft: '20px' }}>
                <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to='/admin/residentes' className='nav-link'>
                        Residentes
                    </NavLink>
                    <NavLink to='/admin/empleados' className='nav-link'>
                        Empleados
                    </NavLink>
                    <NavDropdown title="Edificios" id="basic-nav-dropdown">
                        <NavDropdown.Item><NavLink to='/admin/edificios/abm' className="nav-link">ABM</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to='/admin/edificios/dashboard' className="nav-link">Dashboard</NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to='/admin/unidades' className='nav-link'>
                        Unidades
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink to='/perfil' className='nav-link'>Perfil</NavLink>
                    <NavLink to='/' className='nav-link'><LogoutIcon/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AdminNavbar;
