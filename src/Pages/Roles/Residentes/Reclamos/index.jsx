import Layout from "../../../../Components/Layout";
import ResidenteNavbar from "../../../../Components/Navbar/Residente";
import Reclamo from "../../../../Components/Reclamo";

function ResidenteReclamos(){
    const reclamo = {
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
                "respuestas": []
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

    return(
        <>
            <ResidenteNavbar/>
            <Reclamo {...{reclamo}}/>
        </>
    )
}

export default ResidenteReclamos;