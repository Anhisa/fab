import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/dataContext';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';


const useGetCountryNames = () => {
  const {countries} = useContext(DataContext);
  const [countryNames, setCountryNames] = useState([]);
  let tweetsByCountry = useGetTweetsByCountry();
  
  
  useEffect(() => {   
    if (countries) {  
        let countryIds = tweetsByCountry.map((tweet) => tweet.countryId);
      
        let countryNames = countryIds.map((countryId) => {
   
          const country = countries.find(
            (country) => country.country_id === countryId
          );

          let countryName = country.country_name_spa;
          
          let countryInId = country.country_id;
          
          return {countryName, countryInId};
        });

        setCountryNames(countryNames);
    }
  }, [ tweetsByCountry]);
  
  return countryNames;

  
}

export default useGetCountryNames