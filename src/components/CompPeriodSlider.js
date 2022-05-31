import React, { useState } from 'react';
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

export const CompPeriodSlider = ({ setPeriod }) => {
  const [value, setValue] = useState([1, 4]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    setPeriod({
      startDate: newValue[0],
      endDate: newValue[1],
    });
  };

  return (
    <div style={{
      width: '100%',
      display:' flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h4>Periodo de búsqueda</h4>
      <Box>
        <Slider
          getAriaLabel={() => 'Period range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          marks={marks}
          min={1}
          max={4}
        />
      </Box>
    </div>
  );
};
