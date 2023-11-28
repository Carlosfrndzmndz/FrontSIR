import React from 'react';

const EdificioComponent = ({ edificio }) => {
  return (
    <div className="mt-2">
      <p><strong>Edificio:</strong> {edificio.nombre} (Código: {edificio.codigo})</p>
      <p><strong>Dirección:</strong> {edificio.direccion}</p>
    </div>
  );
};

export default EdificioComponent;
