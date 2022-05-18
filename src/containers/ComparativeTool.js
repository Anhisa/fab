import React, { useState } from 'react';

import { CompAccountSelector } from '../components/CompAccountSelector';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';


import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

export const ComparativeTool = ({setDataComparing}) => {
  const [accounts, setAccounts] = useState({
    accountIdA: '',
    accountIdB: '',
  })
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
  })

  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 1,  
  })
  
  const handleComparison = () => {
    setDataComparing({
      accounts,
      categories,
      period,
    })
  }
 
  return (
    <div>
      {/* <TableContext> */}
        <CompAccountSelector setAccounts={setAccounts} />
        <CompCategoryCb setCategories={setCategories} />
        <CompPeriodSlider setPeriod={setPeriod} />
        <Button variant="contained" onClick={handleComparison}>COMPARAR</Button>
      {/* </TableContext> */}
      
    </div>
  );
};
