import { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-fol'

export function getDataAccounts(){
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
  
      
  }, [data, loading]);
  return filteredData
}
function filterDuplicates(data) {
  let accountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!accountCheck.includes(item.official_account_id)) {
      let duplicates = data.filter((item2) => {
        return item.official_account_id === item2.official_account_id
      });
      accountCheck.push(item.official_account_id)
      arrayDuplicates.push(duplicates);
    }
  });

  return arrayDuplicates;
}
function addDuplicates(data){
  let newArray = data.map(item => {
    let accId = item[0].official_account_id;
    let creationDate = item[0]["official_account creation_date"]
    let isVerified = item[0]["official_account_verified"]

    let total_tweets_period = item.reduce((acc, item) => {
      return acc + parseInt(item.total_tweets_period)
    }, 0)
    let followers_number = item.reduce((acc, item) => {
      return acc + parseInt(item.followers_number)
    }, 0)
    return {
      accId,
      total_tweets_period,
      creationDate,
      isVerified,
      followers_number
    }
  })
  return newArray  
}