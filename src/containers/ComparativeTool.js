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
    monthlyTweets: true,
  })

  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 4,  
  })
  
  const handleComparison = () => {
   
    setDataComparing({
      accounts,
      categories,
      period,
    })   

    
  }
 
  return (
    <>
      
        <CompAccountSelector setAccounts={setAccounts} />
        <CompCategoryCb setCategories={setCategories} />
        <CompPeriodSlider setPeriod={setPeriod} />
        <div className='btnContainer'>
        <Button variant="contained" onClick={handleComparison} className='btn'>COMPARAR</Button>
        </div>
      
      
    </>
  );
};
