import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import EdificioForm from '../Form';
import EdificioCardSkeleton from './LoadingSkeleton';
import { obtenerEdificios, agregarEdificio, eliminarEdificio, editarEdificio } from '../../../Context/Edificios';

const EdificiosPage = () => {
  const [edificios, setEdificios] = useState([]);
  const [edificioSeleccionado, setEdificioSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const data = await obtenerEdificios();
        setEdificios(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEdificios();
  }, []);

  const handleGuardarEdificio = async (nuevoEdificio) => {
    try {
      if (nuevoEdificio.codigo) {
        await editarEdificio(nuevoEdificio);
      } else {
        await agregarEdificio(nuevoEdificio);
      }

      const data = await obtenerEdificios();
      setEdificios(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving edificio:', error);
    }
  };

  const handleEliminarEdificio = async (codigo) => {
    try {
      await eliminarEdificio(codigo);

      const data = await obtenerEdificios();
      setEdificios(data);
    } catch (error) {
      console.error('Error deleting edificio:', error);
    }
  };

  const handleEditarEdificio = (codigo) => {
    const edificioEditar = edificios.find((edificio) => edificio.codigo === codigo);
    setEdificioSeleccionado(edificioEditar);
    setMostrarModal(true);
  };

  const handleAgregarEdificio = () => {
    setEdificioSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setEdificioSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Lista de Edificios</h1>
          <Button variant="primary" onClick={handleAgregarEdificio} className="mb-3">
            Agregar Edificio
          </Button>
        </Col>
      </Row>

      <Row>
        {loading ? (
          <EdificioCardSkeleton />
        ) : (
          <>
            {edificios.map((edificio) => (
              <Col key={edificio.codigo} md={4} className="mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{edificio.nombre}</h5>
                    <p className="card-text">{edificio.direccion}</p>
                    <Button variant="outline-primary" onClick={() => handleEditarEdificio(edificio.codigo)}>
                      Editar
                    </Button>
                    <Button variant="outline-danger" onClick={() => handleEliminarEdificio(edificio.codigo)} className="ml-2">
                      Eliminar
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </>
        )}
      </Row>
  
      {mostrarModal && (
        <EdificioForm onSave={handleGuardarEdificio} onDelete={handleEliminarEdificio} edificioSeleccionado={edificioSeleccionado} onClose={handleCerrarModal} />
      )}
    </Container>
  );
};

export default EdificiosPage;
