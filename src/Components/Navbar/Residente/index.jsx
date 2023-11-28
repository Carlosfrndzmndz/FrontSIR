import { NavLink } from "react-router-dom"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo/Logo.svg'

const ResidenteNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
        <NavLink to='/residente/home' className="navbar-brand" style={{ marginLeft: '20px' }}>
            <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to='/residente/reclamos' className='nav-link custom-link'>Reclamos</NavLink>
                <NavLink to='/residente/unidades' className='nav-link custom-link'>Unidades</NavLink>
            </Nav>
            <Nav style={{ marginRight: '20px'}}>
                <NavLink to='/perfil' className='nav-link custom-link'>Perfil</NavLink>
                <NavLink to='/' className='nav-link custom-link'>Salir</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
};

export default ResidenteNavbar