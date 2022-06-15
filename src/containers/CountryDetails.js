import React from 'react';
import { CountryItem } from '../components/CountryItem';

export const CountryList = ({accountsCountry, countryListManagmentOpen, countryDataState, countrySelectedId}) => {

  
  return (

 
      <CountryItem accountsCountry={accountsCountry} countryListManagmentOpen={countryListManagmentOpen}  countrySelectedId={countrySelectedId} />
      
  
  );
};
