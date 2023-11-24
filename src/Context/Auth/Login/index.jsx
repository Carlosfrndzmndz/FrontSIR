import axios from "axios";

const apiUrl = "http://localhost:8080/";

export const login = async (mail, password) => {
    const data = { mail, password };
    console.log('JSON que se envía al servidor:', data);

    try {
        const response = await axios.post(
            `${apiUrl}auth/login`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
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
};
