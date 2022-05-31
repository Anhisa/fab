import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGetCountries from '../hooks/useGetCountries';
import useGetCountryNames from '../hooks/useGetCountryNames';

const CountrySelectFilter = ({
  countrysWithData,
  setCountryFilterActive,
  setCountryId,
  countryDataState,
}) => {
  const [innerData, setInnerData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [countriesAllData, setCountriesAllData] = countryDataState;
  const [countryA, setCountryA] = useState('');

  let  countryNames  = useGetCountryNames();
  

  useEffect(() => {
    setCountriesData(countryNames);
    
  }, [countryNames]);

  if (countryNames.length === 0) {
    return <div>Loading...</div>;
  }
  function handleChange({ target: { value } }) {
    if (value !== 'null') {
      let countryName = countriesData.find(
        (country) => country.countryInId === value
      );

      setCountryA(value);
      setCountryFilterActive(true);
      setCountryId({
        id: value,
        name: countryName.countryName,
      });
    } else {
      setCountryFilterActive(false);
      setCountryId('');
      setCountryA('');
    }
  }

  return (
    <div className="countSelector">
      <h4>Filtrar por país:</h4>
      <div className="selectors">
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
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
            {countryNames.map((item) => (
              <MenuItem key={`oa-${item.countryInId}`} value={item.countryInId}>
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
