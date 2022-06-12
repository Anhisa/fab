import React, { useEffect, useState } from 'react'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import useGetCountries from './useGetCountries';

const useGetCountryNames = () => {
  const {data, loading} = useGetCountries();
  const [countryNames, setCountryNames] = useState([]);
  let tweetsByCountry = useGetTweetsByCountry();
  
  
  useEffect(() => {   
    if (!loading && data.length > 0) {  
        let countryIds = tweetsByCountry.map((tweet) => tweet.countryId);
      
        let countryNames = countryIds.map((countryId) => {
   
          const country = data.find(
            (country) => country.country_id === countryId
          );

          let countryName = country.country_name_spa;
          
          let countryInId = country.country_id;
          
          return {countryName, countryInId};
        });

        setCountryNames(countryNames);
    }
  }, [loading, data, tweetsByCountry]);
  
  return countryNames;

  
}

export default useGetCountryNames