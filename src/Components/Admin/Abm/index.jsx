import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdminForm from '../Form';
import LoadingSkeleton from '../../../Components/LoadingSkeleton';
import { obtenerAdmins, agregarAdmin, eliminarAdmin, editarAdmin } from '../../../Context/Admins';

const AdminAbmPage = () => {
  const [admins, setAdmins] = useState([]);
  const [adminSeleccionado, setAdminSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const data = await obtenerAdmins();
        setAdmins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAdmin();
  }, []);

  const handleGuardarAdmin = async (admin) => {
    try {
      if (adminSeleccionado) {
        await editarAdmin(admin); // Editar admin existente
      } else {
        await agregarAdmin(admin); // Agregar nuevo admin
      }

      const data = await obtenerAdmins();
      setAdmins(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving admin:', error);
    }
  };

  const handleEliminarAdmin = async (documento) => {
    try {
      await eliminarAdmin(documento);
      const data = await obtenerAdmins();
      setAdmins(data);
    } catch (error) {
      console.error('Error deleting admin:', error);
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
    <Container className='mt-20'>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={handleAgregarAdmin} className="mb-3">
            Agregar Admin
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
    </Container>
  );
};

export default AdminAbmPage;