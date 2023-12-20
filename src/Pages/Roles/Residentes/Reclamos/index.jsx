import {React, useState, useEffect } from "react";
import Reclamo from "../../../../Components/Reclamo/Reclamo";
import ResidenteNavbar from "../../../../Components/Navbar/Residente";
import { obtenerReclamosPorDocumento } from "../../../../Context/Reclamo";
import ReclamoSkeleton from "../../../../Components/Reclamo/Reclamo/Skeleton";
import ReclamosList from "../../../../Components/ReclamoNuevo";
const ReclamosLista = () => {

    return (
        <>
            <ResidenteNavbar />
            <div className='mt-20'>
            <ReclamosList/>
            </div>
        </>
    );
};

export default ReclamosLista;