import React from 'react';

const ReclamoComentario = ({ comentario, esRespuesta = false }) => {
    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleString();
    };

    return (
        <div className={'pl-4 border-l-2 border-gray-300 mt-2'}>
            <p><strong>{comentario.persona.nombre}</strong> {formatearFecha(comentario.fecha)}</p>
            <p>{comentario.texto}</p>
            {comentario.respuestas && comentario.respuestas.length > 0 && (
                <div className="ml-4">
                    {comentario.respuestas.map((respuesta, index) => (
                        <ReclamoComentario key={index} comentario={respuesta} esRespuesta />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReclamoComentario;
