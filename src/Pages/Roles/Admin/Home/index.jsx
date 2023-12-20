import React, { useState, useEffect } from 'react';
import Layout from "../../../../Components/Layout";
import AdminNavbar from "../../../../Components/Navbar/Admin";
import { Container, Row, Col } from "react-bootstrap";
import UserStatsCard from '../../../../Components/Users/StatsCard/';
import ClaimsStatsCard from '../../../../Components/Reclamo/ReclamosPorMes';
import {CardsInfoGeneral} from '../../../../Components/Dashboad';
import { getReporteUsuarios } from '../../../../Context/Persona';

const claimsData = {
  Enero: 12,  Febrero: 20,  Marzo: 15,  Abril: 8,
  Mayo: 25,  Junio: 20,  Julio: 15,  Agosto: 18,
  Septiembre: 9,  Octubre: 15,  Noviembre: 11,
  Diciembre: 18,
}

function AdminHome(){
  const [reporteUsuarios, setReporteUsuarios] = useState([]);

  useEffect(() => {
    const fetchReporteUsuarios = async () => {
      try {
        const data = await getReporteUsuarios();
        setReporteUsuarios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchReporteUsuarios();
  }, []);

  // Asegúrate de que reporteUsuarios tiene datos antes de desestructurarlo
  const [registeredUsers, confirmedNoPassword, noConfirmNoPassword] = reporteUsuarios.length > 0 ? reporteUsuarios : [0, 0, 0];

  return(
    <>
      <AdminNavbar/>
      <div className='mt-20'>
        <Container fluid className='mt-3 mt-md-4'>
          <Row className="my-2 align-items-stretch">
            <Col xs={12} md={6} className="mb-3">
              <div className="h-100">
                <UserStatsCard
                  totalUsers={500} // Asumiendo que este dato viene de otro lugar
                  registeredUsers={registeredUsers}
                  confirmedNoPassword={confirmedNoPassword}
                  noConfirmNoPassword={noConfirmNoPassword}
                  usersLast24Hours={10} // Asumiendo que este dato viene de otro lugar
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
  )
}

export default AdminHome;
