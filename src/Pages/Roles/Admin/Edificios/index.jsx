import Layout from "../../../../Components/Layout";
import { useState, useEffect } from 'react';
import { fetchData } from '../../../../Context/Edificios/Get';

function AdminEdificios(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await fetchData());
        }
        fetchAPI();
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