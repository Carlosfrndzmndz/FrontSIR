import React, { useState } from 'react';
import { olvidePassword } from '../../Context/Auth';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';

function IngresoCorreo() {
  const [mail, setMail] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);  

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setMostrarModalCarga(true);
        const response = await olvidePassword(mail);
    

      if (response && response.status === 200) {
        
        localStorage.setItem('mail', mail);

        
        window.location.href = '/recupero-password/nuevacontrasena';
      } else {
        console.error('Error en la recuperación de contraseña:', response.status);
        // Mostrar mensaje de error al usuario si es necesario
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      // Mostrar mensaje de error al usuario si es necesario
    }
    finally {
        setMostrarModalCarga(false);
      }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          {!confirmado ? (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Recuperación de Contraseña</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Correo Electrónico"
                  value={mail}
                  onChange={handleMailChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
              >
                Confirmar Correo
              </button>
            </form>
          ) : (
            <p>
              El correo electrónico se ha confirmado. Serás redirigido a la ventana de recuperación de contraseña.
            </p>
          )}
        </div>
      </div>
      <Modal show={mostrarModalCarga} centered>
            <Modal.Body>
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Cargando...</span>
                    </Spinner>
                    <p>Enviando Token</p>
                </div>
            </Modal.Body>
        </Modal>
    </> 
  );
}

export default IngresoCorreo;
