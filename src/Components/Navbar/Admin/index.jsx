import { NavLink } from "react-router-dom"

const AdminNavbar = () => {
    const activeStyle = 'underline bold underline-offset-4'
    return (
        <nav  className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/admin/home'
                    >
                        SIR
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/residentes'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Residentes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/empleados'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Empleados
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/reclamos'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Reclamos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/edificios'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Edificios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/admin/unidades'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Unidades
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink
                        to='/perfil'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Perfil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Salir
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AdminNavbar