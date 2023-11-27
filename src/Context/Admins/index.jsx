import axios from "axios";

const url = "http://api.sir.net.ar/persona/";

const getToken = () => {
    return localStorage.getItem("token");
}

const obtenerAdmins = async () => {
    const response = await axios.get(url + '/getAdmins', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

const agregarAdmin = async (nuevoAdmin) => {
    const response = await axios.post(url + '/agregar', nuevoAdmin, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

const eliminarAdmin = async (codigo) => {
    const response = await axios.delete(url + '/eliminar', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: {
            codigo: codigo
        }
    });

    return response.data;
}

const editarAdmin = async (nuevoAdmin) => {
    const response = await axios.patch(url + '/modificar', nuevoAdmin, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
}

export {obtenerAdmins, agregarAdmin, eliminarAdmin, editarAdmin};