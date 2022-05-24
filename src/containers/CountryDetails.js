import React from 'react';
import { CountryItem } from '../components/CountryItem';

export const CountryList = ({accounts, countryListManagment}) => {
  if (accounts.length === 0) {
    return <>No hay data</>;
  }
  
  return (

 
      <CountryItem accounts={accounts} countryListManagment={countryListManagment} />
      
  
  );
};
