import React, { useState, useEffect } from 'react';
import { getPorDocumento } from '../../Context/Persona';
import AdminNavbar from '../../Components/Navbar/Admin';
import SuperAdminNavBar from '../../Components/Navbar/SuperAdmin';
import EmpleadoNavBar from '../../Components/Navbar/Empleado';
import EncargadoNavBar from '../../Components/Navbar/Encargado';
import ResidenteNavBar from '../../Components/Navbar/Residente';
import './Perfil.css';

function Perfil() {
  const [user, setUser] = useState({
    documento: '',
    nombre: '',
    mail: '',
    password: '',
    rol: '',
    tokenVerificacion: '',
    cuentaVerificado: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const documento = localStorage.getItem('documento');
        const userData = await getPorDocumento(documento);
        setUser(userData || {});
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Cambia el fondo de perfil-container y agrega sombras a los campos al pasar el cursor
  useEffect(() => {
    const perfilContainer = document.querySelector('.perfil-container');
    const perfilFields = document.querySelectorAll('.perfil-field');

    const changeBackgroundColor = (color) => {
      perfilContainer.style.backgroundColor = color;
    };

    perfilFields.forEach(field => {
      field.addEventListener('mouseenter', () => changeBackgroundColor('#e0e0e0'));
      field.addEventListener('mouseleave', () => changeBackgroundColor('#f9f9f9'));
    });

    return () => {
      perfilFields.forEach(field => {
        field.removeEventListener('mouseenter', () => changeBackgroundColor('#e0e0e0'));
        field.removeEventListener('mouseleave', () => changeBackgroundColor('#f9f9f9'));
      });
    };
  }, []);

  // Renderiza el navbar basado en el rol del usuario
  const renderNavbar = () => {
    if (user.rol === 'Admin') {
      return <AdminNavbar />;
    } else if (user.rol === 'SuperAdmin') {
      return <SuperAdminNavBar />;
    } else if (user.rol === 'Empleado') {
      return <EmpleadoNavBar />;
    } else if (user.rol === 'Encargado') {
      return <EncargadoNavBar />;
    } else if (user.rol === 'Residente') {
      return <ResidenteNavBar />;
    }
  };

  // Estado de Carga
  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="text-lg font-semibold text-white">Cargando...</div>
    </div>
  );

  // Estado de Error
  if (error) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-500 to-red-700">
      <div className="text-lg font-semibold text-white">Error: {error}</div>
    </div>
  );

  // Estado cuando no se encuentran datos del usuario
  if (!user.documento) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="text-lg font-semibold text-white">No se encontraron datos del usuario.</div>
    </div>
  );

  return (
    <>
      {renderNavbar()}
      <div className="perfil-container">
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-20">
          <h1 className="perfil-title">Perfil de Usuario</h1>
          <div className="w-full max-w-2xl mx-auto">

            {/* Documento */}
            <div className="mb-6 perfil-field">
              <label htmlFor="documento" className="perfil-label">
                Documento
              </label>
              <input id="documento" type="text" value={user.documento} readOnly className="perfil-input" />
            </div>

            {/* Nombre */}
            <div className="mb-6 perfil-field">
              <label htmlFor="nombre" className="perfil-label">
                Nombre
              </label>
              <input id="nombre" type="text" value={user.nombre} readOnly className="perfil-input" />
            </div>

            {/* Mail */}
            <div className="mb-6 perfil-field">
              <label htmlFor="mail" className="perfil-label">
                Mail
              </label>
              <input id="mail" type="email" value={user.mail || 'No disponible'} readOnly className="perfil-input" />
            </div>

            {/* Rol */}
            <div className="mb-6 perfil-field">
              <label htmlFor="rol" className="perfil-label">
                Rol
              </label>
              <input id="rol" type="text" value={user.rol || 'No asignado'} readOnly className="perfil-input" />
            </div>

            {/* Estado de Verificación de la Cuenta */}
            <div className="mb-6 perfil-field">
              <span className={`perfil-status ${user.cuentaVerificado ? 'verificado' : 'no-verificado'}`}>
                {user.cuentaVerificado ? 'Cuenta Verificada' : 'Cuenta No Verificada'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
