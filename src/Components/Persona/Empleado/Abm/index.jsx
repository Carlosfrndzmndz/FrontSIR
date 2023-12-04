import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col , Modal, Spinner } from 'react-bootstrap';
import EmpleadoForm from '../Form';
import LoadingSkeleton from '../../../../Components/LoadingSkeleton';
import { obtenerPersonasPorRol, agregarPersona, eliminarPersona, editarPersona } from '../../../../Context/Persona';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Layout from '../../../Layout';
const EmpleadoAbm = () => {
  const [empleado, setEmpleado] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);
  

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const data = await obtenerPersonasPorRol('Empleado');
        setEmpleado(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEmpleado();
  }, []);

  const handleGuardarEmpleado = async (empleado) => {
    setMostrarModalCarga(true);
    try {
      console.log('empleado', empleado);
      console.log('empleadoSeleccionado', empleadoSeleccionado);
      if (empleadoSeleccionado) {
        
        await editarPersona(empleado); 
        
      } else {
        await agregarPersona(empleado); 
      }

      const data = await obtenerPersonasPorRol('Empleado');
      setEmpleado(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving empleado:', error);
    }
    finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEliminarEmpleado = async (documento) => {
    setMostrarModalCarga(true);

    try {
      console.log('documento', documento);
      await eliminarPersona(documento);
      const data = await obtenerPersonasPorRol('Empleado');
      setEmpleado(data);
    } catch (error) {
      console.error('Error deleting empleado:', error);
    }
    finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEditarEmpleado = (documento) => {
    const empleadoEditar = empleado.find((empleado) => empleado.documento === documento);
    setEmpleadoSeleccionado(empleadoEditar);
    setMostrarModal(true);
  };

  const handleAgregarEmpleado = () => {
    setEmpleadoSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setEmpleadoSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Layout>
      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleAgregarEmpleado} className="mb-3">
            <PersonAddIcon/>
            </Button>
          </Col>
        </Row>

        <Row>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {empleado.map((empleado) => (
                <Col key={empleado.documento} md={4} className="mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{empleado.nombre}</h5>
                      <p className="card-text">{empleado.documento}</p>
                      <Button variant="outline-primary" onClick={() => handleEditarEmpleado(empleado.documento)}>
                        Editar
                      </Button>
                      <Button variant="outline-danger" onClick={() => handleEliminarEmpleado(empleado.documento)} className="ml-2">
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
          <EmpleadoForm onSave={handleGuardarEmpleado} onDelete={handleEliminarEmpleado} empleadoSeleccionado={empleadoSeleccionado} onClose={handleCerrarModal} />
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

export default EmpleadoAbm;
