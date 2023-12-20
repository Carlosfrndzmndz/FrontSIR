import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Modal, Spinner } from 'react-bootstrap';
import AdminForm from '../Form';
import LoadingSkeleton from '../../../../Components/LoadingSkeleton';
import { obtenerPersonasPorRol, agregarPersona, eliminarPersona, editarPersona } from '../../../../Context/Persona';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Layout from '../../../Layout';

const AdminAbmPage = () => {
  const [admins, setAdmins] = useState([]);
  const [adminSeleccionado, setAdminSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false); // Estado para el modal de carga

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const data = await obtenerPersonasPorRol('Admin');
        setAdmins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAdmin();
  }, []);

  const handleGuardarAdmin = async (admin) => {
    setMostrarModalCarga(true); // Mostrar modal de carga
    try {
      if (adminSeleccionado) {
        await editarPersona(admin);
      } else {
        await agregarPersona(admin);
      }
      const data = await obtenerPersonasPorRol('Admin');
      setAdmins(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving admin:', error);
    } finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEliminarAdmin = async (documento) => {
    setMostrarModalCarga(true); // Mostrar modal de carga
    try {
      await eliminarPersona(documento);
      const data = await obtenerPersonasPorRol('Admin');
      setAdmins(data);
    } catch (error) {
      console.error('Error deleting admin:', error);
    } finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEditarAdmin = (documento) => {
    const adminEditar = admins.find((admin) => admin.documento === documento);
    setAdminSeleccionado(adminEditar);
    setMostrarModal(true);
  };

  const handleAgregarAdmin = () => {
    setAdminSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setAdminSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Layout>
      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleAgregarAdmin} className="mb-3">
              <PersonAddIcon/>
            </Button>
          </Col>
        </Row>

        <Row>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {admins.map((admin) => (
                <Col key={admin.documento} md={4} className="mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{admin.nombre}</h5>
                      <p className="card-text">{admin.documento}</p>
                      <Button variant="outline-primary" onClick={() => handleEditarAdmin(admin.documento)}>
                        Editar
                      </Button>
                      <Button variant="outline-danger" onClick={() => handleEliminarAdmin(admin.documento)} className="ml-2">
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
          <AdminForm onSave={handleGuardarAdmin} onDelete={handleEliminarAdmin} adminSeleccionado={adminSeleccionado} onClose={handleCerrarModal} />
        )}

        {/* Modal de carga */}

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

export default AdminAbmPage;