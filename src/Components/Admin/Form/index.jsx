import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AdminForm = ({ onSave, adminSeleccionado, onClose }) => {
  const [persona, setPersona] = useState(adminSeleccionado || { nombre: '', tipoDocumento: '', numeroDocumento: '', rol:'Admin' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEdificio({ ...persona, [name]: value });
  };

  const handleGuardar = () => {
    onSave(persona);
    onClose();
  };

  const handleCerrar = () => {
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{adminSeleccionado ? 'Editar Admin' : 'Agregar Nuevo Admin'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTipoDocumento">
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Select aria-label="Default select example" name="tipoDocumento" value={persona.tipoDocumento} onChange={handleInputChange}>
              <option>Tipo de Documento</option>
              <option value="DNI">DNI</option>
              <option value="LE ">LE</option>
              <option value="LC ">LC</option>
              <option value="CI ">CI</option>
              <option value="Pas">Pasaporte</option>
            </Form.Select>
            <Form.Label>Documento</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Documento" name="Documento" value={persona.numeroDocumento} onChange={handleInputChange} />          </Form.Group>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre" value={persona.nombre} onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {adminSeleccionado && (
          <Button variant="danger" onClick={handleCerrar}>
            Cerrar
          </Button>
        )}
        <Button variant="primary" onClick={handleGuardar}>
          {adminSeleccionado ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminForm;
