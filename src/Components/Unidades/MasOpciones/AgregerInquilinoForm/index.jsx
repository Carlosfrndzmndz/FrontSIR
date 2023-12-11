import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // Asegúrate de tener las rutas correctas

const AgregarInquilinoForm = ({ onSubmit }) => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleSubmit = async () => {
    try {
      // Realiza la solicitud para agregar un inquilino
      const response = await agregarInquilinoUnidad(codigo, documento, piso, numero);

      if (response && response.status === 200) {
        // Si la solicitud es exitosa, puedes manejar cualquier lógica adicional aquí
        // por ejemplo, mostrar un mensaje de éxito, etc.
        onSubmit(true);
      } else {
        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error
        onSubmit(false);
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores de solicitud aquí
      onSubmit(false);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className='mt-2' controlId="numero">
          <Form.Label>Número</Form.Label>
          <Form.Control type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </Form.Group>
        <Form.Group className='mt-2' controlId="documento">
          <Form.Label>Documento</Form.Label>
          <Form.Control type="text" placeholder="Documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </Form.Group>
        <Button className='mt-4' variant="primary" onClick={handleSubmit}>
          Agregar Inquilino
        </Button>
      </Form>
    </div>
  );
};

export default AgregarInquilinoForm;
