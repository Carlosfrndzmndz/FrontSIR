import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ClaimsStatsCard = ({ claimsData }) => {
  const data = {
    labels: Object.keys(claimsData), // Meses
    datasets: [
      {
        label: 'Cantidad de Reclamos',
        data: Object.values(claimsData), // Datos de reclamos
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 2,
  };

  return (
    <Card className="shadow-sm" style={{ borderRadius: '15px', padding: '20px' }}>
      <Card.Body>
        <Card.Title className="mb-3">Estadísticas de Reclamos por Mes</Card.Title>
        <Row>
          <Col md={12} className="d-flex justify-content-center" style={{ height: '345px' }}>
            <Bar data={data} options={options} />
          </Col>
        </Row>
        {/* Aquí puedes agregar más filas y columnas para mostrar información adicional si lo necesitas */}
      </Card.Body>
    </Card>
  );
};

export default ClaimsStatsCard;
