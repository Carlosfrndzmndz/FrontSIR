import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuperAdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/superadmin/home' className="navbar-brand">
                SIR
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item><NavLink to='/superadmin/admin/abm' className="nav-link">ABM</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to='/superadmin/admin/dashboard' className="nav-link">Dashboard</NavLink></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink to='/perfil' className='nav-link'>Perfil</NavLink>
                    <NavLink to='/' className='nav-link'>Salir</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default SuperAdminNavbar;
