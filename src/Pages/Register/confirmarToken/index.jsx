import React, { useState } from 'react';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';
import { verificarMail, ReenviarMail } from '../../../Context/Auth';

function VerificarCodigo() {
  const [codigo, setCodigo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (codigo) {
      try {
        setMostrarModalCarga(true);
        const response = await verificarMail(localStorage.getItem('email'), codigo);

        if (response && response.status === 200) {
          window.location.href = '/register/password';
        } else {
          console.error('Error en la verificación del correo:', response.status);
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

  const handleReenviarToken = async () => {
    try {
      const response = await ReenviarMail(localStorage.getItem('email'));

      if (response && response.status === 200) {
        console.log('Token reenviado con éxito');
      } else {
        console.error('Error al reenviar el token:', response.status);
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-40 d-flex justify-content-center align-items-center">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Verificar Código</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Ingrese el código de verificación enviado a su correo</Form.Label>
              <Form.Control
                type="text"
                value={codigo}
                onChange={handleCodigoChange}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleReenviarToken} className="mt-3 mr-3">
              Reenviar Token de Confirmación
            </Button>
            <Button variant="primary" type="submit" className="mt-3">
              Verificar
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
          Por favor, ingrese el código de verificación.
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

export default VerificarCodigo;
