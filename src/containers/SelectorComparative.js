import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import { CompCategoryCb } from '../components/CompCategoryCb';

import { ComparativeStyled } from '../styles/styledComponents/ComparativeStyled';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import CountrySelectFilter from '../components/countrySelectFilter';

import UsePeriodErrors from '../hooks/usePeriodErrors';
const SelectorComparative = ({ setDataComparing, countryDataState }) => {
  const [periodComparison, setPeriodComparison] = useState({
    periodA: {
      id: '',
      name: '',
    },
    periodB: {
      id: '',
      name: '',
    },
  });
  const [isCountryFilterActive, setCountryFilterActive] = useState(false);
  const [country_id, setCountryId] = useState('');
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
    monthlyTweets: true,
  });
  const [errors, setErrors] = useState({
    samePeriods: false,
    emptyPeriods: false,
    nonAscendingPeriods: false,
  });
  const [firstTime, setFirstTime] = useState(true);
  const thereIsError = Object.values(errors).some((error) => error);
  console.log('there is error', thereIsError);
  let tweetsByCountry = useGetTweetsByCountry();

  const handleComparison = () => {
    window.scrollTo(0, 550);
    setFirstTime(false);
    setDataComparing((prev) => {
      return {
        ...prev,
        periodComparison,
        accounts: {
          accountIdA: {
            id: 'null',
            name: '',
          },
          accountIdB: {
            id: 'null1',
            name: '',
          },
        },
        categories,
        isPeriodComparisonActive: true,
        isCountryFilterActive,
        country_id,
      };
    });
  };
  return (
    <ComparativeStyled>
      <ComparativePerPeriod setDataComparing={setPeriodComparison} />
      <CompCategoryCb
        setCategories={setCategories}
        period={true}
        isPeriodComparisonActive={true}
      />
      <CountrySelectFilter
        countrysWithData={tweetsByCountry}
        setCountryFilterActive={setCountryFilterActive}
        setCountryId={setCountryId}
        countryDataState={countryDataState}
      />
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn" disabled={thereIsError}>
          COMPARAR
        </Button>
      </div>
     {!firstTime &&  <UsePeriodErrors periodComparison={periodComparison} errors={errors} setErrors={setErrors}/>}
    </ComparativeStyled>
  );
};

export default SelectorComparative;
