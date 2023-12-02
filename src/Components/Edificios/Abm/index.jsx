import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import EdificioForm from '../Form';
import LoadingSkeleton from '../../../Components/LoadingSkeleton';
import { obtenerEdificios, agregarEdificio, eliminarEdificio, editarEdificio } from '../../../Context/Edificios';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Modal, Spinner } from 'react-bootstrap';


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

  /* const handleAgregarEdificio = () => {
    setEdificioSeleccionado(null);
    setMostrarModal(true);
    

    
  }; */

  const handleAgregarEdificio = () => {
    setEdificioSeleccionado(null);
    setShowCrearModal(true);
    setCreandoEdificio(true); // Cambiar el estado a "true" para indicar que se está creando un edificio
  };
  

  const handleCerrarModal = () => {
    setEdificioSeleccionado(null);
    setMostrarModal(false);
  };

  const [showCrearModal, setShowCrearModal] = useState(false);
  const [creandoEdificio, setCreandoEdificio] = useState(false);

  

  return (
    <Container className='mt-20'>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={handleAgregarEdificio} className="mb-3">
            <DomainAddIcon/>
          </Button>
        </Col>
      </Row>

      <Row>
        {loading ? (
          <LoadingSkeleton />
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
      <Modal show={showCrearModal} onHide={handleCerrarModal}>
  <Modal.Header closeButton>
    <Modal.Title>Creando Edificio</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {creandoEdificio ? (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Cargando...</span>
        </Spinner>
        <p>Creando edificio...</p>
      </div>
    ) : (
      // Aquí coloca tu formulario de creación de edificio
      <EdificioForm onSave={handleGuardarEdificio} onDelete={handleEliminarEdificio} edificioSeleccionado={edificioSeleccionado} onClose={handleCerrarModal} />
    )}
  </Modal.Body>
</Modal>

    </Container>
  );
};

export default EdificiosPage;
