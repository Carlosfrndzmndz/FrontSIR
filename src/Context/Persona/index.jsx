import axios from "axios";

const apiUrl = "https://api.sir.net.ar/";

const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

const getRol = async (mail) => {
    try {
        const response = await axios.get(
            `${apiUrl}persona/getRol?mail=${mail}`,
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

export{getRol}