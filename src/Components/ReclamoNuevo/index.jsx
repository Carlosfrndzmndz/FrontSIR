/* import React, { useState, useEffect } from 'react';
import { obtenerReclamosPorDocumento } from '../../Context/Reclamo'; // Asegúrate de tener la ruta correcta

function ListaDeReclamos({ documento }) {
  const [reclamos, setReclamos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerReclamos = async () => {
      try {
        const response = await obtenerReclamosPorDocumento(documento);
        setReclamos(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    obtenerReclamos();
  }, [documento]);

  return (
    <div>
      {error ? (
        <p>Hubo un error: {error}</p>
      ) : reclamos.length === 0 ? (
        <p>No hay reclamos para este documento.</p>
      ) : (
        <ul>
          {reclamos.map((reclamo) => (
            <li key={reclamo.numero}>{reclamo.descripcion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDeReclamos;
 */

import React, { useState, useEffect } from 'react'; // Asegúrate de tener la ruta correcta
import { obtenerReclamosPorDocumento } from '../../Context/Reclamo';

const ReclamosList = () => {
  const [reclamos, setReclamos] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    const obtenerReclamos = async () => {
      try {
        const documento = localStorage.getItem('documento');
        console.log('documento', documento);
        const response = await obtenerReclamosPorDocumento(documento);
          console.log('response', response);
          setReclamos(response)
      } catch (err) {
        console.log('error', err);
        setError(err.message);
        setReclamos([]);
      }
    }

    obtenerReclamos();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : reclamos.length === 0 ? (
        <p>Esta persona no tiene reclamos</p>
      ) : (
        <ul>
          {reclamos.map((reclamo) => (
            <li key={reclamo.numero}>
              reclamoooooooooooo
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReclamosList;
