import React, { useState, useEffect, useMemo } from 'react';
import { Button, Container, Row, Col, Form, Modal, Spinner } from 'react-bootstrap';
import { FiEdit, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi';
import UnidadForm from '../Form';
import LoadingSkeleton from '../../LoadingSkeleton';
import { agregarUnidad, editarUnidad, eliminarUnidad } from '../../../Context/Unidad';
import { obtenerEdificioPorCodigo, unidadesPorEdificio } from '../../../Context/Edificios';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './UnidadesPage.css';

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
    try {
      if (nuevaUnidad.identificador) {
        console.log('nuevaUnidad', nuevaUnidad);
        await editarUnidad(nuevaUnidad);
      } else {
        console.log('nuevaUnidad', nuevaUnidad);
        const unidad = {
          codigo: nuevaUnidad.unidadSeleccionado.edificio.codigo,
          piso: nuevaUnidad.piso,
          numero: nuevaUnidad.numero
        }
        console.log('unidad', unidad);
        await agregarUnidad(unidad);
      }
      fetchUnidades(edificioSeleccionado.codigo);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving unidad:', error);
    }
  };

  const handleEliminarUnidad = async (codigo) => {
    try {
      await eliminarUnidad(codigo);
      fetchUnidades(edificioSeleccionado.codigo);
    } catch (error) {
      console.error('Error deleting unidad:', error);
    }
  };

  const handleAgregarUnidad = () => {
    console.log('edificioSeleccionado agregar', edificioSeleccionado);
    setUnidadSeleccionado({ edificio: { codigo: edificioSeleccionado, nombre: edificioSeleccionado[2] }, piso: '', numero: '', identificador: null });
    console.log('unidadSeleccionado ABM', unidadSeleccionado);
    setMostrarModal(true);
  };

  const handleEditarUnidad = (identificador) => {
    console.log('identificador', identificador);
    console.log('unidades:', unidades);

    const unidadEditar = unidades.find((unidad) => unidad.id === identificador);
    console.log('unidad Editar ABM', unidadEditar);
    console.log(edificioSeleccionado);
    setUnidadSeleccionado({ edificio: edificioSeleccionado, piso: unidadEditar.piso, numero: unidadEditar.numero, identificador: unidadEditar.id });
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setUnidadSeleccionado(null);
    setMostrarModal(false);
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
          <Button variant="outline-primary" onClick={() => handleEditarUnidad(row.original)}>
            <FiEdit />
          </Button>
          <Button variant="outline-danger" onClick={() => handleEliminarUnidad(row.original.id)} className="ml-2">
            <FiTrash2 />
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
            <FiPlus />
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