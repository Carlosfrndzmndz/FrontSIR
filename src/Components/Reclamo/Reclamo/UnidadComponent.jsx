import React from 'react';

const UnidadComponent = ({ unidad }) => {
  return (
    <div className="mt-2">
      <p><strong>Unidad:</strong> Piso {unidad.piso}, Número {unidad.numero}</p>
      <p>{unidad.habitado ? 'Habitado' : 'No habitado'}</p>
    </div>
  );
};

export default UnidadComponent;
