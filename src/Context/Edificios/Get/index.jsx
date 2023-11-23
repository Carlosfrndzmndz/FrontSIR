
import axios from 'axios';

const apiUrl = 'https://api.sir.net.ar/edificio/getAll';

const getToken = () => localStorage.getItem('token');

export const fetchData = async () => {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      method: 'GET',
      url: apiUrl,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};