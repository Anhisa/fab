import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import { CompCategoryCb } from '../components/CompCategoryCb';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { ComparativePeriodStyled } from '../styles/styledComponents/ComparativeStyled';
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
    
    window.scrollTo(0,document.body.scrollHeight);
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
    <>
      <ComparativePerPeriod setDataComparing={setPeriodComparison} />
      <CompCategoryCb setCategories={setCategories} period={true} />
      <CountrySelectFilter countrysWithData={tweetsByCountry} setCountryFilterActive={setCountryFilterActive} setCountryId={setCountryId} countryDataState={countryDataState}/>
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn">
          COMPARAR
        </Button>
      </div>
    </>
  );
};

export default SelectorComparative;
