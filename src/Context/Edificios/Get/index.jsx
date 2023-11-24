import axios from "axios";
const getToken = () => localStorage.getItem('token');

/*
export const fetchData = async () => {
    const token = getToken();
    if (!token) {
        console.error('Token is missing.');
        return;
    }

    const response = await axios.get('http://localhost:8080/edificio/getAll', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
         // Agrega esta línea para incluir credenciales
         withCredentials : true,
    });
    if (response.status === 200) {
        return response.data;
    } else {
        console.error('Error fetching data:', response.status);
    }
}*/

export const fetchData = async () => {
    return [{
        "codigo": 1,
        "nombre": "sol radiante",
        "direccion": "calle 848"
    },
    {
        "codigo": 4,
        "nombre": "luna radiante",
        "direccion": "calle 173"
    }];
}