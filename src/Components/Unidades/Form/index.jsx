import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const UnidadForm = ({ onSave, unidadSeleccionado, onClose, edificio }) => {
  const estadoInicial = {
    edificio: unidadSeleccionado.edificio,
    piso: '',
    numero: '',
    identificador: null
  };

  const [unidad, setUnidad] = useState(unidadSeleccionado || estadoInicial);

  useEffect(() => {
    if (unidadSeleccionado) {
      const unidadRecibida = {
        edificio: unidadSeleccionado.edificio,
        piso: unidadSeleccionado.piso,
        numero: unidadSeleccionado.numero,
        identificador: unidadSeleccionado.identificador
      };
      setUnidad(unidadRecibida);
    } else {
      setUnidad(estadoInicial);
    }
  }, [unidadSeleccionado, edificio]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUnidad({ ...unidad, [name]: value });
  };

  const handleGuardar = () => {
    console.log('unidad', unidad);
    const unidadAGuardar = {
      edificio: unidad.edificio.codigo ? unidad.edificio.codigo : unidadSeleccionado.edificio.codigo,
      piso: unidad.piso ? unidad.piso : unidadSeleccionado.piso,
      numero: unidad.numero ? unidad.numero : unidadSeleccionado.numero,
      identificador: unidad.identificador ? unidad.identificador : unidadSeleccionado.identificador
    };
    onSave(unidadAGuardar);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{unidadSeleccionado.identificador != null ? 'Editar Unidad' : 'Agregar Nueva Unidad'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel>Edificio</FormLabel>
            <FormControl type="text" disabled readOnly value={edificio ? edificio.nombre : unidadSeleccionado.edificio.nombre} />
          </FormGroup>
          <Form.Group controlId="formPiso">
            <Form.Label>Piso</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el piso" name="piso" value={unidad.piso} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formNumero">
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el número" name="numero" value={unidad.numero} onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleGuardar}>
          {unidadSeleccionado.identificador != null ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnidadForm;
