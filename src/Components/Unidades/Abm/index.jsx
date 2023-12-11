import React, { useState, useEffect, useMemo } from 'react';
import { Button, Container, Row, Col, Form, Modal, Spinner } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineAddHome } from "react-icons/md";
import { FaEdit ,FaTrash } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import UnidadForm from '../Form';
import LoadingSkeleton from '../../LoadingSkeleton';
import { agregarUnidad, editarUnidad, eliminarUnidad } from '../../../Context/Unidad';
import { obtenerEdificioPorCodigo, unidadesPorEdificio } from '../../../Context/Edificios';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './UnidadesPage.css';
import { MdEdit } from "react-icons/md";
import AccionesUnidadModal from '../MasOpciones';

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Form className="d-flex align-items-center mb-3">
      <FiSearch style={{ marginRight: '5px', marginTop: '0.3rem' }} />
      <Form.Control
        type="text"
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value || undefined)}
        placeholder="Buscar por piso o número..."
        style={{ flex: 1 }}
      />
    </Form>
  );
}

const UnidadesPage = () => {
  const [unidades, setUnidades] = useState([]);
  const [edificios, setEdificios] = useState([]);
  const [edificioSeleccionado, setEdificioSeleccionado] = useState([]);
  const [unidadSeleccionado, setUnidadSeleccionado] = useState({ edificio: { codigo: '', nombre: '' }, piso: '', numero: '', identificador: null });
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const edificiosData = await obtenerEdificioPorCodigo();
        setEdificios(edificiosData.data);
        if (edificiosData.length > 0) {
          setEdificioSeleccionado(edificiosData.data[0]);
          console.log('edificioSeleccionado', edificioSeleccionado);
          fetchUnidades(edificiosData.data[0][0]);
        }
      } catch (error) {
        console.error('Error fetching edificios:', error);
      }
    };

    fetchEdificios();
  }, []);

  const fetchUnidades = async (edificioId) => {
    setLoading(true);
    try {
      const unidadesData = await unidadesPorEdificio(edificioId);
      if (unidadesData.status === 200) {
        setUnidades(unidadesData.data);
        console.log('unidades', unidadesData.data);
      }
      else if (unidadesData.status === 403) {
        setUnidades([]);
      }
      else {
        setUnidades([]);
      }
    } catch (error) {
      console.error('Error fetching unidades:', error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleEdificioChange = (event) => {
    const selectedEdificioId = event.target.value;
    setEdificioSeleccionado(edificios.find((edificio) => edificio[0] == selectedEdificioId));
    fetchUnidades(selectedEdificioId);
  };

  const handleGuardarUnidad = async (nuevaUnidad) => {
    setMostrarModalCarga(true);
    try {
      if (nuevaUnidad.identificador) {
        const unidad = {
          identificador: nuevaUnidad.identificador,
          codigo: nuevaUnidad.edificio,
          piso: nuevaUnidad.piso,
          numero: nuevaUnidad.numero
        }
        console.log('unidad-----------', unidad);
        await editarUnidad(unidad);
      } else {
        const unidadCrear = {
          codigo: nuevaUnidad.edificio,
          piso: nuevaUnidad.piso,
          numero: nuevaUnidad.numero
        }
        await agregarUnidad(unidadCrear);
      }
      fetchUnidades(edificioSeleccionado[0]);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving unidad:', error);
    }
    finally {
      setMostrarModalCarga(false);
    }
  };

  const handleEliminarUnidad = async (codigo) => {
    setMostrarModalCarga(true);
    try {
      await eliminarUnidad(codigo);
      fetchUnidades(edificioSeleccionado[0]);
    } catch (error) {
      console.error('Error deleting unidad:', error);
    }
    finally {
      setMostrarModalCarga(false);
    }
  };

  const handleAgregarUnidad = () => {
    setUnidadSeleccionado({ edificio: { codigo: edificioSeleccionado[0], nombre: edificioSeleccionado[2] }, piso: '', numero: '', identificador: null });
    console.log('unidadSeleccionado', unidadSeleccionado);
    setMostrarModal(true);
  };

  const handleEditarUnidad = (unidad) => {
    setMostrarModal(true);
    const unidadEditar = unidad;
    setUnidadSeleccionado({ edificio: unidadEditar.edificio, piso: unidadEditar.piso, numero: unidadEditar.numero, identificador: unidadEditar.id });
  };

  const handleCerrarModal = () => {
    setUnidadSeleccionado(null);
    setMostrarModal(false);
  };

  const handleOpciones = (unidad) => {
    setUnidadSeleccionado(unidad);
    abrirModal(true);
  };

  const abrirModal = (unidad) => {
    setUnidadSeleccionado(unidad);
    setShowModal(true);
  };

  const columns = useMemo(() => [
    { Header: 'Edificio', accessor: 'edificio.nombre' },
    { Header: 'Piso', accessor: 'piso' },
    { Header: 'Número', accessor: 'numero' },
    {
      Header: 'Acciones',
      accessor: 'acciones',
      Cell: ({ row }) => (
        <>
          <Button variant="outline-secundary" onClick={() => handleOpciones(row.original)} className="ml-2">
            <SlOptions />
          </Button>
          <Button variant="outline-primary" onClick={() => handleEditarUnidad(row.original)} className="ml-2">
            <FaEdit />
          </Button>
          <Button variant="outline-danger" onClick={() => handleEliminarUnidad(row.original.id)} className="ml-2">
            <FaTrash  />
          </Button>
        </>
      )
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data: unidades },
    useGlobalFilter,
    useSortBy
  );

  return (
    <Container className="mt-20">
      <Row className="mt-3 align-items-center">
      <Col>
          <Form.Group controlId="formEdificioSelect">
            <Form.Label>Selecciona un Edificio</Form.Label>
            <Form.Control as="select" value={edificioSeleccionado[0]} onChange={handleEdificioChange} className="mb-3">
              <option value="" disabled>Selecciona un edificio</option>
              {edificios.map((edificio) => (
                <option key={edificio[0]} value={edificio[0]}>
                  {edificio[2]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => handleAgregarUnidad()}>
            <MdOutlineAddHome />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <GlobalFilter
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </Col>
      </Row>

      <Row>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </Row>

      {mostrarModal && (
        <UnidadForm
          onSave={handleGuardarUnidad}
          unidadSeleccionado={unidadSeleccionado}
          onClose={() => setMostrarModal(false)}
        />
      )}

      {showModal && ( <AccionesUnidadModal
          show={showModal}
          onHide={() => setShowModal(false)}
          unidad={unidadSeleccionado}
          dialogClassName="modal-90w"
        /> )}

      <Modal show={mostrarModalCarga} centered>
        <Modal.Body>
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
            <p>Procesando...</p>
          </div>
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default UnidadesPage;