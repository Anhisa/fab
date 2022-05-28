import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/countries';

const CountrySelectFilter = ({ countrysWithData, setCountryFilterActive, setCountryId, countryDataState }) => {
  const [innerData, setInnerData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [countriesAllData, setCountriesAllData] = countryDataState;
  const [countryA, setCountryA] = useState('');
  let countryIds = countrysWithData.map((country) => country.countryId);
  let { data, loading } = useGetData(api);
  let countryNames = [] 
  useEffect(() => {
    if (!loading) {
      if (data.length > 0 && countriesData.length === 0 ) {
        setInnerData(data);
        setCountriesAllData(data);
        countryNames = countryIds.map((countryId) => {
          const country = innerData.find(
            (country) => country.country_id === countryId
          );
          let countryName = country?.country_name_spa || '';
          let countryInId = country?.country_id;
          return { countryName, countryInId,};
        });
        setCountriesData(countryNames);
      }
      
    }
  }, [loading, data,countryNames ]);

  if (!data || !innerData) {
    return <div>Loading...</div>;
  }
  function handleChange({target: {value}}) {
    
    if(value !== 'null') {

    let countryName = countriesData.find((country) => country.countryInId === value);
    
    setCountryA(value);    
    setCountryFilterActive(true)
    setCountryId({
      id: value,
      name: countryName.countryName,
    })
    } else {
      setCountryFilterActive(false)
      setCountryId('')
      setCountryA('');
    }

  }

  return (
    <div className="countSelector">
      <h4>Filtrar por país:</h4>
      <div className="selectors">
        <FormControl className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Todos los paises</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={countryA}
            onChange={handleChange}
          >
            <MenuItem value="null">
              <em>Todos</em>
            </MenuItem>
            {countriesData.map((item) => (
              <MenuItem key={`oa-${item.countryInId}`} value={item.countryInId} >
                <div>
                  <h6>{item.countryName}</h6>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CountrySelectFilter;
