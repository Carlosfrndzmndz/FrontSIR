import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, ListGroup, Form } from 'react-bootstrap';
import EdificioForm from '../Form';
import LoadingSkeleton from '../../LoadingSkeleton';
import { agregarUnidad, editarUnidad, eliminarUnidad } from '../../../Context/Unidad';
import { obtenerEdificios, unidadesPorEdificio } from '../../../Context/Edificios';
import './UnidadesPage.css';

const UnidadesPage = () => {
  const [unidades, setUnidades] = useState([]);
  const [edificios, setEdificios] = useState([]);
  const [edificioSeleccionado, setEdificioSeleccionado] = useState('');
  const [unidadSeleccionado, setUnidadSeleccionado] = useState({edificio: null, piso: '', numero: '', identificador: null});
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const edificiosData = await obtenerEdificios();
        setEdificios(edificiosData);
        if (edificiosData.length > 0) {
          setEdificioSeleccionado(edificiosData[0]);
          fetchUnidades(edificiosData[0].codigo);
        }
      } catch (error) {
        console.error('Error fetching edificios:', error);
      }
    };

    fetchEdificios();
  }, []);

  const fetchUnidades = async (edificioId) => {
    setLoading(true);
    try {
      const unidadesData = await unidadesPorEdificio(edificioId);
      setUnidades(unidadesData);
    } catch (error) {
      console.error('Error fetching unidades:', error);
    }
    setLoading(false);
  };

  const handleEdificioChange = (event) => {
    const selectedEdificioId = event.target.value;
    setEdificioSeleccionado(selectedEdificioId);
    fetchUnidades(selectedEdificioId);
  };

  const handleGuardarUnidad = async (nuevaUnidad) => {
    try {
      if (nuevaUnidad.identificador) {
        console.log('nuevaUnidad',nuevaUnidad);
        await editarUnidad(nuevaUnidad);
      } else {
        console.log('nuevaUnidad',nuevaUnidad);
        const unidad = {
          codigo: nuevaUnidad.unidadSeleccionado.edificio.codigo,
          piso: nuevaUnidad.piso,
          numero: nuevaUnidad.numero
        }
        console.log('unidad',unidad);
        await agregarUnidad(unidad);
      }
      fetchUnidades(edificioSeleccionado.codigo);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving unidad:', error);
    }
  };

  const handleEliminarUnidad = async (codigo) => {
    try {
      await eliminarUnidad(codigo);
      fetchUnidades(edificioSeleccionado.codigo);
    } catch (error) {
      console.error('Error deleting unidad:', error);
    }
  };

  const handleAgregarUnidad = () => {
    setUnidadSeleccionado({ edificio: {codigo: edificioSeleccionado.codigo, nombre: edificioSeleccionado.nombre}, piso: '', numero: '' , identificador: null});
    console.log('unidadSeleccionado ABM', unidadSeleccionado);
    setMostrarModal(true);
  };

  const handleEditarUnidad = (identificador) => {
    console.log('identificador',identificador);
    console.log('unidades:',unidades);

    const unidadEditar = unidades.find((unidad) => unidad.id === identificador);
    console.log('unidad Editar ABM', unidadEditar);
    console.log(edificioSeleccionado);
    setUnidadSeleccionado({ edificio: edificioSeleccionado, piso: unidadEditar.piso, numero: unidadEditar.numero, identificador: unidadEditar.id});
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setUnidadSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Container className='mt-20'>
      <Row className="mt-3 align-items-center">
        <Col>
          <Form.Group controlId="formEdificioSelect">
            <Form.Label>Selecciona un Edificio</Form.Label>
            <Form.Control as="select" value={edificioSeleccionado.codigo} onChange={handleEdificioChange} className="mb-3">
              {edificios.map((edificio) => (
                <option key={edificio.codigo} value={edificio.codigo}>
                  {edificio.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleAgregarUnidad}>
            Agregar Unidad
          </Button>
        </Col>
      </Row>

      <Row>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          unidades.map((unidad) => (
            <Col key={unidad.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{unidad.edificio.nombre} - Unidad {unidad.numero}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Piso: {unidad.piso}</Card.Subtitle>
                  <Card.Text>
                    {unidad.habitado ? 'Habitado' : 'Desocupado'}
                  </Card.Text>
                  <ListGroup variant="flush">
                    {unidad.duenio.length > 0 && (
                      <ListGroup.Item><b>Dueños:</b>
                        {unidad.duenio.map(duenio => <div key={duenio.documento}>{duenio.nombre}</div>)}
                      </ListGroup.Item>
                    )}
                    {unidad.inquilino.length > 0 && (
                      <ListGroup.Item><b>Inquilinos:</b>
                        {unidad.inquilino.map(inquilino => <div key={inquilino.documento}>{inquilino.nombre}</div>)}
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                  <Button variant="outline-danger" onClick={() => handleEliminarUnidad(unidad.id)} className="ml-2">
                    Eliminar
                  </Button>
                  <Button variant="outline-primary" onClick={() => handleEditarUnidad(unidad.id)} className="ml-2">
                    Editar
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {mostrarModal && (
        <EdificioForm
          onSave={handleGuardarUnidad}
          onDelete={handleEliminarUnidad}
          unidadSeleccionado={unidadSeleccionado}
          onClose={handleCerrarModal}
          edificio={edificioSeleccionado}
        />
      )}
    </Container>
  );
};

export default UnidadesPage;
