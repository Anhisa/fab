import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";




export function useGetTweetsByCountry(){
  const {fol} = useContext(DataContext);
  const [innerData, setInnerData] = useState(fol);
  const [filteredData, setFilteredData] = useState([]);
  let arrayDuplicate = [];
  useEffect(() => {   
      let array = filterDuplicates(innerData);
      arrayDuplicate = addDuplicates(array);
      setFilteredData(arrayDuplicate);     
  }, []);
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
  newArray = newArray.filter(item => {
    return item.total_tweets_period > 0
  })
  return newArray  
}