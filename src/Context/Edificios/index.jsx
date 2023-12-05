import axios from "axios";

const getToken = () => localStorage.getItem('token');

const rutaApi = 'https://api.sir.net.ar/edificio';

const obtenerEdificios = async () => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.get(rutaApi + '/getAll', {
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

const agregarEdificio = async (edificio) => {
    const response = await axios.post(rutaApi + '/agregarEdificio', edificio, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });

    return response.data;
    }

const eliminarEdificio = async (codigo) => {

    const response = await axios.delete(rutaApi + '/eliminar?codigo=' + codigo, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });

    return response.data;
    }

const editarEdificio = async (edificio) => {
    const response = await axios.patch(rutaApi + '/modificar', edificio, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });

    return response.data;
    }

const unidadesPorEdificio = async (codigo) => {
    const response = await axios.get(rutaApi + '/getUnidades?codigo=' + codigo, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return response;
}

const buscarPorcodigo = async (codigo) => {

    const response = await axios.get(rutaApi + '/buscar?codigo=' + codigo, {
        headers: {
        'Authorization': `Bearer ${getToken()}`
        }
    });

    return response;
}

const habilitadosPorEdificio = async (codigo) => {

    const response = await axios.get(rutaApi + '/habilitados?codigo=' + codigo, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return response;
}

const obtenerInquilinos = async (codigo) => {

    const response = await axios.get(rutaApi + '/inquilinos?codigo=' + codigo, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const obtenerDuenios = async (codigo) => {

    const response = await axios.get(rutaApi + '/duenios?codigo=' + codigo, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const habitantesPorEdificio = async (codigo) => {

    const response = await axios.get(rutaApi + '/habitantes?codigo=' + codigo, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

const obtenerEdificioPorCodigo = async (codigo) => {

    const response = await axios.get(rutaApi + '/obtenerSelectorEdificio', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return response;
}

export {obtenerEdificios, agregarEdificio, eliminarEdificio, editarEdificio, unidadesPorEdificio,buscarPorcodigo,
    habilitadosPorEdificio, obtenerInquilinos, obtenerDuenios, habitantesPorEdificio, obtenerEdificioPorCodigo}