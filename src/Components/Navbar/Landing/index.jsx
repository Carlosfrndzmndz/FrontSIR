import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg'
import LoginIcon from '@mui/icons-material/Login';

const LandingNavbar = () => {
    //const activeStyle = 'underline bold underline-offset-4'
    return (
        // <nav  className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
        <Navbar bg="light" expand="lg" fixed="top">
            <Nav className="mr-auto">
                <NavLink to='/' className="navbar-brand" style={{ marginLeft: '20px' }}>
                    <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <NavLink to='/superadmin/home' className="navbar-brand">
                    Super Admin
                </NavLink>
                <NavLink to='/admin/home' className="navbar-brand">
                    Admin
                </NavLink>

                <NavLink to='/empleado/home' className="navbar-brand">
                    Empleado
                </NavLink>

                <NavLink to='/encargado/home' className="navbar-brand">
                    Encargado
                </NavLink>
                <NavLink to='/residente/home' className="navbar-brand">
                    Residente
                </NavLink>
                </Navbar.Collapse>
            </Nav>
            <Nav >
                <NavLink to='/register' className='nav-link'>Register</NavLink>
                <NavLink to='/login' className='nav-link'><LoginIcon/></NavLink>
            </Nav>
         </Navbar>
    );
}

export default LandingNavbar