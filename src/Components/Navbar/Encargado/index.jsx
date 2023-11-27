import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EncargadoNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/encargado/home' className="navbar-brand">
                SIR
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to='/encargado/residentes' className='nav-link'>
                        Residentes
                    </NavLink>
                    <NavLink to='/encargado/reclamos' className='nav-link'>
                        Reclamos
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink to='/perfil' className='nav-link'>Perfil</NavLink>
                    <NavLink to='/' className='nav-link'>Salir</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default EncargadoNavbar