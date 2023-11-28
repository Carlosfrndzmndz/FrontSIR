import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdminForm from '../Form';
import LoadingSkeleton from '../../../Components/LoadingSkeleton';
import { obtenerAdmins, agregarAdmin, editarAdmin, eliminarAdmin } from '../../../Services/adminService';

const ReclamoAbmPage = () => {
  const [reclamo, setReclamo] = useState([]);
  const [reclamoSeleccionado, setReclamoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReclamo = async () => {
      try {
        const data = await obtenerReclamo();
        setReclamo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReclamo();
  }, []);

  const handleGuardarAdmin = async (reclamo) => {
    try {
      if (reclamoSeleccionado) {
        await editarAdmin(reclamo); // Editar admin existente
      } else {
        await agregarAdmin(reclamo); // Agregar nuevo admin
      }

      const data = await obtenerReclamo();
      setReclamo(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving admin:', error);
    }
  };

  const handleEliminarReclamo = async (documento) => {
    try {
      await eliminarReclamo(documento);
      const data = await obtenerReclamo();
      setReclamo(data);
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleEditarReclamo = (documento) => {
    const reclamoEditar = reclamo.find((reclamo) => admin.documento === documento);
    setReclamoSeleccionado(reclamoEditar);
    setMostrarModal(true);
  };

  const handleAgregarReclamo = () => {
    setReclamoSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setReclamoSeleccionado(null);
    setMostrarModal(false);
  };

  return (
    <Container className='mt-20'>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={handleAgregarReclamo} className="mb-3">
            Agregar Reclamo
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
                    <Button variant="outline-primary" onClick={() => handleEditarReclamo(admin.documento)}>
                      Editar
                    </Button>
                    <Button variant="outline-danger" onClick={() => handleEliminarReclamo(admin.documento)} className="ml-2">
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
        <ReclamoAbmPage onSave={handleGuardarReclamo} onDelete={handleEliminarReclamo} reclamoSeleccionado={reclamoSeleccionado} onClose={handleCerrarModal} />
      )}
    </Container>
  );
};

export default ReclamoAbmPage;