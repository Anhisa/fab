import axios from 'axios';


import React, { useEffect, useState } from 'react'
import useGetAllData from '../../hooks/useGetAllData';


const AllDataByAccount = () => {
const results ='x'
console.log('results', results);
// 
//   const dataMostMentioned = useGetData(apiMostMentioned);
//   if(dataMostMentioned.loading){
//     return "loading..."
//   }
  // const dataMostReplied = useGetData(apiMostReplied);
  // console.log('dataMostReplied', dataMostReplied);  
  // const dataMostRetweeted = useGetData(apiMostRetweeted);
  // console.log('dataMostRetweeted', dataMostRetweeted);
  // const dataHtMostUsed = useGetData(apiHtMostUsed);
  // console.log('dataHtMostUsed', dataHtMostUsed);
  // const [data, setData] = useState([]);
  // let categories = extractCategories(dataMostMentioned.data, 'mentioned');
  // let duplicados = filterDuplicates(categories, 'account');
  // let exp = duplicados.map(item => {
  // let itemSol = filterDuplicates(item, 'category');
  // let filtered = addDuplicates(itemSol);
  // return filtered;
  // 
  // })
  

  return (
    <div>allDataByAccount</div>
  )
}

export default AllDataByAccount

function extractCategories(data, category) {
  switch(category) {
    case 'mentioned':       
      const htCategories = [];
      return data.forEach(item => {
        htCategories.push({
          category: item.most_mentioned_category_spa,
          count: item.mentions_number,
          account: item.official_account,
          accountId : item.official_account_id
        });
      });
    case 'replied':
      const repliedCategories = [];
       
  }



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