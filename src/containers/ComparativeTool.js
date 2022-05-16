import React from 'react';
import { useGetData } from '../hooks/useGetData';
import { CompAccountSelector } from '../components/CompAccountSelector';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';

import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

export const ComparativeTool = () => {

  return (
    <div>
      <CompAccountSelector />
      <CompCategoryCb />
      <CompPeriodSlider />
      <Button variant="contained">COMPARAR</Button>
    </div>
  );
};
