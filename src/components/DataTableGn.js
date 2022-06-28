import React from 'react'
import PropTypes from 'prop-types'
import { columns } from '../helpers/columns'
import { EmptyDataTable, StyledDataTable } from '../styles/styledComponents/StyledDataTable'
import DataTable from 'react-data-table-component'
import { ExpandedComponent } from './ExpandedComponent'

const DataTableGn = (props) => {
  const { rows, title } = props
  return (
    <StyledDataTable className="dataTable">
    <DataTable
      columns={columns}
      data={rows}
      title={
        <>
          <p>
            <b>{title}</b>
          </p>
        </>
      }
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      expandableRowsOnClick={true}
      striped={true}
      noDataComponent={
        <EmptyDataTable>
          <h5>No se registran datos en el periodo seleccionado</h5>
        </EmptyDataTable>
      }
    />
    </StyledDataTable>
  )
}

DataTableGn.propTypes = {
  rows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default DataTableGn
