import React from 'react';
import { useGetData } from '../hooks/useGetData';
import DataTable from 'react-data-table-component';

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
      selector: (row) => row.official_account_category_spa,
    },
    {
      selector: (row) => row.official_account,
    },
    {
      selector: (row) => row.official_account_verified,
    },
  ];

  return <DataTable title={accounts[0].country_name_spa} columns={columns} data={accounts} />;
};
