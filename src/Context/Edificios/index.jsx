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

export {obtenerEdificios, agregarEdificio, eliminarEdificio, editarEdificio };