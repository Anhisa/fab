import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useGetData } from '../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '2020 semestre I',
  },
  {
    value: 2,
    label: '2020 semestre II',
  },
  {
    value: 3,
    label: '2021 semestre I',
  },
  {
    value: 4,
    label: '2021 semestre II',
  },
];

const valuetext = (value) => {
  return value;
};

export const CompPeriodSlider = ({ setPeriod, data }) => {
  const [value, setValue] = useState([1, 4]);
  let periods1 = [1,4]
  if (data) {
    periods1 = data.map((item) => {
      return parseInt(item.period_id);
    });}
    const [periods, setPeriods] = useState(periods1);  
   

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPeriod({
      startDate: newValue[0],
      endDate: newValue[1],
    });
  };

  useEffect(() => {    
    if (data) {     
      setPeriod({
        startDate: periods1[0],
        endDate: periods1[periods.length-1],
      });
      
      setValue([periods[0], periods[periods.length-1]]);
      return;
    }
    
    setPeriod({
      startDate: value[0],
      endDate: value[1],
    });
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
      }}
    >
      <h4>Periodo de búsqueda</h4>
      <small>Acorde a la data disponible de la cuenta</small>
      <Box>
        <Slider
          getAriaLabel={() => 'Period range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          marks={marks}
          min={periods[0] ?? 1}
          max={periods[periods.length] ?? 4}
        />
      </Box>
    </div>
  );
};
