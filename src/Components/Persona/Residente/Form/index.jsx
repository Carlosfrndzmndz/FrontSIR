import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



const AdminForm = ({ onSave, adminSeleccionado, onClose }) => {
  const [admin, setAdmin] = useState({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Admin' });
  

  useEffect(() => {
    if (adminSeleccionado) {
      const tipo = adminSeleccionado.documento.substring(0, 3);
      const numero = adminSeleccionado.documento.substring(3);
      setAdmin({ ...adminSeleccionado, tipoDocumento: tipo, numeroDocumento: numero });
    } else {
      setAdmin({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Admin' });
    }
  }, [adminSeleccionado]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleGuardar = () => {
    

    const adminAGuardar = {
      documento: `${admin.tipoDocumento}${admin.numeroDocumento}`,
      nombre: admin.nombre,
      rol: 'Admin',
    };


    onSave(adminAGuardar);
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
            <Form.Select
              aria-label="Default select example"
              name="tipoDocumento"
              value={admin.tipoDocumento}
              onChange={handleInputChange}
              disabled={!!adminSeleccionado}
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
              value={admin.numeroDocumento}
              onChange={handleInputChange}
              disabled={!!adminSeleccionado} // Deshabilitar este campo también al editar
            />
          </Form.Group>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              name="nombre"
              value={admin.nombre}
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
          {adminSeleccionado ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminForm;