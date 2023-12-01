import React from 'react'
import DataTable from 'react-data-table-component'
import { getActivityCreactionDate } from '../../helpers/getActivityCreactionDate'
import useGetCountryNames from '../../hooks/useGetCountryNames'

const AccountCreationDate = () => {
  const answer = getActivityCreactionDate()
  const countryNames = useGetCountryNames()

  let data
  if (answer.length > 0) {
    data = answer
  }
  if (countryNames.length === 0) {
    return <div>Loading...</div>
  }
  // console.log('data', data);

  const columns = [
    {
      name: 'Usuario',
      selector: (row) => row.official_account,

      wrap: true
    },
    {
      name: 'País',
      selector: (row) => {
        const country = countryNames.find(
          (country) => country.countryInId === row.country_id
        )

        return country?.countryName ?? 'Bahamas'
      },
      sortable: true,
      wrap: true
    },
    {
      name: 'Fecha de Creación',
      selector: (row) => row.creationDate,
      sortable: true,
      wrap: true
    },
    {
      name: 'Numero de Seguidores',
      selector: (row) => row.followers_number,
      sortable: true,
      wrap: true
    }
  ]

  return (
    <DataTable
      title="Cuentas por usuarios y fechas de creacion"
      columns={columns}
      data={data}
      pagination={true}
      paginationPerPage={10}
      paginationRowsPerPageOptions={[5, 10, 15, 20]}
      paginationComponentOptions={{
        rowsPerPageText: 'Filas por página:',
        rangeSeparatorText: 'de',
        selectAllRowsItem: {
          text: 'Todos',
          value: 'all'
        }
      }}
      striped={true}
      highlightOnHover={true}
    />
  )
}

export default AccountCreationDate
