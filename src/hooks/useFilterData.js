import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { TableContext } from '../context/TableContext';
import { useGetData } from './useGetData';

function mergeSort(startArray, from) {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

    if(from ===  'most-mentioned'){
      return mergeMentions(mergeSort(leftArray, from), mergeSort(rightArray, from));     
    }
    if(from === 'most-retweeted' || from === 'most-replied'){
      return mergeTweets(mergeSort(leftArray, from), mergeSort(rightArray, from));
    }
    if(from === 'ht-most-used'){
      return mergeHtMentions(mergeSort(leftArray, from), mergeSort(rightArray, from));
    }
 
  
}

function mergeMentions(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0].mentions_number > rightArray[0].mentions_number) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
}
function mergeTweets(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0].tweets_number > rightArray[0].tweets_number) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
}
//ht_mentions_number
function mergeHtMentions(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0].ht_mentions_number > rightArray[0].ht_mentions_number) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
}

// Toma las cuentas y el periodo del contexto y devuelve un array con los datos de los usuarios
function sortArray(array, from) {
  switch (from) {
    case 'most-replied':
    case 'most-retweeted':
      let sortedArray1 = mergeSort(array, from);
      return sortedArray1;     
    
      
    case 'most-mentioned':
      let sortedArray = mergeSort(array, from);

      return sortedArray;
    case 'ht-most-used':
      let sortedArray2 = mergeSort(array, from);
      return sortedArray2;
      
  }
}

