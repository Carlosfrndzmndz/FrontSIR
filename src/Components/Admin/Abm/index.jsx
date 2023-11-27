import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdminForm from '../Form';
import LoadingSkeleton from './LoadingSkeleton';
import { obtenerAdmins, agregarAdmin, eliminarAdmin, editarAdmin } from '../../../Context/Admins';

const AdminAbmPage = () => {
  const [admin, setAdmin] = useState([]);
  const [adminSeleccionado, setAdminSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const data = await obtenerEdificios();
        setAdmin(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAdmin();
  }, []);

  const handleGuardarAdmin = async (nuevoAdmin) => {
    try {
      if (nuevoAdmin.codigo) {
        await editarAdmin(nuevoAdmin);
      } else {
        await agregarAdmin(nuevoAdmin);
      }

      const data = await obtenerAdmins();
      setAdmins(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving admin:', error);
    }
  };

  const handleEliminarAdmin = async (codigo) => {
    try {
      await eliminarAdmin(codigo);

      const data = await obtenerAdmins();
      setAdmins(data);
    } catch (error) {
      console.error('Error deleting edificio:', error);
    }
  };

  const handleEditarAdmin = (codigo) => {
    const edificioEditar = edificios.find((edificio) => edificio.codigo === codigo);
    setEdificioSeleccionado(edificioEditar);
    setMostrarModal(true);
  };

  const handleAgregarAdmin = () => {
    setEdificioSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setAdminSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Lista de Admin</h1>
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
            {Admins.map((Admin) => (
              <Col key={edificio.codigo} md={4} className="mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{edificio.nombre}</h5>
                    <p className="card-text">{edificio.direccion}</p>
                    <Button variant="outline-primary" onClick={() => handleEditarAdmin(edificio.codigo)}>
                      Editar
                    </Button>
                    <Button variant="outline-danger" onClick={() => handleEliminarAdmin(edificio.codigo)} className="ml-2">
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
