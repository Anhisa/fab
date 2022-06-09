import React, { useState } from 'react';
import  Button  from '@mui/material/Button';
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { ComparativePeriodStyled, ComparativeStyled } from '../styles/styledComponents/ComparativeStyled';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import CountrySelectFilter from '../components/countrySelectFilter';
const SelectorComparative = ({ setDataComparing, countryDataState }) => {
  const [periodComparison, setPeriodComparison] = useState({
    periodA: {
      id:'',
      name: '',
    },
    periodB: {
      id:'',
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
  let tweetsByCountry = useGetTweetsByCountry();
  
  const handleComparison = () => {
    
    window.scrollTo(0,200);
    setDataComparing((prev) => {
      return {
        ...prev,
        periodComparison,
        accounts: {
          accountIdA: {
            id: 'null',
            name: ''
          },
          accountIdB: {
            id:'null1',
            name: ''
          },
        },
        categories,
        isPeriodComparisonActive: true,
        isCountryFilterActive,
        country_id
      };
    });
  };
  return (
    <ComparativeStyled>
      <ComparativePerPeriod setDataComparing={setPeriodComparison} />
      <CompCategoryCb setCategories={setCategories} period={true} isPeriodComparisonActive={true} />
      <CountrySelectFilter countrysWithData={tweetsByCountry} setCountryFilterActive={setCountryFilterActive} setCountryId={setCountryId} countryDataState={countryDataState}/>
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn">
          COMPARAR
        </Button>
      </div>
    </ComparativeStyled>
  );
};

export default SelectorComparative;
