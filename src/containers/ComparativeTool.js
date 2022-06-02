import React, { useState } from 'react';

import { CompAccountSelector } from '../components/CompAccountSelector';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';


import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { AccountPeriodContainer } from '../styles/styledComponents/AccountPeriodContainer';
import { ComparativePeriodStyled } from '../styles/styledComponents/ComparativeStyled';

export const ComparativeTool = ({ setDataComparing }) => {
  const [accounts, setAccounts] = useState({
    accountIdA: {
      id: '',
      name: '',
    },
    accountIdB: {
      id: '',
      name: '',
    },
  });
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
    monthlyTweets: true,
  });

  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 4,
  });

  const handleComparison = () => {
   //scroll to bottom
    window.scrollTo(0,document.body.scrollHeight);
    setDataComparing((prev) => {
      return {
        ...prev,
        accounts,
        categories,
        period,
        isPeriodComparisonActive: false,
      };
    });
  };

  return (
    <>
      <CompAccountSelector setAccounts={setAccounts} />
      <CompCategoryCb setCategories={setCategories} />
      <AccountPeriodContainer>
        <CompPeriodSlider setPeriod={setPeriod} />
      </AccountPeriodContainer>
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn">
          COMPARAR
        </Button>
      </div>
    </>
  );
};
