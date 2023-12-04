import {React, useState, useEffect } from "react";
import Reclamo from "../../../../Components/Reclamo/Reclamo";
import ResidenteNavbar from "../../../../Components/Navbar/Residente";
import { obtenerReclamosPorDocumento } from "../../../../Context/Reclamo";
import ReclamoSkeleton from "../../../../Components/Reclamo/Reclamo/Skeleton";

const ReclamosLista = () => {
    const [reclamos, setReclamos] = useState([]);

    const documento = localStorage.getItem("documento");

    useEffect(() => {
        const fetchReclamos = async () => {
            const reclamos = await obtenerReclamosPorDocumento(documento);
            setReclamos(reclamos);
        };
        fetchReclamos();
    }, []);

    if (!Array.isArray(reclamos) || reclamos.length === 0) {
        return (<>
            <ResidenteNavbar />
            <div className='mt-20'>
                <ReclamoSkeleton/>
                <ReclamoSkeleton/>
            </div>
            </>);
    }

    return (
        <>
            <ResidenteNavbar />
            <div className='mt-20'>
                {reclamos.map(reclamo => (
                    <Reclamo key={reclamo.numero} reclamo={reclamo} />
                ))}
            </div>
        </>
    );
};

export default ReclamosLista;