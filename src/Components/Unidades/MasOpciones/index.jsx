import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AccionesUnidadModal.css';// Asegúrate de que esta ruta es correcta
import AgregarInquilinoForm from './AgregerInquilinoForm'

// Componentes personalizados para cada acción
const TransferirComponent = () => <div>Componente para Transferir</div>;
const AlquilarComponent = () => <div>Componente para Alquilar</div>;
const LiberarComponent = () => <div>Componente para Liberar</div>;
const HabitarComponent = () => <div>Componente para Habitar</div>;
const AgregarDuenioComponent = () => <div>Componente para Agregar Dueño</div>;
const AgregarInquilinoComponent = () => <AgregarInquilinoForm/>;
const DueniosPorUnidadComponent = () => <div>Componente para Mostrar Dueños por Unidad</div>;
const InquilinosPorUnidadComponent = () => <div>Componente para Mostrar Inquilinos por Unidad</div>;

const AccionesUnidadModal = ({ unidad, show, onHide }) => {
  const [currentComponent, setCurrentComponent] = useState(<div>Seleccione una opción</div>);

  const handleTransferir = () => {
    setCurrentComponent(<TransferirComponent />);
  };

  const handleAlquilar = () => {
    setCurrentComponent(<AlquilarComponent />);
  };

  const handleLiberar = () => {
    setCurrentComponent(<LiberarComponent />);
  };

  const handleHabitar = () => {
    setCurrentComponent(<HabitarComponent />);
  };

  const handleAgregarDuenio = () => {
    setCurrentComponent(<AgregarDuenioComponent />);
  };

  const handleAgregarInquilino = () => {
    setCurrentComponent(<AgregarInquilinoComponent />);
  };

  const handleDueniosPorUnidad = () => {
    setCurrentComponent(<DueniosPorUnidadComponent />);
  };

  const handleInquilinosPorUnidad = () => {
    setCurrentComponent(<InquilinosPorUnidadComponent />);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Acciones para Unidad {unidad.numero}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <Button variant="secondary" className="action-button" onClick={handleTransferir}>Transferir</Button>
          <Button variant="secondary" className="action-button" onClick={handleAlquilar}>Alquilar</Button>
          <Button variant="secondary" className="action-button" onClick={handleLiberar}>Liberar</Button>
          <Button variant="secondary" className="action-button" onClick={handleHabitar}>Habitar</Button>
          <Button variant="secondary" className="action-button" onClick={handleAgregarDuenio}>Agregar Dueño</Button>
          <Button variant="secondary" className="action-button" onClick={handleAgregarInquilino}>Agregar Inquilino</Button>
          <Button variant="secondary" className="action-button" onClick={handleDueniosPorUnidad}>Dueños por Unidad</Button>
          <Button variant="secondary" className="action-button" onClick={handleInquilinosPorUnidad}>Inquilinos por Unidad</Button>
        </div>
        <div className="info-section">
          {currentComponent}
        </div>
      </Modal.Body>
    </Modal>
    );
    };

export default AccionesUnidadModal;
