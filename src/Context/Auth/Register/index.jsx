// api.js
const BASE_URL = 'https://api.sir.net.ar/';

export const submitDocumentId = async (data) => {
  // Llamada API para el paso de Document ID
  const response = await fetch(`${BASE_URL}/auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Error en la verificación de documento.');
  return response.json();
};

export const submitEmail = async (data) => {
  // Similar para el paso de Email
};

export const submitVerificationCode = async (data) => {
  // Similar para el paso de Código de Verificación
};

export const submitPassword = async (data) => {
  // Similar para el paso de Contraseña
};
