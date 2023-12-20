import axios from "axios";

const apiUrl = "https://api.sir.net.ar/auth/";

    const validarMail = async (mail,documento) => {
        // Llamada API para el paso de verificacion de mail se pasa el mail y el documento como parametros

        const response = await axios.post(`${apiUrl}validarMail?documento=${documento}&mail=${mail}`);
        console.log(response);
        if (response.status === 200) {
            return response;
        }
        if (response.status == 400) {
            return response;
        }
        else {
            return response;
        }
    }

const ReenviarMail = async (mail) => {
    const response = await axios.get(`${apiUrl}reenviarTokenMail?mail=${mail}`);
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response.status);
    }
}

const verificarMail = async (mail,token) => {
    // Llamada API para el paso de verificacion de mail se pasa el mail y el token como parametros
    const response = await axios.post(`${apiUrl}confirmarMail?token=${token}&mail=${mail}`);
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response);
    }
}

const registrarPassword = async (documento, password) => {
    const response = await axios.patch(`${apiUrl}registrarPassword`,{documento:documento,password:password});
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response);
        return response;
    }
}

const olvidePassword = async (mail) => {
    const response = await axios.post(`${apiUrl}olvidePassword?mail=${mail}`);
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response.status);
        return response;
    }

}

const cambiarPassword = async (mail,token,password) => {
    const response = await axios.patch(`${apiUrl}cambiarPassword?token=${token}&mail=${mail}&password=${password}`);
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response.status);
        return response;
    }
}

const reenviarTokenPassword = async (mail) => {
    const response = await axios.get(`${apiUrl}reenviarTokenPassword?mail=${mail}`);
    if (response.status === 200) {
        return response;
    } else {
        console.error('Error fetching data:', response.status);
        return response;
    }
}

const refreshToken = async (token) => {
    const response = await axios.post(`${apiUrl}refreshToken`,{token:token});
    if (response.status === 200) {
        localStorage.setItem('token', response.headers.getAuthorization);
        return response.data;
    } else {
        console.error('Error fetching data:', response.status);
    }
}

const login = async (mail, password) => {
    const data = { mail, password };
    console.log('JSON que se envía al servidor:', data);

    try {
        const response = await axios.post(
            `${apiUrl}login`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        // Manejar la respuesta del servidor según las necesidades de tu aplicación.
        console.log(response.data);

        return response.data;
    } catch (error) {
        // Manejar errores específicos o proporcionar mensajes descriptivos.
        if (error.response) {
            // El servidor respondió con un código de estado que no está en el rango 2xx.
            console.error('Error de respuesta del servidor:', error.response.data);
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta.
            console.error('No se recibió respuesta del servidor.');
        } else {
            // Algo más sucedió. Aquí puedes manejar otros tipos de errores.
            console.error('Error al realizar la solicitud:', error.message);
        }

        return null;
    }
}

export { validarMail , ReenviarMail, verificarMail, registrarPassword, olvidePassword, cambiarPassword, reenviarTokenPassword, refreshToken , login}