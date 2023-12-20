import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás usando react-router para la navegación
import './NotFoundPage.css'; // Un archivo CSS para estilos específicos de esta página

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};

export default NotFound;