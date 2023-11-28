// src/components/Reclamo/ReclamoHeader.js
import React from 'react';

const ReclamoHeader = ({ reclamo }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{reclamo.edificio.nombre}</h3>
            <span className="text-gray-600">Reclamo #{reclamo.numero}</span>
        </div>
    );
};

export default ReclamoHeader;
