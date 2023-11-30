import axios from "axios";

const getToken = () => localStorage.getItem('token');

const rutaApi = 'https://api.sir.net.ar/reclamo';

const obtenerReclamos = async (documento) => {
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

export {obtenerReclamos, comentarReclamo};