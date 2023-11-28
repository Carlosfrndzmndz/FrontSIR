import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';
const EncargadoNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/encargado/home' className="navbar-brand" style={{ marginLeft: '20px' }}>
                <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">   
                <NavDropdown title="Reclamos" id="basic-nav-dropdown">
                    <NavDropdown.Item><NavLink to='/encargado/reclamos/abm' className="nav-link">ABM</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/encargado/reclamos/dashboard' className="nav-link">Dashboard</NavLink></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink to='/perfil' className='nav-link'>Perfil</NavLink>
                    <NavLink to='/' className='nav-link'><LogoutIcon/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default EncargadoNavbar