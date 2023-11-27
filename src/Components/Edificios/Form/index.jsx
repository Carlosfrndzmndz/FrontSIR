import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EdificioForm = ({ onSave, onDelete, edificioSeleccionado, onClose }) => {
  const [edificio, setEdificio] = useState(edificioSeleccionado || { nombre: '', direccion: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEdificio({ ...edificio, [name]: value });
  };

  const handleGuardar = () => {
    onSave(edificio);
    onClose();
  };

  const handleCerrar = () => {
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{edificioSeleccionado ? 'Editar Edificio' : 'Agregar Nuevo Edificio'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre" value={edificio.nombre} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formDireccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la dirección" name="direccion" value={edificio.direccion} onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {edificioSeleccionado && (
          <Button variant="danger" onClick={handleCerrar}>
            Cerrar
          </Button>
        )}
        <Button variant="primary" onClick={handleGuardar}>
          {edificioSeleccionado ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EdificioForm;
