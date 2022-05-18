import React, { useState } from 'react';
import { useGetData } from '../hooks/useGetData';
import { CompAccountSelector } from '../components/CompAccountSelector';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { TableContext } from '../context/TableContext';

import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

export const ComparativeTool = () => {
  const [accounts, setAccounts] = useState({
    accountA: '',
    accountB: '',
  })
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
  })

  const [period, setPeriod] = useState({
    startDate: 0,
    endDate: 0,  
  })
  console.log(categories)
  return (
    <div>
      {/* <TableContext> */}
        <CompAccountSelector setAccounts={setAccounts} />
        <CompCategoryCb setCategories={setCategories} />
        <CompPeriodSlider setPeriod={setPeriod} />
        <Button variant="contained">COMPARAR</Button>
      {/* </TableContext> */}
    </div>
  );
};
