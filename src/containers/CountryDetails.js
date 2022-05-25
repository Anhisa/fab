import React from 'react';
import { CountryItem } from '../components/CountryItem';

export const CountryList = ({accountsCountry, countryListManagment, countryDataState, countrySelectedId}) => {

  
  return (

 
      <CountryItem accountsCountry={accountsCountry} countryListManagment={countryListManagment} countryDataState={countryDataState} countrySelectedId={countrySelectedId} />
      
  
  );
};
