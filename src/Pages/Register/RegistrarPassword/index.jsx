import React, { useState } from 'react';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';
import { registrarPassword } from '../../../Context/Auth';

function RegistrarPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length >= 8 && /\d{2}/.test(password) && password === confirmPassword) {
      try {
        setMostrarModalCarga(true);
        const response = await registrarPassword(localStorage.getItem('documento'), password);

        if (response && response.status === 200) {
          console.log('Contraseña registrada con éxito');
          window.location.href = '/login';
        } else {
          console.error('Error al registrar la contraseña:', response.status);
        }
      } catch (error) {
        console.error('Error en la llamada a la API:', error);
      } finally {
        setMostrarModalCarga(false);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-40 d-flex justify-content-center align-items-center">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Registrar Contraseña</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Confirmar Contraseña</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
            <Form.Check
              className="mt-3"
              type="checkbox"
              label="Mostrar Contraseña"
              onChange={handleShowPasswordToggle}
            />
            <Button variant="primary" type="submit" className="mt-3">
              Registrar Contraseña
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Modal show={mostrarModalCarga} centered>
        <Modal.Body>
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
            <p>Procesando...</p>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Por favor, asegúrese de que la contraseña tenga al menos 8 caracteres, incluyendo al menos 2 números, y que las contraseñas coincidan.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegistrarPassword;
