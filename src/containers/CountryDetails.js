import React from 'react';
import { CountryItem } from '../components/CountryItem';

export const CountryList = ({accounts, countryListManagment}) => {

  
  return (

 
      <CountryItem accounts={accounts} countryListManagment={countryListManagment} />
      
  
  );
};
