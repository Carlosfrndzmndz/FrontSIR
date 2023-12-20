import React from 'react';

const UsuarioComponent = ({ usuario }) => {
  return (
    <div className="mt-2">
      <p><strong>Usuario:</strong> {usuario.nombre} ({usuario.documento})</p>
    </div>
  );
};

export default UsuarioComponent;
