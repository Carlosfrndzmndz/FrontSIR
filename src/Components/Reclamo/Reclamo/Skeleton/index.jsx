import React from 'react';

const ReclamoSkeleton = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4 animate-pulse">
            {/* Skeleton para ReclamoHeader */}
            <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div> {/* Simula el nombre del edificio */}
                <div className="h-6 bg-gray-300 rounded w-1/8"></div> {/* Simula el número del reclamo */}
            </div>

            {/* Skeleton para ReclamoBody */}
            <div className="mb-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div> {/* Simula la ubicación */}
                <div className="h-4 bg-gray-300 rounded w-full mb-3"></div> {/* Simula la descripción */}
                <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Simula el estado */}
            </div>

            {/* Skeleton para ReclamoComentarios */}
            <div>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="pl-4 border-l-2 border-gray-300 mt-2">
                        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div> {/* Simula el nombre del comentarista */}
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div> {/* Simula el texto del comentario */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReclamoSkeleton;
