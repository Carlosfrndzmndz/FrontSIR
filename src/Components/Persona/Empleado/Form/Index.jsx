import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



const EmpleadoForm = ({ onSave, empleadoSeleccionado, onClose }) => {
  const [empleado, setEmpleado] = useState({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Empleado' });
  

  useEffect(() => {
    if (empleadoSeleccionado) {
      const tipo = empleadoSeleccionado.documento.substring(0, 3);
      const numero = empleadoSeleccionado.documento.substring(3);
      setEmpleado({ ...empleadoSeleccionado, tipoDocumento: tipo, numeroDocumento: numero });
    } else {
      setEmpleado({ nombre: '', tipoDocumento: '', numeroDocumento: '', rol: 'Empleado' });
    }
  }, [empleadoSeleccionado]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleGuardar = () => {
    

    const empleadoAGuardar = {
      documento: `${empleado.tipoDocumento}${empleado.numeroDocumento}`,
      nombre: empleado.nombre,
      rol: 'Empleado',
    };


    onSave(empleadoAGuardar);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{empleadoSeleccionado ? 'Editar Empleado' : 'Agregar Nuevo Empleado'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTipoDocumento">
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="tipoDocumento"
              value={empleado.tipoDocumento}
              onChange={handleInputChange}
              disabled={!!empleadoSeleccionado}
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
              value={empleado.numeroDocumento}
              onChange={handleInputChange}
              disabled={!!empleadoSeleccionado} // Deshabilitar este campo también al editar
            />
          </Form.Group>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              name="nombre"
              value={empleado.nombre}
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
          {empleadoSeleccionado ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmpleadoForm;