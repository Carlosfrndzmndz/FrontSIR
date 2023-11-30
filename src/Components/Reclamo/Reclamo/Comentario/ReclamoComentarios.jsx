// src/components/Reclamo/ReclamoComentarios.js
import React from 'react';
import ReclamoComentario from './ReclamoComentario';

const ReclamoComentarios = ({ comentarios }) => {
    return (
        <div>
            {comentarios.map((comentario, index) => (
                <ReclamoComentario key={index} comentario={comentario} />
            ))}
        </div>
    );
};

export default ReclamoComentarios;
