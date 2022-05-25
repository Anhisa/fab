import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { ComparativePeriodStyled } from '../styles/styledComponents/ComparativeStyled';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import CountrySelectFilter from '../components/countrySelectFilter';
const SelectorComparative = ({ setDataComparing }) => {
  const [periodComparison, setPeriodComparison] = useState({
    periodA: '',
    periodB: '',
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
    
    setDataComparing((prev) => {
      return {
        ...prev,
        periodComparison,
        accounts: {
          accountIdA: '',
          accountIdB: '',
        },
        categories,
        isPeriodComparisonActive: true,
        isCountryFilterActive,
        country_id
      };
    });
  };
  return (
    <ComparativePeriodStyled>
      <ComparativePerPeriod setDataComparing={setPeriodComparison} />
      <CompCategoryCb setCategories={setCategories} />
      <CountrySelectFilter countrys={tweetsByCountry} setCountryFilterActive={setCountryFilterActive} setCountryId={setCountryId}/>
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn">
          COMPARAR
        </Button>
      </div>
    </ComparativePeriodStyled>
  );
};

export default SelectorComparative;
