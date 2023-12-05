import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import LoadingSkeleton from '../../../../Components/LoadingSkeleton';
import Layout from '../../../Layout';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Form className="d-flex align-items-center mb-3">
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

const ResidentesListadoPage = ({ residentes }) => {

  const columns = useMemo(() => [
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Documento', accessor: 'documento' }
  ], []);

  const filterFunction = (rows, id, filterValue) => {
    return rows.filter(row => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? String(rowValue).toLowerCase().includes(String(filterFilter).toLowerCase())
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
            <GlobalFilter
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </Col>
        </Row>

        <Row>
          {!residentes.length ? (
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
      </Container>
    </Layout>
  );
};

export default ResidentesListadoPage;
