import React, { useState } from 'react';
import { Container, Form, Button, Modal, Spinner, Card } from 'react-bootstrap';
import { validarMail } from '../../../Context/Auth';

function RegistroPage() {
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);

  const handleTipoDocumentoChange = (e) => {
    setTipoDocumento(e.target.value);
  };

  const handleNumeroDocumentoChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (inputValue.length <= 8) {
      setNumeroDocumento(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tipoDocumento && numeroDocumento && email) {
      try {
        setMostrarModalCarga(true);
        const response = await validarMail(email, `${tipoDocumento}${numeroDocumento}`);
        if (response && response.status === 200) {
          localStorage.setItem('email', email);
          localStorage.setItem('documento', `${tipoDocumento}${numeroDocumento}`);

          window.location.href = '/register/verificar';
        } else {
          if (response.status === 400) {
            alert(response.data);
          }
          console.error('Error en la validación del correo:', response.status);
        }
      } catch (error) {
        if (error.response.status === 400) {
          alert(error.response.data);
        }
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
    <Container className="mt-20 d-flex justify-content-center align-items-center">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Control
                as="select"
                value={tipoDocumento}
                onChange={handleTipoDocumentoChange}
              >
                <option value="">Selecciona...</option>
                <option value="DNI">DNI</option>
                <option value="LC">LC</option>
                <option value="LE">LE</option>
                <option value="CI">CI</option>
                <option value="Pasaporte">Pasaporte</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="text"
                value={numeroDocumento}
                onChange={handleNumeroDocumentoChange}
                maxLength="8"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
              Registrar
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
          Por favor, complete todos los campos antes de registrar.
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

export default RegistroPage;
