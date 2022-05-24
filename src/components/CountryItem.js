import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getFlag } from '../helpers/getFlag';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const CountryItem = ({ accounts, countryListManagment }) => {
  const {open, setOpen} = countryListManagment;

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.official_account_category_spa,
      sortable: true,
    },
    {
      name: 'Cuenta',
      selector: (row) => (
        <Link to={`/diplomacia-digital/${row.official_account}`}>
          {' '}
          {row.official_account}{' '}
        </Link>
      ),
      sortable: true,
    },
    {
      name: 'Verificado',
      selector: (row) =>
        row.official_account_verified === 'si' ? (
          <VerifiedIcon color="primary" />
        ) : (
          <VerifiedIcon color="disabled" />
        ),
    },
  ];
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {open && <DataTable
      title={
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p>{accounts[0].country_name_spa}</p>
          <img
            src={getFlag(accounts[0].country_name_eng)}
            alt={`Bandera de ${accounts[0].country_name_spa}`}
            style={{ width: '80px' }}
          />
          <button type='button' className='btn btn-primary' onClick={handleClose}>
            close
          </button>
        </div>
      }
      columns={columns}
      data={accounts}
    />}
    </>
  );
};
