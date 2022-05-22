import React, { useState } from 'react';
import { useGetData } from '../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '2020 - 1',
  },
  {
    value: 2,
    label: '2020 - 2',
  },
  {
    value: 3,
    label: '2021 - 1',
  },
  {
    value: 4,
    label: '2021 - 2',
  },
];

const  valuetext = (value) => {
  // console.log(value)
  return value;
}

export const CompPeriodSlider = ({setPeriod}) => {
  const [value, setValue] = useState([1, 4]);

  const handleChange = (event, newValue) => {
    setValue(newValue);  
    setPeriod({
      startDate:newValue[0],
      endDate:  newValue[1],
    });
  };

  return (
    <div>
      <h4>¿En qué periodo?</h4>
      <Box sx={{ width: 300, marginLeft: 10 }}>
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
