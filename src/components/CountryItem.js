import React from 'react';
import { useGetData } from '../hooks/useGetData';
import DataTable from 'react-data-table-component';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const CountryItem = () => {
  const response = useGetData(api);
  const items = response.data;
  const countryId = '14';
  const data = items.filter((account) => account.country_id === countryId);
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
  const accountInfo = [];
  const account = items
    .filter((item) => item.country_id === countryId)
    .find((item) => item.country_id === countryId);
  if (account) {
    accountInfo.push(account.country_name_spa);
  }

  return <DataTable title={accountInfo[0]} columns={columns} data={data} />;
};
