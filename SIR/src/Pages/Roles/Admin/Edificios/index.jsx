import Layout from "../../../../Components/Layout";
import { useState, useEffect } from 'react';
import { fetchData } from '../../../../Context/Edificios/Get';

function AdminEdificios(){
    const [data, setData] = useState([]);

    useEffect(() => {
      // Aquí deberías hacer la llamada a tu API y obtener los datos
      // Puedes utilizar axios u otra biblioteca de tu elección
      // Ejemplo ficticio:
      // axios.get('tu_url_de_api').then(response => setData(response.data));

      // Ejemplo con datos estáticos para demostración
      const sampleData = [
        {
          "codigo": 1,
          "nombre": "sol radiante",
          "direccion": "calle 848"
        },
        {
          "codigo": 4,
          "nombre": "luna radiante",
          "direccion": "calle 173"
        }
      ];

      setData(sampleData);
    }, []);


    return(
        <Layout>
            <h2 className="text-2xl font-bold mb-4">Lista de Edificios:</h2>
            <div className="flex flex-wrap gap-4">
                {data.map(item => (
                <div key={item.codigo} className="border p-4 rounded shadow-md transition-transform duration-300 ease-in-out hover:scale-105 w-48">
                    <div >
                        <h3 className="text-xl font-bold mb-2">{item.nombre}</h3>
                        <p><strong>Código:</strong> {item.codigo}</p>
                        <p><strong>Dirección:</strong> {item.direccion}</p>
                    </div>
                    <button
                    // debe estar abajo a la izquierda de la card
                    className="bg-blue-500 text-white px-2 py-1 rounded-full mt-4 text-sm font-semibold"
                    onClick={() => window.location.href = '/admin/edificios/unidades'}
                    >
                    Ver Unidades
                    </button>
                </div>
                ))}
            </div>
        </Layout>
    )
}

export default AdminEdificios;