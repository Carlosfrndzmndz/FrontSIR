import React from 'react';
import { Row , Col } from 'react-bootstrap';
import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
  return (
    <Row>
      {[...Array(6)].map((_, index) => (
        <Col key={index} xs={12} md={4} className="mb-4"> {/* xs=12 para pantallas pequeñas, md=4 para medianas y grandes */}
          <div className="loading-skeleton">
            <div className="loading-header"></div>
            <div className="loading-button"></div>
            <div className="loading-row"></div>
            <div className="loading-row"></div>
            <div className="loading-row"></div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default LoadingSkeleton;