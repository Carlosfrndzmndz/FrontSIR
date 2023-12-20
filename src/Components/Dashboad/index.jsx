import React from "react";
import { Row, Col, Card } from "react-bootstrap";


const InfoCard = ({ title, data }) => {
    return (
      <Card className="h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <Row>
              {data.map((item) => (
                <Col key={item.label} md={6}>
                  <div className="mb-3">
                    <strong>{item.label}:</strong> {item.value}
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

const EdificiosCard = () => {
    const edificiosData = [
      { label: "Estado actual", value: "Operativo" },
      { label: "Tiempo de actividad", value: "99.9%" },
      { label: "Usuarios conectados", value: "120" }
    ];

    return (
      <InfoCard title="Edificios" data={edificiosData} />
    );
};

const UnidadesCard = () => {
    const unidadesData = [
        { label: "Estado actual", value: "Operativo" },
        { label: "Tiempo de actividad", value: "99.9%" },
        { label: "Usuarios conectados", value: "120" }
    ];

    return (
        <InfoCard title="Unidades" data={unidadesData} />
    );
}

const UsuariosCard = ({ totalEmpleado, totalAdministradores, totalEncargado, totalResidente }) => {
    const usuariosData = [
        { label: "Total de administradores", value: totalAdministradores },
        { label: "Total de empleados", value: totalEmpleado },
        { label: "Total de encargado", value: totalEncargado },
        { label: "Total de residente", value: totalResidente }
    ];
    return (
        <InfoCard title="Cantidad de Usuarios" data={usuariosData} />
    );
  };

const ReclamosCard = ({
    reclamosNuevos,
    reclamosAbiertos,
    reclamosEnProceso,
    reclamosDesestimados,
    reclamosAnulados,
    reclamosTerminado
  }) => {

    const reclamosData = [
        { label: "Reclamos nuevos", value: reclamosNuevos },
        { label: "Reclamos abiertos", value: reclamosAbiertos },
        { label: "Reclamos en proceso", value: reclamosEnProceso },
        { label: "Reclamos desestimados", value: reclamosDesestimados },
        { label: "Reclamos anulados", value: reclamosAnulados },
        { label: "Reclamos terminados", value: reclamosTerminado }
    ];
    return (
        <InfoCard title="Cantidad de Reclamos" data={reclamosData} />
    );
  };

const CardsInfoGeneral = ({
    totalEmpleado,
    totalAdministradores,
    totalEncargado,
    totalResidente,
    reclamosNuevos,
    reclamosAbiertos,
    reclamosEnProceso,
    reclamosDesestimados,
    reclamosAnulados,
    reclamosTerminado
  }) => {
    return (
      <Row className="my-2 align-items-stretch">
        <Col xs={12} md={3} className="mb-3">
          <EdificiosCard />
        </Col>
        <Col xs={12} md={3} className="mb-3">
          <UnidadesCard />
        </Col>
        <Col xs={12} md={3} className="mb-3">
          <UsuariosCard
            totalEmpleado={totalEmpleado}
            totalAdministradores={totalAdministradores}
            totalEncargado={totalEncargado}
            totalResidente={totalResidente}
          />
        </Col>
        <Col xs={12} md={3} className="mb-3">
          <ReclamosCard
            reclamosNuevos={reclamosNuevos}
            reclamosAbiertos={reclamosAbiertos}
            reclamosEnProceso={reclamosEnProceso}
            reclamosDesestimados={reclamosDesestimados}
            reclamosAnulados={reclamosAnulados}
            reclamosTerminado={reclamosTerminado}
          />
        </Col>
      </Row>
    );
  };



export { EdificiosCard, UnidadesCard, UsuariosCard, ReclamosCard , CardsInfoGeneral};
