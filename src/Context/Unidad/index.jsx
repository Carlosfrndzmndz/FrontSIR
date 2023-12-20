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
        return response;
    } else {
        console.error('Error fetching data:', response.status);
        return response;
    }
}

const agregarUnidad = async (unidad) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.put(rutaApi + 'crearUnidad', unidad, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
    else{
        return response;
    }
}

const eliminarUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.delete(rutaApi + 'eliminarUnidad?identificador=' + identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
    else{
        return response;
    }
}

const transferirUnidad = async (identificador, documento) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.post(rutaApi + 'transferirUnidad', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            identificador: identificador,
            documento: documento
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
    }
    else{
        return response;
    }
}

const alquilarUnidad = async (documento, codigo, piso, numero) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.post(rutaApi + 'alquilarUnidad', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            codigo: codigo,
            piso: piso,
            numero: numero,
            documento: documento
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const liberarUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.post(rutaApi + 'liberarUnidad?identificador='+identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const habitarUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.post(rutaApi + 'habitarUnidad?identificador='+identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const agregarDuenioUnidad = async (codigo, documento, piso, numero) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.post(rutaApi + 'agregarDuenioUnidad', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            codigo: codigo,
            piso: piso,
            numero: numero,
            documento: documento
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const agregarInquilinoUnidad = async (codigo, documento, piso, numero) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.post(rutaApi + 'agregarInquilinoUnidad', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            codigo: codigo,
            piso: piso,
            numero: numero,
            documento: documento
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const dueniosPorUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.get(rutaApi + 'getDuenios?identificador='+identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const inquilinosPorUnidad = async (identificador) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.get(rutaApi + 'getInquilinos?identificador='+identificador, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

const obtenerTodas = async () => {
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
        return response;
    } else {
        console.error('Error fetching data:', response.status);
        return response;
    }
}

const editarUnidad = async (unidad) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }
    const response = await axios.patch(rutaApi + 'modificarUnidad', unidad, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.status !== 200) {
        console.error('Error fetching data:', response.status);
        return response;
    }
    else{
        return response;
    }
}

export { obtenerTodasLasUnidades, agregarUnidad, editarUnidad, eliminarUnidad, obtenerUnidades,
    transferirUnidad, alquilarUnidad , liberarUnidad, habitarUnidad, agregarDuenioUnidad,
    agregarInquilinoUnidad, dueniosPorUnidad, inquilinosPorUnidad, obtenerTodas};