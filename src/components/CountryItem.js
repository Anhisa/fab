import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getFlag } from '../helpers/getFlag';
import { CountryCardSelectStyled, EmptyCardStyled } from '../styles/styledComponents/CountryCardSelect';
import useGetCountries from '../hooks/useGetCountries';
import { DataTableStyled } from '../styles/styledComponents/ComparativeStyled';
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
export const CountryItem = ({ accountsCountry, countryListManagmentOpen, countryDataState, countrySelectedId }) => {
  const {open, setOpen} = countryListManagmentOpen;
  const [countriesAllData, setCountriesAllData] = countryDataState;  
  const {data, loading} = useGetCountries()
  useEffect(()=> {
    if(!loading) setCountriesAllData(data)
  },[loading])

  function hasRelationWithTaiwan(countryId) {
   if(loading) return false
   const countryData = countriesAllData.find(country => country.country_id === countryId);
   
   return countryData.official_relations_spa === 'Taiwan' ?? false;
  }



  if (accountsCountry.length === 0 && open) {
    const countryData = countriesAllData.find(country => country.country_id === countrySelectedId);
    if(open && hasRelationWithTaiwan(countrySelectedId)) {
      return (
        <div className={open ? 'open' : 'closed'}>
          <CountryCardSelectStyled>
          <p>{countryData.country_name_spa ?? ''}</p>
          <img
            src={getFlag(countryData.country_name_eng)}
            alt={`Bandera de ${countryData.country_name_spa}`}            
          /> 
          <hr/>       
        </CountryCardSelectStyled>
        <EmptyCardStyled>
          <p>
          Tiene relaciones diplomáticas <br></br>
          con La República de China - Taiwán
          </p>          
          </EmptyCardStyled>
          
        </div>
      )
    }
    return (
      <div className={open ? 'open' : 'closed'}>
         <CountryCardSelectStyled>
          <p>{countryData?.country_name_spa ?? ''}</p>
          <img
            src={getFlag(countryData.country_name_eng)}
            alt={`Bandera de ${countryData.country_name_spa}`}            
          /> 
          <hr/>       
        </CountryCardSelectStyled>
        <EmptyCardStyled>
        <p>
          No hay cuentas o data registradas en este país
        </p>
        </EmptyCardStyled>
      
      </div>
    )

  }


  return (
    <>
    <div className={open ? 'open' : 'closed'}>
    <div className='dotted-line'/>
    {open && <DataTableStyled

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

