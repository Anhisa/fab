import React, { useContext } from 'react';
import { useGetData } from '../hooks/useGetData';
import { CompAccountSelector } from '../components/CompAccountSelector';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { TableContext } from '../context/TableContext';

import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

export const ComparativeTool = () => {
  return (
    <div>
      {/* <TableContext> */}
        <CompAccountSelector />
        <CompCategoryCb />
        <CompPeriodSlider />
        <Button variant="contained">COMPARAR</Button>
      {/* </TableContext> */}
    </div>
  );
};
