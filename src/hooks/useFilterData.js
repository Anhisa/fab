/* eslint-disable camelcase */
// import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import {
  addDuplicates,
  filterDuplicates,
  filterDuplicatesHt,
  filterDuplicatesMonth,
  getPeriodNumbers,
  mergeSort
} from '../helpers/filterHelpers'
import useQueryData from './useQueryData'
// import { useGetData } from './useGetData'

// Toma las cuentas y el periodo del contexto y devuelve un array con los datos de los usuarios
function sortArray (array, from) {
  const sortedArray = mergeSort(array, from)

  return sortedArray
}

export default function useFilterData (context, from) {
  let data = []
  const {
    accounts,
    period,
    isPeriodComparisonActive,
    periodComparison,
    isCountryFilterActive,
    country_id
  } = context

  const {
    mostMentioned,
    mostReplied,
    mostRetweeted,
    htMostUsed,
    monthlyTweets
  } = useQueryData()
  switch (from) {
    case 'most-mentioned':
      data = mostMentioned
      break
    case 'most-replied':
      data = mostReplied
      break
    case 'most-retweeted':
      data = mostRetweeted
      break
    case 'ht-most-used':
      data = htMostUsed
      break
    case 'monthly-tweets':
      data = monthlyTweets
      break
    default:
      console.log('No se encontró el from')
      break
  }

  const [filteredData, setFilteredData] = useState([])
  const loading = false

  const items = data

  const accountsData = []

  useEffect(() => {
    if (isPeriodComparisonActive) {
      const arrayComparison = periodComparison

      Object.values(arrayComparison).forEach((item) => {
        const { startDate, endDate } = getPeriodNumbers(item.id)
        let newArray = []

        let data
        if (!isCountryFilterActive) {
          data = items.filter(
            (item) =>
              parseInt(item.period_id) >= startDate &&
              parseInt(item.period_id) <= endDate
          )
        } else {
          data = items.filter(
            (item) =>
              parseInt(item.period_id) >= startDate &&
              parseInt(item.period_id) <= endDate &&
              item.country_id === country_id.id
          )
        }

        if (data.length === 0) {
          return accountsData.push([])
        }

        newArray.push(data)
        if (from === 'ht-most-used') {
          const repeatedAccountArrayHt = filterDuplicatesHt(data)

          newArray = addDuplicates(repeatedAccountArrayHt, from)

          if (newArray.length > 3) {
            let sortedArray = sortArray(newArray, from)

            if (sortedArray.length > 10) {
              sortedArray = sortedArray.slice(0, 10)
            }
            accountsData.push(sortedArray)
          } else {
            accountsData.push(newArray)
          }
        } else if (from === 'monthly-tweets') {
          if (context.isPeriodComparisonActive) {
            const repeatedMonthlyArray = filterDuplicatesMonth(data)

            newArray = addDuplicates(repeatedMonthlyArray, from)
          }
          accountsData.push(newArray)
        } else {
          const repeatedAccountArray = filterDuplicates(data)

          newArray = addDuplicates(repeatedAccountArray, from)

          let sortedArray = sortArray(newArray, from)

          if (sortedArray.length > 10) {
            sortedArray = sortedArray.slice(0, 10)
          }

          accountsData.push(sortedArray)
        }
      })

      setFilteredData(accountsData)
      return
    }
    Object.values(accounts).forEach((account) => {
      if (!loading) {
        let newArray = []
        const data = items.filter(
          (item) =>
            item.official_account_id === account.id &&
            parseInt(item.period_id) >= period.startDate &&
            parseInt(item.period_id) <= period.endDate
        )

        if (data.length === 0) {
          return accountsData.push([])
        }

        if (from === 'ht-most-used') {
          const repeatedAccountArrayHt = filterDuplicatesHt(data)

          newArray = addDuplicates(repeatedAccountArrayHt, from)

          if (newArray.length > 3) {
            let sortedArray = sortArray(newArray, from)

            if (sortedArray.length > 10) {
              sortedArray = sortedArray.slice(0, 10)
            }
            accountsData.push(sortedArray)
          } else {
            accountsData.push(newArray)
          }
        } else if (from === 'monthly-tweets') {
          const innerArray = data

          accountsData.push(innerArray)
        } else {
          const repeatedAccountArray = filterDuplicates(data)

          newArray = addDuplicates(repeatedAccountArray, from)

          let sortedArray = sortArray(newArray, from)

          if (sortedArray.length > 10) {
            sortedArray = sortedArray.slice(0, 10)
          }

          accountsData.push(sortedArray)
        }
      }
    })

    setFilteredData(accountsData)
  }, [
    loading,
    items,
    accounts,
    period,
    from,
    isCountryFilterActive,
    isPeriodComparisonActive,
    periodComparison,
    country_id
  ])

  return [filteredData]
}
