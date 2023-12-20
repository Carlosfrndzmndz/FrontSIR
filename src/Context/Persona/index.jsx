import axios from "axios";

const apiUrl = "https://api.sir.net.ar/persona/";

const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

const agregarPersona = async (nuevaPersona) => {
    const response = await axios.post(apiUrl + 'agregar', nuevaPersona, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

const getRol = async (mail) => {
    try {
        const response = await axios.get(
            `${apiUrl}getRol?mail=${mail}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken(),
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error de respuesta del servidor:', error.response.data);
        } else if (error.request) {
            console.error('No se recibió respuesta del servidor.');
        } else {
            console.error('Error al realizar la solicitud:', error.message);
        }
        return null;
    }
}

const obtenerPersonasPorRol = async (rol) => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.get(apiUrl + `getPorRol?rol=${rol}`, {
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

const eliminarPersona = async (documento) => {
const response = await axios.delete(apiUrl + 'eliminar', {
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    data: {
        documento: documento
    }
});

return response.data;
}

const editarPersona = async (nuevaPersona) => {
    const response = await axios.patch(apiUrl + 'modificar',{
        documento: nuevaPersona.documento,
        nombre: nuevaPersona.nombre,
        roles: nuevaPersona.rol
    }, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }

    });

    return response.data;
}

const getReporteUsuarios = async () => {
    const response = await axios.get(apiUrl + 'getReporteUsuarios', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

const buscarPersonasPorMail = async (mail) => {
    const response = await axios.get(apiUrl + `getPersonaPorMail?mail=${mail}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;

}


const getPorDocumento = async (documento) => {
    const response = await axios.get(apiUrl + `buscar?documento=${documento}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

export{getRol , agregarPersona , obtenerPersonasPorRol , eliminarPersona , editarPersona , getReporteUsuarios , getPorDocumento, buscarPersonasPorMail}