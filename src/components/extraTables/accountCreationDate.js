import React from 'react';
import DataTable from 'react-data-table-component';
import { getActivityCreactionDate } from '../../helpers/getActivityCreactionDate';
import useGetCountryNames from '../../hooks/useGetCountryNames';
const AccountCreationDate = () => {
  let answer = getActivityCreactionDate();
  let countryNames = useGetCountryNames();
  console.log('answer', answer);
  console.log('countryNames', countryNames);
  let data;
  if (answer.length > 0) {
    data = answer;
  }
  if (countryNames.length === 0) {
    return <div>Loading...</div>;
  }
  console.log('data', data);

  let columns = [
    {
      name: 'Usuario',
      selector: row => row.official_account,
     
      wrap: true,
    },
    {
      name: 'País',
      selector: row => {
        let country = countryNames.find(
          (country) => country.countryInId === row.country_id
        );
        return country.countryName;
      },
      sortable: true,
      wrap: true,
    },
    {
      name: 'Fecha de Creación',
      selector: row => row.creationDate,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Numero de Seguidores',
      selector: row => row.followers_number,
      sortable: true,
      wrap: true,
    },
  ];



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
          value: 'all',
        },
        selectAllRowsItem: true,
      }}
      striped={true}
      highlightOnHover={true}

    />
  );
};

export default AccountCreationDate;
