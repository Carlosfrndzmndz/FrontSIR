import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Modal, Spinner } from 'react-bootstrap';
import EncargadoForm from '../Form';
import LoadingSkeleton from '../../../LoadingSkeleton';
import { obtenerPersonasPorRol, agregarPersona, eliminarPersona, editarPersona } from '../../../../Context/Persona';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Layout from '../../../Layout';
const EncargadoAbmPage = () => {
  const [encargado, setEncargado] = useState([]);
  const [encargadoSeleccionado, setEncargadoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false); // Estado para el modal de carga
  

  useEffect(() => {
    const fetchEncargado = async () => {
      try {
        const data = await obtenerPersonasPorRol('Encargado');
        setEncargado(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEncargado();
  }, []);

  const handleGuardarEncargado = async (encargado) => {
    setMostrarModalCarga(true); 
    try {
      console.log('Encargado', encargado);
      console.log('encargadoSeleccionado', encargadoSeleccionado);
      if (encargadoSeleccionado) {
        
        await editarPersona(encargado); // Editar admin existente
        
      } else {
        await agregarPersona(encargado); // Agregar nuevo admin
      }

      const data = await obtenerPersonasPorRol('Encargado');
      setEncargado(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving encargado:', error);
    }
    finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEliminarEncargado = async (documento) => {
    setMostrarModalCarga(true);
    try {
      await eliminarPersona(documento);
      const data = await obtenerPersonasPorRol('Encargado');
      setEncargado(data);
    } catch (error) {
      console.error('Error deleting encargado:', error);
    }
    finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEditarEncargado = (documento) => {
    console.log('documento', documento);
    const encargadoEditar = encargado.find((encargado) => encargado.documento == documento);
    console.log('encargadoEditar', encargadoEditar);
    setEncargadoSeleccionado(encargadoEditar);
    console.log('encargadoSeleccionado', encargadoSeleccionado);
    setMostrarModal(true);
  };

  const handleAgregarEncargado = () => {
    setEncargadoSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setEncargadoSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Layout>
      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleAgregarEncargado} className="mb-3">
            <PersonAddIcon/>
            </Button>
          </Col>
        </Row>

        <Row>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {encargado.map((encargado) => (
                <Col key={encargado.documento} md={4} className="mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{encargado.nombre}</h5>
                      <p className="card-text">{encargado.documento}</p>
                      <Button variant="outline-primary" onClick={() => handleEditarEncargado(encargado.documento)}>
                        Editar
                      </Button>
                      <Button variant="outline-danger" onClick={() => handleEliminarEncargado(encargado.documento)} className="ml-2">
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
          <EncargadoForm onSave={handleGuardarEncargado} onDelete={handleEliminarEncargado} encargadoSeleccionado={encargadoSeleccionado} onClose={handleCerrarModal} />
        )}
        <Modal show={mostrarModalCarga} centered>
          <Modal.Body>
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Cargando...</span>
              </Spinner>
              <p>Procesando...</p>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </Layout>
  );
};

export default EncargadoAbmPage;