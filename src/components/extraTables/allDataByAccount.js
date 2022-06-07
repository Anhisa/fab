let apiMostMentioned = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned'

let apiMostReplied = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied'

let apiMostRetweeted = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted'

let apiHtMostUsed = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used'

import React, { useState } from 'react'
import { useGetData } from '../../hooks/useGetData'

const AllDataByAccount = () => {
  const dataMostMentioned = useGetData(apiMostMentioned);
  const dataMostReplied = useGetData(apiMostReplied);
  console.log(dataMostReplied.data[0])
  const dataMostRetweeted = useGetData(apiMostRetweeted);
  const dataHtMostUsed = useGetData(apiHtMostUsed);
  const [data, setData] = useState([]);
  let categories = extractMentionedCategories(dataMostMentioned.data);
  let duplicados = filterDuplicates(categories, 'account');
  let exp = duplicados.map(item => {
  let itemSol = filterDuplicates(item, 'category');
  let filtered = addDuplicates(itemSol);
  return filtered;
  
  })
  console.log('all data',exp)

  return (
    <div>allDataByAccount</div>
  )
}

export default AllDataByAccount

function extractMentionedCategories(data){

  const htCategories = [];
  data.forEach(item => {
    htCategories.push({
      category: item.most_mentioned_category_spa,
      count: item.mentions_number,
      account: item.official_account,
      accountId : item.official_account_id
    });
  });

  return htCategories;
}





export function filterDuplicates(data, key) {
  let usersAccountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!usersAccountCheck.includes(item[key])) {
      let duplicates = data.filter((item2) => {
        return item[key] === item2[key];
      });
      usersAccountCheck.push(item[key]);
      arrayDuplicates.push(duplicates);
    }
  });

  return arrayDuplicates;
}

export function addDuplicates (data){
  let newArray = data.map(item => {
    let itemCount = item.reduce((acc, item) => {
      return acc + parseInt(item.count);
    },0)
    return {
      category: item[0].category,
      count: itemCount,
      accountId: item[0].accountId,
      account: item[0].account
    }
  })
  return newArray;
  }