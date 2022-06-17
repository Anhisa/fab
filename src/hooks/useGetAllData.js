import axios from 'axios';
import React, { useEffect, useState } from 'react';

let apiMostMentioned =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
let apiMostReplied =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
let apiMostRetweeted =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';
let apiHtMostUsed =
  'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
let fol = 'https://fundacionandresbello.org/wp-json/fab/v1/official-fol';
let countries = 'https://fundacionandresbello.org/wp-json/fab/v1/countries'
let officialAccounts = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts'
let monthlyTweets = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets'
const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';



const useGetAllData = () => {
  const [data, setData] = useState({});
  const allPromises = [
    axios.get(apiMostMentioned),
    axios.get(apiMostReplied),
    axios.get(apiMostRetweeted),
    axios.get(apiHtMostUsed),
    axios.get(fol),
    axios.get(countries),
    axios.get(officialAccounts),
    axios.get(monthlyTweets)

  ];

  useEffect(async () => {
    try {
      const result = await Promise.all(allPromises);
      const mostMentioned = result[0].data;
      const mostReplied = result[1].data;
      const mostRetweeted = result[2].data;
      const htMostUsed = result[3].data;
      const fol = result[4].data;
      const countries = result[5].data;
      const officialAccounts = result[6].data;
      const monthlyTweets = result[7].data;
      const allData = {
        mostMentioned,
        mostReplied,
        mostRetweeted,
        htMostUsed,
        fol,
        countries,
        officialAccounts,
        monthlyTweets,
        geoUrl
      };
      setData(allData);
    
    } catch (error) {
      console.log(error);
    }
  }, []);
  return data;
};

export default useGetAllData;
