import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const UserStatsCard = ({ registeredUsers, confirmedNoPassword, noConfirmNoPassword, usersLast24Hours }) => {
  const totalUsers = registeredUsers + confirmedNoPassword + noConfirmNoPassword;

  const data = {
    labels: ['Usuarios Registrados', 'Con Mail Confirmado (Sin Contraseña)', 'Sin Contraseña y Sin Confirmar Mail'],
    datasets: [
      {
        data: [registeredUsers, confirmedNoPassword, noConfirmNoPassword],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    circumference: 225,
    rotation: 250,
    cutout: '50%',
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 2,
  };

  return (
    <Card className="shadow-sm" style={{ borderRadius: '15px', padding: '20px' }}>
      <Card.Body>
        <Card.Title className="mb-3">Estadísticas de Usuarios</Card.Title>
        <Row>
          <Col md={12} className="d-flex justify-content-center" style={{ height: '250px' }}>
            <Doughnut data={data} options={options} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p className="font-weight-bold"> . </p>
            <p className="font-weight-bold"><strong>Total de Usuarios: </strong>{totalUsers}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserStatsCard;
