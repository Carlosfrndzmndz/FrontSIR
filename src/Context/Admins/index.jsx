import axios from "axios";

const url = "https://api.sir.net.ar/persona";

const getToken = () => {
    return localStorage.getItem("token");
}

const obtenerAdmins = async () => {
        const token = getToken();
        if (!token) {
            console.error('Token is missing.');
            return;
        }

        const response = await axios.get(url + '/getAdmins', {
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

const agregarAdmin = async (nuevoAdmin) => {
    const response = await axios.post(url + '/agregar', nuevoAdmin, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

const eliminarAdmin = async (documento) => {
    const response = await axios.delete(url + '/eliminar', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: {
            documento: documento
        }
    });

    return response.data;
}


const editarAdmin = async (nuevoAdmin) => {
    const response = await axios.patch(url + '/modificar',{
            documento: nuevoAdmin.documento,
            nombre: nuevoAdmin.nombre,
            roles: "Admin"
        }, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

export {obtenerAdmins, agregarAdmin, eliminarAdmin, editarAdmin};