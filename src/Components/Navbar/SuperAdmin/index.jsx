import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import './SuperAdmin.css';
import logo from '../../../assets/logo/logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';

const SuperAdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
            <NavLink to='/superadmin/home' className="navbar-brand" style={{ marginLeft: '20px' }}>
                <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to='/superadmin/admin/abm' className='nav-link custom-link'>Admins</NavLink>
                </Nav>
                <Nav style={{ marginRight: '20px'}}>
                    <NavLink to='/perfil' className='nav-link custom-link'>Perfil</NavLink>
                    <NavLink to='/' className='nav-link custom-link'><LogoutIcon/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default SuperAdminNavbar;
