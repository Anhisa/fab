import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getFlag } from '../helpers/getFlag';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const CountryItem = ({accounts}) => {
  // const {official_account_name_spa,official_account_category_spa, official_account, official_account_verified} = item;
  // const data = {official_account_category_spa, official_account, official_account_verified};
  // 
  // const response = useGetData(api);
  // const items = response.data;
  // const countryId = '14';
  // const data = items.filter((account) => account.country_id === countryId);
  const columns = [
    {
      name:'Nombre',
      selector: (row) => row.official_account_category_spa,
      sortable: true,
    },
    {
      name:'Cuenta',
      selector: (row) => <Link to={`/diplomacia-digital/${row.official_account}`}>  {row.official_account} </Link>,
      sortable: true
    },
    {
      name:'Verificado',
      selector: (row) => row.official_account_verified === 'si'? <VerifiedIcon color='primary'/> : <VerifiedIcon color='disabled'/>,
    
      
    },
  ];

  return <DataTable title={
    <div style={{display:'flex','flex-direction': 'row'}}>
  <p>{accounts[0].country_name_spa}</p>
  <img src={getFlag(accounts[0].country_name_eng)} alt={`Bandera de ${accounts[0].country_name_spa}`} style={{width:'80px'}}/>
  </div>
} columns={columns} data={accounts} />;
};