export const useFilterData = (api, from) => {
  const context = useContext(TableContext);
  const { accounts, period } = context;
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useGetData(api);

  const items = data;

  const accountsData = [];

  useEffect(() => {
    let newArray;
    Object.values(accounts).forEach((account) => {
      if (!loading) {
        const data = items.filter(
          (item) =>
            item.official_account_id === account &&
            parseInt(item.period_id) >= period.startDate &&
            parseInt(item.period_id) <= period.endDate
        );

        if (from === 'ht-most-used') {
          let repeatedAccountArrayHt = filterDuplicatesHt(data);
          console.log('repeatedAccountArrayHt', repeatedAccountArrayHt);
          newArray = addDuplicates(repeatedAccountArrayHt, from);
          let sortedArray = sortArray(newArray, from);
          if(sortedArray.length > 10){
            sortedArray = sortedArray.slice(0, 10);
          }
          
          accountsData.push(sortedArray);
        } else {
          let repeatedAccountArray = filterDuplicates(data);
          newArray = addDuplicates(repeatedAccountArray, from);
          let sortedArray = sortArray(newArray, from);
          if(sortedArray.length> 10){
            sortedArray = sortedArray.slice(0, 10);
          }
          
          accountsData.push(sortedArray);
        }
      }
    });

    setFilteredData(accountsData);
  }, [data, context]);

  if (!loading) {
    return filteredData;
  } else {
    return false;
  }
};
//Crear un array con los datos de los usuarios que se repiten
function filterDuplicates(data) {
  let usersAccountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!usersAccountCheck.includes(item.user_account)) {
      let duplicates = data.filter((item2) => {
        return item.user_account === item2.user_account;
      });
      usersAccountCheck.push(item.user_account);
      arrayDuplicates.push(duplicates);
    }
  });

  console.log('duplicates', arrayDuplicates);
  return arrayDuplicates;
}
function filterDuplicatesHt(data) {
  console.log('data desde funcion', data);
  let htAccountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!htAccountCheck.includes(item.ht)) {
      let duplicates = data.filter((item2) => {
        return item.ht === item2.ht;
      });
      htAccountCheck.push(item.ht);

      arrayDuplicates.push(duplicates);
    }
  });

  return arrayDuplicates;
}
// Agrega los elementos duplicados al array principal
function addDuplicates(arrayDuplicades, from) {
  let newArray = [];
  switch (from) {
    case 'most-retweeted': // Suma los tweetsNumber
      newArray = arrayDuplicades.map((item) => {
        let most_retweeted_description_spa = '';
        let user_account = '';
        let most_retweeted_category_spa = '';
        let most_retweeted_category_desc_spa = '';
        let user_accounts_verified = '';
        let official_account = '';

        let tweets_number = item.reduce((acc, item) => {
          user_account = item.user_account;
          most_retweeted_description_spa = item.most_retweeted_description_spa;
          most_retweeted_category_desc_spa =
            item.most_retweeted_category_desc_spa;
          most_retweeted_category_spa = item.most_retweeted_category_spa;
          user_accounts_verified = item.user_accounts_verified;
          official_account = item.official_account;
          //

          return acc + parseInt(item.tweets_number);
        }, 0);
        return {
          most_retweeted_description_spa,
          user_account,
          tweets_number,
          most_retweeted_category_spa,
          most_retweeted_category_desc_spa,
          user_accounts_verified,
          official_account,
        };
      });
      return newArray;

    case 'most-mentioned': // Mentions number
      newArray = arrayDuplicades.map((item) => {
        let most_mentioned_description_spa = '';
        let user_account = '';
        let most_mentioned_category_spa = '';
        let most_mentioned_category_desc_spa = '';
        let user_accounts_verified = '';
        let official_account = '';
        let users_most_metioned_id = '';
        let users_account_verified = '';

        let mentions_number = item.reduce((acc, item) => {
          user_account = item.user_account;
          most_mentioned_description_spa = item.most_mentioned_description_spa;
          most_mentioned_category_desc_spa =
            item.most_mentioned_category_desc_spa;
          most_mentioned_category_spa = item.most_mentioned_category_spa;
          user_accounts_verified = item.user_accounts_verified;
          official_account = item.official_account;
          users_most_metioned_id = item.users_most_metioned_id;
          users_account_verified = item.users_account_verified;
          return acc + parseInt(item.mentions_number);
        }, 0);
        return {
          most_mentioned_description_spa,
          user_account,
          mentions_number,
          most_mentioned_category_spa,
          most_mentioned_category_desc_spa,
          user_accounts_verified,
          official_account,
          users_most_metioned_id,
          users_account_verified,
        };
      });
      return newArray;

    case 'most-replied': // tweets_number
      newArray = arrayDuplicades.map((item) => {
        let most_replied_description_spa = '';
        let user_account = '';
        let most_replied_category_spa = '';
        let most_replied_category_desc_spa = '';
        let user_accounts_verified = '';
        let official_account = '';
        let users_most_replied_id = '';
        let tweets_number = item.reduce((acc, item) => {
          user_account = item.user_account;
          most_replied_description_spa = item.most_replied_description_spa;
          most_replied_category_desc_spa = item.most_replied_category_desc_spa;
          most_replied_category_spa = item.most_replied_category_spa;
          user_accounts_verified = item.user_accounts_verified;
          official_account = item.official_account;
          users_most_replied_id = item.users_most_replied_id;
          return acc + parseInt(item.tweets_number);
        }, 0);
        return {
          most_replied_description_spa,
          user_account,
          tweets_number,
          most_replied_category_spa,
          most_replied_category_desc_spa,
          user_accounts_verified,
          official_account,
          users_most_replied_id,
        };
      });
      return newArray;

    case 'ht-most-used': // hashtags_number
      newArray = arrayDuplicades.map((item, index) => {
        console.log('index', index, 'item', item[0]);
        let ht_category_desc_spa = '';
        let ht_category_spa = '';
        let ht_most_used_id = '';
        let official_account = '';
        let official_account_name_spa = '';
        let ht = '';
        let ht_mentions_number = '';

        ht_category_desc_spa = item[0].ht_category_desc_spa;
        ht_category_spa = item[0].ht_category_spa;
        ht_most_used_id = item[0].ht_most_used_id;
        official_account = item[0].official_account;
        ht = item[0].ht;
        official_account_name_spa = item[0].official_account_name_spa;
        ht_mentions_number = item[0].ht_mentions_number;

        return {
          ht_category_desc_spa,
          official_account_name_spa,
          ht_category_spa,
          ht_mentions_number,
          ht_most_used_id,
          official_account,
          ht,
        };
      });
      return newArray;
  }
}
