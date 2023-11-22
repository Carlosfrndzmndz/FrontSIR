import { NavLink } from "react-router-dom"

const LandingNavbar = () => {
    const activeStyle = 'underline bold underline-offset-4'
    return (
        <nav  className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                    >
                        SIR
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/superadmin/home'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Super Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/home'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/empleado/home'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Empleados
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/encargado/home'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Encargado
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/residente/home'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Residente
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink
                        to='/login'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/register'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default LandingNavbar