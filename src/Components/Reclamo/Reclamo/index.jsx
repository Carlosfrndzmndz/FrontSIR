// src/components/Reclamo/Reclamo.js
import React from 'react';
import ReclamoHeader from './ReclamoHeader';
import ReclamoBody from './Body/ReclamoBody';
import ReclamoComentarios from './Comentario/ReclamoComentarios';

const Reclamo = ({ reclamo }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <ReclamoHeader reclamo={reclamo} />
            <ReclamoBody reclamo={reclamo} />
            <ReclamoComentarios comentarios={reclamo.comentarios} />
        </div>
    );
};

export default Reclamo;
