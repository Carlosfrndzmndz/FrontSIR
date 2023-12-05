import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
3
const ResidenteForm = ({ onSave, residenteSeleccionado, onClose }) => {
  const [residente, setResidente] = useState({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Residente' });

  useEffect(() => {
    if (residenteSeleccionado) {
      const tipo = residenteSeleccionado.documento.substring(0, 3);
      const numero = residenteSeleccionado.documento.substring(3);
      setResidente({ ...residenteSeleccionado, tipoDocumento: tipo, numeroDocumento: numero });
    } else {
      setResidente({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Residente' });
    }
  }, [residenteSeleccionado]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResidente({ ...residente, [name]: value });
  };

  const handleGuardar = () => {
    const residenteAGuardar = {
      documento: `${residente.tipoDocumento}${residente.numeroDocumento}`,
      nombre: residente.nombre,
      rol: 'Residente',
    };
    onSave(residenteAGuardar);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{residenteSeleccionado ? 'Editar Residente' : 'Agregar Nuevo Residente'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTipoDocumento">
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="tipoDocumento"
              value={residente.tipoDocumento}
              onChange={handleInputChange}
              disabled={!!residenteSeleccionado}
            >
              <option value="">Tipo de Documento</option>
              <option value="DNI">DNI</option>
              <option value="LE">LE</option>
              <option value="LC">LC</option>
              <option value="CI">CI</option>
              <option value="Pas">Pasaporte</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formNumeroDocumento">
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el número de documento"
              name="numeroDocumento"
              value={residente.numeroDocumento}
              onChange={handleInputChange}
              disabled={!!residenteSeleccionado} 
            />
          </Form.Group>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              name="nombre"
              value={residente.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleGuardar}>
          {residenteSeleccionado ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResidenteForm;