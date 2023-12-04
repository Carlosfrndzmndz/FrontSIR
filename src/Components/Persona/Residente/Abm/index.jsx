import React, { useState, useEffect, useMemo } from 'react';
import { Button, Container, Row, Col, Form , Modal, Spinner} from 'react-bootstrap';
import { FiEdit, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi';
import ResidenteForm from '../Form';
import LoadingSkeleton from '../../../../Components/LoadingSkeleton';
import { obtenerPersonasPorRol, agregarPersona, eliminarPersona, editarPersona } from '../../../../Context/Persona';
import Layout from '../../../Layout';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Form className="d-flex align-items-center mb-3">
      <FiSearch style={{ marginRight: '5px', marginTop: '0.3rem' }} />
      <Form.Control
        type="text"
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value || undefined)}
        placeholder="Buscar por nombre o documento..."
        style={{ flex: 1 }}
      />
    </Form>
  );
}

const ResidentesAbmPage = () => {
  const [residentes, setResidentes] = useState([]);
  const [residenteSeleccionado, setResidentSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mostrarModalCarga, setMostrarModalCarga] = useState(false); // Estado para el modal de carga

  useEffect(() => {
    const fetchResidente = async () => {
      try {
        const data = await obtenerPersonasPorRol('Residente');
        setResidentes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchResidente();
  }, []);

  const handleGuardarResidente = async (residente) => {
    setMostrarModalCarga(true);
    try {
      if (residenteSeleccionado) {
        await editarPersona(residente);
      } else {
        await agregarPersona(residente);
      }
      const data = await obtenerPersonasPorRol('Residente');
      setResidentes(data);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error saving residentes:', error);
    }
    finally {
      setMostrarModalCarga(false); // Ocultar modal de carga
    }
  };

  const handleEliminarResidente = async (documento) => {
    setMostrarModalCarga(true);
    try {
      await eliminarPersona(documento);
      const data = await obtenerPersonasPorRol('Residente');
      setResidentes(data);
    } catch (error) {
      console.error('Error deleting residente:', error);
    }
    finally {
      setMostrarModalCarga(false);
    }
  };

  const handleEditarResidente = (documento) => {
    const residenteEditar = residentes.find((residente) => residente.documento == documento);
    if (residenteEditar) {
      setResidentSeleccionado(residenteEditar);
      setMostrarModal(true);
    } else {
      console.error("No se encontró el residente con el documento: ", documento);
    }
  };


  const handleAgregarResidente = () => {
    setResidentSeleccionado(null);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setResidentSeleccionado(null);
    setMostrarModal(false);
  };

  const columns = useMemo(() => [
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Documento', accessor: 'documento' },
    {
      Header: 'Acciones',
      accessor: 'acciones',
      Cell: ({ row }) => (
        <>
          <Button variant="outline-primary" onClick={() => handleEditarResidente(row.original.documento)}>
            <FiEdit />
          </Button>
          <Button variant="outline-danger" onClick={() => handleEliminarResidente(row.original.documento)} className="ml-2">
            <FiTrash2 />
          </Button>
        </>
      )
    }
  ], []);

  const filterFunction = (rows, id, filterValue) => {
    return rows.filter(row => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase())
        : true;
    });
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data: residentes, defaultColumn: { Filter: filterFunction } },
    useGlobalFilter,
    useSortBy
  );

  return (
    <Layout>
      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleAgregarResidente} className="mb-3">
              <PersonAddIcon/>
            </Button>
          </Col>
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
          <ResidenteForm onSave={handleGuardarResidente} residenteSeleccionado={residenteSeleccionado} onClose={handleCerrarModal} />
        )}

        {/* Modal de carga */}

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
    </Layout>
  );
};

export default ResidentesAbmPage;
