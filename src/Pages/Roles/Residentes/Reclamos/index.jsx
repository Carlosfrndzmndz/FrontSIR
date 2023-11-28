import {React, useState, useEffect } from "react";
import Reclamo from "../../../../Components/Reclamo/Reclamo";
import ResidenteNavbar from "../../../../Components/Navbar/Residente";

const reclamosData = 
        [
            {
                "numero": 1,
                "usuario": {
                    "documento": "DNI11222333",
                    "nombre": "Sebastian, Bernasconi"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "terminado",
                "imagenes": [
                    {
                        "numero": 1,
                        "direccion": "https://lh3.googleusercontent.com/a/AItbvmkdcotQhutw27m1M7OAyvswjXTHUG7U9mcfklGY=s96-c",
                        "tipo": "jpg"
                    },
                    {
                        "numero": 2,
                        "direccion": "https://lh3.googleusercontent.com/a/AItbvmkdcotQhutw27m1M7OAyvswjXTHUG7U9mcfklGY=s96-c",
                        "tipo": "jpg"
                    }
                ],
                "comentarios": [
                    {
                        "idcomentario": 1,
                        "texto": "Test",
                        "fecha": "2023-11-06 20:18:41.916",
                        "persona": {
                            "documento": "DNI43095091",
                            "nombre": "Fernandez Mendez, Carlos"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 2,
                        "texto": "Test",
                        "fecha": "2023-11-06 20:18:41.916",
                        "persona": {
                            "documento": "DNI43095091",
                            "nombre": "Fernandez Mendez, Carlos"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 3,
                        "texto": "Test",
                        "fecha": "2023-11-06 20:25:19.537",
                        "persona": {
                            "documento": "DNI43095091",
                            "nombre": "Fernandez Mendez, Carlos"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 4,
                        "texto": "Test",
                        "fecha": "2023-11-06 20:27:18.784",
                        "persona": {
                            "documento": "DNI43095091",
                            "nombre": "Fernandez Mendez, Carlos"
                        },
                        "imagenes": [],
                        "respuestas": []
                    }
                ]
            },
            {
                "numero": 3,
                "usuario": {
                    "documento": "DNI11222333",
                    "nombre": "Sebastian, Bernasconi"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 4,
                "usuario": {
                    "documento": "DNI11222333",
                    "nombre": "Sebastian, Bernasconi"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 5,
                "usuario": {
                    "documento": "DNI11222333",
                    "nombre": "Sebastian, Bernasconi"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 6,
                "usuario": {
                    "documento": "DNI11222333",
                    "nombre": "Sebastian, Bernasconi"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 7,
                "usuario": {
                    "documento": "DNI43095091",
                    "nombre": "Fernandez Mendez, Carlos"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 8,
                "usuario": {
                    "documento": "DNI43095091",
                    "nombre": "Fernandez Mendez, Carlos"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": [
                    {
                        "idcomentario": 5,
                        "texto": "Test",
                        "fecha": "2023-11-06 22:42:23.788",
                        "persona": {
                            "documento": "DNI43095091",
                            "nombre": "Fernandez Mendez, Carlos"
                        },
                        "imagenes": [],
                        "respuestas": []
                    }
                ]
            },
            {
                "numero": 9,
                "usuario": {
                    "documento": "DNI087717",
                    "nombre": "no, idea"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "prueba ubicacion",
                "descripcion": "prueba descripcion",
                "unidad": {
                    "id": 1,
                    "piso": "1",
                    "numero": "1",
                    "habitado": true,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 10,
                "usuario": {
                    "documento": "DNI087717",
                    "nombre": "no, idea"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "test ubicacion",
                "descripcion": "test descripcion",
                "unidad": {
                    "id": 12,
                    "piso": "7",
                    "numero": "7",
                    "habitado": false,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "nuevo",
                "imagenes": [],
                "comentarios": []
            },
            {
                "numero": 11,
                "usuario": {
                    "documento": "DNI087717",
                    "nombre": "no, idea"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "test ubicacion",
                "descripcion": "test descripcion",
                "unidad": {
                    "id": 12,
                    "piso": "7",
                    "numero": "7",
                    "habitado": false,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "enProceso",
                "imagenes": [
                    {
                        "numero": 1002,
                        "direccion": "https://lh3.googleusercontent.com/a/AItbvmkdcotQhutw27m1M7OAyvswjXTHUG7U9mcfklGY=s96-c",
                        "tipo": "jpg"
                    }
                ],
                "comentarios": [
                    {
                        "idcomentario": 6,
                        "texto": "Test",
                        "fecha": "2023-11-07 14:39:57.078",
                        "persona": {
                            "documento": "DNI087717",
                            "nombre": "no, idea"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 7,
                        "texto": "Test",
                        "fecha": "2023-11-07 16:27:06.583",
                        "persona": {
                            "documento": "DNI087717",
                            "nombre": "no, idea"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 8,
                        "texto": "Test",
                        "fecha": "2023-11-07 20:01:39.913",
                        "persona": {
                            "documento": "DNI087717",
                            "nombre": "no, idea"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 9,
                        "texto": "Test",
                        "fecha": "2023-11-07 20:02:29.581",
                        "persona": {
                            "documento": "DNI12345677",
                            "nombre": "Claudio, Gocio"
                        },
                        "imagenes": [],
                        "respuestas": []
                    }
                ]
            },
            {
                "numero": 12,
                "usuario": {
                    "documento": "DNI12345677",
                    "nombre": "Claudio, Gocio"
                },
                "edificio": {
                    "codigo": 1,
                    "nombre": "sol radiante",
                    "direccion": "calle 848"
                },
                "ubicacion": "test ubicacion",
                "descripcion": "test descripcion",
                "unidad": {
                    "id": 17,
                    "piso": "10",
                    "numero": "1",
                    "habitado": false,
                    "edificio": {
                        "codigo": 1,
                        "nombre": "sol radiante",
                        "direccion": "calle 848"
                    }
                },
                "estado": "enProceso",
                "imagenes": [
                    {
                        "numero": 1003,
                        "direccion": "https://lh3.googleusercontent.com/a/AItbvmkdcotQhutw27m1M7OAyvswjXTHUG7U9mcfklGY=s96-c",
                        "tipo": "jpg"
                    }
                ],
                "comentarios": [
                    {
                        "idcomentario": 10,
                        "texto": "Test",
                        "fecha": "2023-11-07 20:02:44.663",
                        "persona": {
                            "documento": "DNI12345677",
                            "nombre": "Claudio, Gocio"
                        },
                        "imagenes": [],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 12,
                        "texto": "Test",
                        "fecha": "2023-11-12 10:28:05.844",
                        "persona": {
                            "documento": "DNI12345677",
                            "nombre": "Claudio, Gocio"
                        },
                        "imagenes": [
                            {
                                "numero": 1005,
                                "direccion": "prueba HTTP",
                                "tipo": "jpg"
                            }
                        ],
                        "respuestas": [
                            {
                                "idcomentario": 13,
                                "texto": "Test",
                                "fecha": "2023-11-12 10:28:48.746",
                                "persona": {
                                    "documento": "DNI12345677",
                                    "nombre": "Claudio, Gocio"
                                },
                                "imagenes": [
                                    {
                                        "numero": 1006,
                                        "direccion": "prueba HTTP",
                                        "tipo": "jpg"
                                    }
                                ],
                                "respuestas": [{
                                    "idcomentario": 11,
                                    "texto": "Test",
                                    "fecha": "2023-11-12 10:24:58.556",
                                    "persona": {
                                        "documento": "DNI12345677",
                                        "nombre": "Claudio, Gocio"
                                    },
                                    "imagenes": [
                                        {
                                            "numero": 1004,
                                            "direccion": "prueba HTTP",
                                            "tipo": "jpg"
                                        }
                                    ],
                                    "respuestas": []
                                }]
                            },
                            {
                                "idcomentario": 14,
                                "texto": "Test",
                                "fecha": "2023-11-12 10:32:49.587",
                                "persona": {
                                    "documento": "DNI12345677",
                                    "nombre": "Claudio, Gocio"
                                },
                                "imagenes": [
                                    {
                                        "numero": 1008,
                                        "direccion": "prueba HTTP",
                                        "tipo": "jpg"
                                    }
                                ],
                                "respuestas": []
                            },
                            {
                                "idcomentario": 15,
                                "texto": "Test",
                                "fecha": "2023-11-12 10:36:59.598",
                                "persona": {
                                    "documento": "DNI12345677",
                                    "nombre": "Claudio, Gocio"
                                },
                                "imagenes": [
                                    {
                                        "numero": 1009,
                                        "direccion": "prueba HTTP",
                                        "tipo": "jpg"
                                    }
                                ],
                                "respuestas": []
                            },
                            {
                                "idcomentario": 16,
                                "texto": "Test",
                                "fecha": "2023-11-12 10:37:31.377",
                                "persona": {
                                    "documento": "DNI12345677",
                                    "nombre": "Claudio, Gocio"
                                },
                                "imagenes": [
                                    {
                                        "numero": 1010,
                                        "direccion": "prueba HTTP",
                                        "tipo": "jpg"
                                    }
                                ],
                                "respuestas": []
                            }
                        ]
                    },
                    {
                        "idcomentario": 13,
                        "texto": "Test",
                        "fecha": "2023-11-12 10:28:48.746",
                        "persona": {
                            "documento": "DNI12345677",
                            "nombre": "Claudio, Gocio"
                        },
                        "imagenes": [
                            {
                                "numero": 1006,
                                "direccion": "prueba HTTP",
                                "tipo": "jpg"
                            }
                        ],
                        "respuestas": []
                    },
                    {
                        "idcomentario": 15,
                        "texto": "Test",
                        "fecha": "2023-11-12 10:36:59.598",
                        "persona": {
                            "documento": "DNI12345677",
                            "nombre": "Claudio, Gocio"
                        },
                        "imagenes": [
                            {
                                "numero": 1009,
                                "direccion": "prueba HTTP",
                                "tipo": "jpg"
                            }
                        ],
                        "respuestas": []
                    }
                ]
            }
        ];

const ReclamosLista = () => {
    const [reclamos, setReclamos] = useState([]);

    useEffect(() => {
        // Simulamos la carga de datos (aquí cargarías los datos de tu API o fuente de datos)
        setReclamos(reclamosData);
    }, []);

    // Verificamos si 'reclamos' es un array antes de intentar renderizarlo
    if (!Array.isArray(reclamos) || reclamos.length === 0) {
        return <p>Cargando reclamos...</p>;
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