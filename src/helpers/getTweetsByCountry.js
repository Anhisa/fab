import { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-fol'

export function useGetTweetsByCountry(){
  const {data, loading} = useGetData(api);
  const [innerData, setInnerData] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  let arrayDuplicate = [];
  useEffect(() => {
    if (innerData !== false) {
      setInnerData(data);
    }
    
      let array = filterDuplicates(innerData);
      arrayDuplicate = addDuplicates(array);
      setFilteredData(arrayDuplicate);
  
      console.log('array duplicados', arrayDuplicate)
  }, [data, loading]);
  return filteredData
}
function filterDuplicates(data) {
  let accountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!accountCheck.includes(item.country_id)) {
      let duplicates = data.filter((item2) => {
        return item.country_id === item2.country_id
      });
      accountCheck.push(item.country_id);

      arrayDuplicates.push(duplicates);
    }
  });

  return arrayDuplicates;
}
function addDuplicates(data){
  let newArray = data.map(item => {
    let countryId = item[0].country_id;
    let total_tweets_period = item.reduce((acc, item) => {
      return acc + parseInt(item.total_tweets_period)
    }, 0)
    return {
      countryId,
      total_tweets_period
    }
  })
  return newArray  
}