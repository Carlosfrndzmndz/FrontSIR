// src/components/Reclamo/ReclamoBody.js
import React from 'react';

const ReclamoBody = ({ reclamo }) => {
    return (
        <div className="mb-4">
            <p><strong>Ubicación:</strong> {reclamo.ubicacion}</p>
            <p><strong>Descripción:</strong> {reclamo.descripcion}</p>
            <p><strong>Estado:</strong> {reclamo.estado}</p>
        </div>
    );
};

export default ReclamoBody;
