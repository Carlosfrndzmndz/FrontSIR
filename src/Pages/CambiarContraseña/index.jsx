/* import React, { useState } from 'react';
import {cambiarPassword} from '../../Context/Auth';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';

function NuevaContraseña() {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // Estado para el mensaje de error
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para el modal de error
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);  


  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (token && password.length >= 8 && /\d{2}/.test(password) && password === confirmPassword) {
      try {
        setMostrarModalCarga(true);
        const mail = localStorage.getItem('mail');
        const response = await cambiarPassword(mail, token, password);

        if (response && response.status === 200) {
          // Redirigir a la página de inicio de sesión
          window.location.href = '/login';
        } else {
          const errorMessage = 'Error al cambiar la contraseña';
          setError(errorMessage);
          setShowErrorModal(true);
          console.error(errorMessage);
        }
      } catch (error) {
        const errorMessage = 'Error en la llamada a la API';
        setError(errorMessage);
        setShowErrorModal(true);
        console.error(errorMessage, error);
      }
      finally {
        setMostrarModalCarga(false);
      }
    } else {
      const errorMessage = 'Los campos no cumplen los requisitos.';
      setError(errorMessage);
      setShowErrorModal(true);
      console.error(errorMessage);
    }
  };

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
            <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Nueva Contraseña</h2>
            <div className="mb-4">
                <label htmlFor="token" className="block text-gray-700 font-medium mb-2">
                Token de Verificación
                </label>
                <input
                type="text"
                id="token"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Token de Verificación"
                value={token}
                onChange={handleTokenChange}
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Nueva Contraseña
                </label>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Nueva Contraseña"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirmar Contraseña
                </label>
                <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                />
            </div>
            <div className="mb-4">
                <label className="flex items-center text-gray-700">
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={showPassword}
                    onChange={handleShowPasswordToggle}
                />
                Mostrar Contraseña
                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            >
                Cambiar Contraseña
            </button>
            </form>
        </div>

        
        {showErrorModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 shadow-md rounded-md w-96">
                <h2 className="text-xl font-semibold mb-2">Error</h2>
                <p className="text-red-500">{error}</p>
                <button
                onClick={handleCloseErrorModal}
                className="mt-4 bg-red-500 text-white rounded-md py-2 hover:bg-red-600 transition duration-300"
                >
                Cerrar
                </button>
            </div>
            </div>
        )}
        </div>
        <Modal show={mostrarModalCarga} centered>
            <Modal.Body>
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Cargando...</span>
                    </Spinner>
                    
                </div>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default NuevaContraseña;
 */

import React, { useState } from 'react';
import { cambiarPassword, reenviarTokenPassword, } from '../../Context/Auth';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';

function NuevaContraseña() {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // Estado para el mensaje de error
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para el modal de error
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);
  const [reenvioExitoso, setReenvioExitoso] = useState(false); // Estado para el mensaje de reenvío exitoso

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleReenviarToken = async () => {
    try {
      const mail = localStorage.getItem('mail');
      const response = await reenviarTokenPassword(mail);

      if (response && response.status === 200) {
        // Mostrar mensaje de reenvío exitoso y ocultar después de unos segundos
        setReenvioExitoso(true);
        setTimeout(() => {
          setReenvioExitoso(false);
        }, 2500);
      } else {
        const errorMessage = 'Error al reenviar el token';
        setError(errorMessage);
        setShowErrorModal(true);
        console.error(errorMessage);
      }
    } catch (error) {
      const errorMessage = 'Error en la llamada a la API';
      setError(errorMessage);
      setShowErrorModal(true);
      console.error(errorMessage, error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (token && password.length >= 8 && /\d{2}/.test(password) && password === confirmPassword) {
      try {
        setMostrarModalCarga(true);
        const mail = localStorage.getItem('mail');
        const response = await cambiarPassword(mail, token, password);

        if (response && response.status === 200) {
          // Redirigir a la página de inicio de sesión
          window.location.href = '/login';
        } else {
          const errorMessage = 'Error al cambiar la contraseña';
          setError(errorMessage);
          setShowErrorModal(true);
          console.error(errorMessage);
        }
      } catch (error) {
        const errorMessage = 'Error en la llamada a la API';
        setError(errorMessage);
        setShowErrorModal(true);
        console.error(errorMessage, error);
      } finally {
        setMostrarModalCarga(false);
      }
    } else {
      const errorMessage = 'Los campos no cumplen los requisitos.';
      setError(errorMessage);
      setShowErrorModal(true);
      console.error(errorMessage);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Nueva Contraseña</h2>
            <div className="mb-4">
              <label htmlFor="token" className="block text-gray-700 font-medium mb-2">
                Token de Verificación
              </label>
              <input
                type="text"
                id="token"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Token de Verificación"
                value={token}
                onChange={handleTokenChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Nueva Contraseña
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Nueva Contraseña"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirmar Contraseña
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={showPassword}
                  onChange={handleShowPasswordToggle}
                />
                Mostrar Contraseña
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            >
              Cambiar Contraseña
            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={handleReenviarToken}
              className="w-full bg-green-500 text-white rounded-md py-2 hover:bg-green-600 transition duration-300"
            >
              Reenviar Token
            </button>
          </div>
        </div>

        {/* Modal de Error */}
        {showErrorModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 shadow-md rounded-md w-96">
              <h2 className="text-xl font-semibold mb-2">Error</h2>
              <p className="text-red-500">{error}</p>
              <button
                onClick={handleCloseErrorModal}
                className="mt-4 bg-red-500 text-white rounded-md py-2 hover:bg-red-600 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Mensaje de Reenvío Exitoso */}
        {reenvioExitoso && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 shadow-md rounded-md w-96">
              <h2 className="text-xl font-semibold mb-2">Reenvío Exitoso</h2>
              <p>Se ha reenviado el token de verificación.</p>
            </div>
          </div>
        )}
      </div>
      <Modal show={mostrarModalCarga} centered>
        <Modal.Body>
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NuevaContraseña;
