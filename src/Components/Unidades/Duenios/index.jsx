import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, ListGroup, Form } from 'react-bootstrap';
import { obtenerDuenios, obtenerEdificioPorCodigo } from '../../../Context/Edificios';
import LoadingSkeleton from '../../LoadingSkeleton';
import ResidentesListadoPage from '../../Persona/Residente/Listado';

const DueniosPageUnidad = () => {
  const [unidad, setUnidad] = useState([]);
  const [edificios, setEdificios] = useState([]);
  const [edificioSeleccionado, setEdificioSeleccionado] = useState('');
  const [habitantesSeleccionado, setHabitantesSeleccionado] = useState({edificio: null, piso: '', numero: '', identificador: null});
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEdificios = async () => {
      console.log('Fetching edificios...');
      try {
        const edificiosData = await obtenerEdificioPorCodigo();
        setEdificios(edificiosData.data);
        if (edificiosData.length > 0) {
          setEdificioSeleccionado(edificiosData.data[0]);
          fetchHabitantes(edificiosData.datadata[0][0]);
        }
      } catch (error) {
        console.error('Error fetching edificios:', error);
      }
    };

    fetchEdificios();
  }, []);

  const fetchHabitantes = async (codigo) => {
    setLoading(true);
    try {
      const habitantesData = await obtenerDuenios(codigo);
      setHabitantes(habitantesData.data);
    } catch (error) {
      console.error('Error fetching habitantes:', error);
    }
    setLoading(false);
  };

  const handleEdificioChange = (event) => {
    const selectedEdificioId = event.target.value;
    setEdificioSeleccionado(selectedEdificioId);
    fetchHabitantes(selectedEdificioId);
  };

  return (
    <Container className='mt-20'>
      <Row className="mt-3 align-items-center">
        <Col>
          <Form.Group controlId="formEdificioSelect">
            <Form.Label>Selecciona un Edificio</Form.Label>
            <Form.Control as="select" value={edificioSeleccionado.codigo} onChange={handleEdificioChange} className="mb-3">
              {edificios.map((edificio) => (
                <option key={edificio[0]} value={edificio[0]}>
                  {edificio[2]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {loading ? (
          <LoadingSkeleton />
        ) : (
        <ResidentesListadoPage residentes = {habitantes}
          setResidentes = {setHabitantes}
        />
        )}
      </Row>
    </Container>
  );
};

export default DueniosPageUnidad;
