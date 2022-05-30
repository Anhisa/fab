import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getFlag } from '../helpers/getFlag';
import { CountryCardSelectStyled } from '../styles/styledComponents/CountryCardSelect';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

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
export const CountryItem = ({ accountsCountry, countryListManagment, countryDataState, countrySelectedId }) => {
  const {open, setOpen} = countryListManagment;
  const [countriesData] = countryDataState;
  function hasRelationWithTaiwan(countryId) {
    const countryData = countriesData.find(country => country.country_id === countryId);
    
    console.log('funtion taiwan',countryData);
    return countryData?.official_relations_spa === 'Taiwan';
  }

  const handleClose = () => {
    setOpen(false);
  };
  if (accountsCountry.length === 0) {
    if(open &&hasRelationWithTaiwan(countrySelectedId)) {
      return (
        <div className={open ? 'open' : 'closed'}>
          <p>
          Tiene relaciones diplomáticas <br></br>
          con La República de China - Taiwán
          </p>
          <button onClick={handleClose}>
            Cerrar
          </button>
        </div>
      )
    }
    return (
      <div className={open ? 'open' : 'closed'}>
        <p>
          No hay cuentas o data registradas en este país
        </p>
        <button onClick={handleClose}>
          Cerrar
        </button>
      </div>
    )

  }


  return (
    <>
    <div className={open ? 'open' : 'closed'}>
    <div className='dotted-line'/>
    {open && <DataTable

      title={
        <CountryCardSelectStyled>
          <p>{accountsCountry[0]?.country_name_spa ?? ''}</p>
          <img
            src={getFlag(accountsCountry[0].country_name_eng)}
            alt={`Bandera de ${accountsCountry[0].country_name_spa}`}            
          /> 
          <hr/>       
        </CountryCardSelectStyled>
      }
      columns={columns}
      data={accountsCountry}
    />}
    </div>
    </>
  );
};

