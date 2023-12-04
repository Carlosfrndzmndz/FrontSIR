import axios from "axios";

const getToken = () => localStorage.getItem('token');

const rutaApi = 'https://api.sir.net.ar/reclamo';

const obtenerReclamosPorDocumento = async (documento) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

const response = await axios.get(rutaApi + '/persona?documento=' + documento, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.status === 200) {
        return response.data;
    } else {
        console.error('Error fetching data:', response.status);
    }
}

const comentarReclamo = async (comentario) => {
    const response = await axios.post(rutaApi + '/comentarReclamo', comentario, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });
    return response.data;
}

const agregarReclamo = async (reclamo) => {
    const response = await axios.put(rutaApi + '/agregar', reclamo, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const ReclamosPorEdificio = async (codigo) => {
    const response = await axios.get(rutaApi + '/edificio?codigo=' + codigo, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const ReclamosPorUnidad = async (identificador) => {
    const response = await axios.get(rutaApi + '/unidad?identificador=' + identificador, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const reclamosPorNumero = async (numero) => {
    const response = await axios.get(rutaApi + '/numero?numero=' + numero, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const cambiarEstado = async (numero, estado) => {
    const response = await axios.post(rutaApi + '/cambiarEstado', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        },
        data: {
            numero: numero,
            estado: estado
        }
    });
    return response;
}

const agregarImagen = async (numero, imagen) => {
    const response = await axios.post(rutaApi + '/agregarImagen', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        },
        data: {
            numero: numero,
            imagen: imagen
        }
    });
    return response;
}

export {obtenerReclamosPorDocumento, comentarReclamo, agregarReclamo, ReclamosPorEdificio, ReclamosPorUnidad, reclamosPorNumero,
    cambiarEstado, agregarImagen};