import React, { useState } from 'react';
import {comentarReclamo} from '../../../../Context/Reclamo';

const ReclamoComentario = ({ comentario, esRespuesta = false, reclamo }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nuevoComentario, setNuevoComentario] = useState('');
    const [imagenUrl, setImagenUrl] = useState('');

    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleString();
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const handleComentarioChange = (e) => {
        setNuevoComentario(e.target.value);
    };

    const handleImagenUrlChange = (e) => {
        setImagenUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //armo el json para enviar al backend

        const nuevoComentario = {
            numero: reclamo.numero,
            numeroPadre: comentario.numero,
            texto: nuevoComentario,
            imagenes: [
                {
                    numero:0,
                    url: imagenUrl,
                    tipo: 'jpg'
                }
            ],
        }

        //envio el json al backend
        comentarReclamo(nuevoComentario);
    };

    return (
        <div className="relative pl-4 border-l-2 border-gray-300 mt-2">
            <p><strong>{comentario.persona.nombre}</strong> {formatearFecha(comentario.fecha)}</p>
            <p>{comentario.texto}</p>
            {comentario.respuestas && comentario.respuestas.length > 0 && (
                <div className="ml-4">
                    {comentario.respuestas.map((respuesta, index) => (
                        <ReclamoComentario key={index} comentario={respuesta} esRespuesta />
                    ))}
                </div>
            )}

            {/* Botón minimalista para mostrar/ocultar el formulario */}
            <button onClick={toggleFormulario} className="px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none absolute bottom-0 right-0 mb-2">
                {mostrarFormulario ? '−' : '+'}
            </button>

            {/* Formulario para añadir un nuevo comentario con imagen */}
            {mostrarFormulario && (
                <form onSubmit={handleSubmit} className="mt-4">
                    <textarea
                        value={nuevoComentario}
                        onChange={handleComentarioChange}
                        placeholder="Escribe un comentario..."
                        className="w-full p-2 border rounded mb-2"
                    />
                    <input
                        type="text"
                        value={imagenUrl}
                        onChange={handleImagenUrlChange}
                        placeholder="URL de la imagen"
                        className="w-full p-2 border rounded mb-2"
                    />
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enviar</button>
                </form>
            )}
        </div>
    );
};

export default ReclamoComentario;
