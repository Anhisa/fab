import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
const periods = [
  {
    id: 1,
    name: '2020-1',
  },
  {
    id: 2,
    name: '2020-2',
  },
  {
    id: 3,
    name: '2020-Consolidado',
  },
  {
    id: 4,
    name: '2021-1',
  },
  {
    id: 5,
    name: '2021-2',
  },
  {
    id: 6,
    name: '2021-Consolidado',
  },
];
const ComparativePerPeriod = ({setDataComparing}) => {
  const [periodA, setPeriodA] = React.useState('');
  const [periodB, setPeriodB] = React.useState('');
// 

  const handleChangeA = (event) => {
    setPeriodA(event.target.value);
    setDataComparing(prevState => ({
      ...prevState,
      periodA: event.target.value,
      }))
  };
  const handleChangeB = (event) => {
    setDataComparing(prevState => ({
      ...prevState,
      periodB: event.target.value,
      }))
    setPeriodB(event.target.value);
  };
  return (
   
      <div className="countSelector">
        <h4>Periodos que desea comparar:</h4>
        <div className="selectors">
          <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Periodo 1
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label2"
              id="demo-simple-select-filled1"
              value={periodA}
              onChange={handleChangeA}
            >
              <MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              {periods.map((item) => (
                <MenuItem key={`oa-${item.id}`} value={item.id}>
                  <div>
                    <h6>{item.name}</h6>
                  </div>
                </MenuItem>
              ))}
            </Select>
            </FormControl>
            <FormControl
            className="container-fluid form"
            variant="filled"
            sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
              Periodo 2
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label2"
              id="demo-simple-select-filled2"
              value={periodB}
              onChange={handleChangeB}
            >
              <MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              {periods.map((item, index) => (
                <MenuItem key={`oa-${item.id}`} value={item.id}>
                  <div>
                    <h6>{item.name}</h6>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

  );
};

export default ComparativePerPeriod;
