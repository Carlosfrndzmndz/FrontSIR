import React, { useState } from 'react';
import { login } from '../../Context/Auth';
import { getRol } from '../../Context/Persona';
import Layout from "../../Components/Layout";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
 // Hook para manejar la navegación

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login(email, password);

      if (response && response.token) {
        console.log('Inicio de sesión exitoso. Token:', response.token);
        localStorage.setItem('token', response.token);

        // Redirige según el rol del usuario
        const userRole = await getRol(email); 
        const ruta = '/'+userRole+'/home';
        window.location.href = ruta;
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
        }
      } else {
        console.log('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error al llamar a la API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8">
        <form className="bg-white p-8 shadow-md rounded-md">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="border rounded-md w-full py-2 px-3 pr-10 focus:outline-none focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // Icono para mostrar contraseña
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 12a2 2 0 01-2 2m0-4a2 2 0 012 2m6 0a6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6z"
                    ></path>
                  </svg>
                ) : (
                  // Icono para ocultar contraseña
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm font-bold">Recuérdame</label>
          </div>
          <div className="mb-6">
            <a href="/recupero-password" className="text-blue-500 text-sm">¿Olvidaste tu contraseña?</a>
          </div>
          <button
            type="button"
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <span className="mr-2">Iniciando sesión...</span>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
            ) : (
              'Iniciar sesión'
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginForm;
