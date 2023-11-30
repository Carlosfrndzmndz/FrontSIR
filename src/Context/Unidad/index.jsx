import axios from "axios";
import e from "cors";

const getToken = () => localStorage.getItem('token');

const rutaApi = 'https://api.sir.net.ar/unidad/';

const obtenerUnidades = async (documento) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.get(rutaApi + 'buscar?documento=' + documento, {
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

const obtenerTodasLasUnidades = async () => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.get(rutaApi + 'obtenerTodas', {
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

const agregarUnidad = async (unidad) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.post(rutaApi + 'agregar', unidad, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
}

const editarUnidad = async (unidad) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.put(rutaApi + 'editar', unidad, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
}

const eliminarUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.delete(rutaApi + 'eliminar?identificador=' + identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
}

export { obtenerTodasLasUnidades, agregarUnidad, editarUnidad, eliminarUnidad, obtenerUnidades };