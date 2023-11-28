import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import SuperAdminNavbar from '../../../../Components/Navbar/SuperAdmin';
import UserStatsCard from '../../../../Components/Users/StatsCard';
import ClaimsStatsCard from '../../../../Components/Reclamo/ReclamosPorMes';
import {CardsInfoGeneral} from '../../../../Components/Dashboad';

const claimsData = {
  Enero: 12,  Febrero: 20,  Marzo: 15,  Abril: 8,
  Mayo: 25,  Junio: 20,  Julio: 15,  Agosto: 18,
  Septiembre: 9,  Octubre: 15,  Noviembre: 11,
  Diciembre: 18,
}
const SuperAdminHome = () => {

  return (
    <>
      <SuperAdminNavbar />
      <div className='mt-20'>
        <Container fluid className='mt-3 mt-md-4'>
          <Row className="my-2 align-items-stretch">
            <Col xs={12} md={6} className="mb-3">
              <div className="h-100">
                <UserStatsCard
                  totalUsers={500}
                  registeredUsers={50}
                  confirmedNoPassword={80}
                  noConfirmNoPassword={10}
                  usersLast24Hours={10}
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <div className="h-100">
                <ClaimsStatsCard
                claimsData={claimsData}
                />
              </div>
            </Col>
          </Row>
          <CardsInfoGeneral/>
        </Container>
      </div>
    </>
  );
};

export default SuperAdminHome;
