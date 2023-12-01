import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState, memo } from 'react'
import useGetCountryNames from '../hooks/useGetCountryNames'
import PropTypes from 'prop-types'

const CountrySelectFilter = memo(function CountrySelectMemo ({ setCountryFilterActive, setCountryId }) {
  const [countryA, setCountryA] = useState('')
  const countryNames = useGetCountryNames()

  if (countryNames.length === 0) {
    return <div>Loading...</div>
  }
  function handleChange ({ target: { value } }) {
    if (value !== 'null') {
      const countryName = countryNames.find(
        (country) => country.countryInId === value
      )

      setCountryA(value)
      setCountryFilterActive(true)
      setCountryId({
        id: value,
        name: countryName.countryName
      })
    } else {
      setCountryFilterActive(false)
      setCountryId('')
      setCountryA('')
    }
  }

  return (
    <div className="countSelector2">
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
  )
})
CountrySelectFilter.propTypes = {
  setCountryFilterActive: PropTypes.func.isRequired,
  setCountryId: PropTypes.func.isRequired
}

export default CountrySelectFilter
