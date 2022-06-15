import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { TableContext } from '../context/InitialState';
import {
  addDuplicates,
  filterDuplicates,
  filterDuplicatesHt,
  filterDuplicatesMonth,
  getPeriodNumbers,
  mergeSort,
} from '../helpers/filterHelpers';
import { useGetData } from './useGetData';

// Toma las cuentas y el periodo del contexto y devuelve un array con los datos de los usuarios
function sortArray(array, from) {
  let sortedArray = mergeSort(array, from);

  return sortedArray;
}

export const useFilterData = (api,context, from) => {
  // const context = useContext(TableContext);
  let data
  const {
    accounts,
    period,
    isPeriodComparisonActive,
    periodComparison,
    isCountryFilterActive,
    country_id,
  } = context;

  const {
    mostMentioned,
    mostReplied,
    mostRetweeted,
    htMostUsed,  
    monthlyTweets  
  } = useContext(DataContext);
  switch (from) {
    case 'most-mentioned':
      data = mostMentioned;
      break;
    case 'most-replied':
      data = mostReplied;
      break;
    case 'most-retweeted':
      data = mostRetweeted;
      break;
    case 'ht-most-used':
      data = htMostUsed;
      break;
    case 'monthly-tweets':
      data = monthlyTweets;
      break;
    default:
      console.log('No se encontró el from');
      break;

    }
 

  const [filteredData, setFilteredData] = useState(false);
  let loading = false;

  const items = data;

  const accountsData = [];

  useEffect(() => {

    if (isPeriodComparisonActive) {
      let arrayComparison = periodComparison;
     
      Object.values(arrayComparison).forEach((item) => {
        let { startDate, endDate } = getPeriodNumbers(item.id);
      let newArray = [];

        let data;
        if (!isCountryFilterActive) {
          data = items.filter(
            (item) =>
              parseInt(item.period_id) >= startDate &&
              parseInt(item.period_id) <= endDate
          );
        } else {
          data = items.filter(
            (item) =>
              parseInt(item.period_id) >= startDate &&
              parseInt(item.period_id) <= endDate &&
              item.country_id === country_id.id
          );
        }
        
        
        if (data.length === 0) {
          
          return  accountsData.push([]);
        }

   
        newArray.push(data);
        if (from === 'ht-most-used') {
          let repeatedAccountArrayHt = filterDuplicatesHt(data);

          newArray = addDuplicates(repeatedAccountArrayHt, from);

          if (newArray.length > 3) {
            let sortedArray = sortArray(newArray, from);

            if (sortedArray.length > 10) {
              sortedArray = sortedArray.slice(0, 10);
            }
            accountsData.push(sortedArray);
          } else {
            accountsData.push(newArray);
          }
        } else if (from === 'monthly-tweets') {
          let innerArray = data;
          
          if (context.isPeriodComparisonActive) {
            let repeatedMonthlyArray = filterDuplicatesMonth(data);
            
            newArray = addDuplicates(repeatedMonthlyArray, from);
            
          }
          accountsData.push(newArray);
          
        } else {
          let repeatedAccountArray = filterDuplicates(data);
         
          newArray = addDuplicates(repeatedAccountArray, from);
          
       
          let sortedArray = sortArray(newArray, from);
          
          if (sortedArray.length > 10) {
            sortedArray = sortedArray.slice(0, 10);
          }
          
          accountsData.push(sortedArray);
        }
      });

      setFilteredData(accountsData);
      return;
    }
    Object.values(accounts).forEach((account) => {
      if (!loading) {
        let newArray = [];
        const data = items.filter(
          (item) =>
            item.official_account_id === account.id &&
            parseInt(item.period_id) >= period.startDate &&
            parseInt(item.period_id) <= period.endDate
        );
        
        if (data.length === 0) {
      
          return  accountsData.push([]);
        }
        
        if (from === 'ht-most-used') {
          let repeatedAccountArrayHt = filterDuplicatesHt(data);

          newArray = addDuplicates(repeatedAccountArrayHt, from);

          if (newArray.length > 3) {
            let sortedArray = sortArray(newArray, from);

            if (sortedArray.length > 10) {
              sortedArray = sortedArray.slice(0, 10);
            }
            accountsData.push(sortedArray);
          } else {
            accountsData.push(newArray);
          }
        } else if (from === 'monthly-tweets') {
          let innerArray = data;     

          accountsData.push(innerArray);
        } else {
          let repeatedAccountArray = filterDuplicates(data);
      
          newArray = addDuplicates(repeatedAccountArray, from);
        
          let sortedArray = sortArray(newArray, from);
      
          if (sortedArray.length > 10) {
            sortedArray = sortedArray.slice(0, 10);
          }

          accountsData.push(sortedArray);
        }
      }
    });

    setFilteredData(accountsData);
  }, [
    loading,
    items,
    accounts,
    period,
    from,
    isCountryFilterActive,
    isPeriodComparisonActive,
    periodComparison,
    country_id,
  ]);

  return [filteredData, loading];
};

