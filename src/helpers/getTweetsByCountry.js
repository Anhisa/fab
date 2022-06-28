/* eslint-disable camelcase */
import { useEffect, useState } from 'react'

import useQueryData from '../hooks/useQueryData'

export function useGetTweetsByCountry () {
  const { fol } = useQueryData()
  const [filteredData, setFilteredData] = useState([])
  let arrayDuplicate = []
  useEffect(() => {
    const array = filterDuplicates(fol)
    arrayDuplicate = addDuplicates(array)
    setFilteredData(arrayDuplicate)
  }, [])
  return filteredData
}
function filterDuplicates (data) {
  const accountCheck = []
  const arrayDuplicates = []
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!accountCheck.includes(item.country_id)) {
      const duplicates = data.filter((item2) => {
        return item.country_id === item2.country_id
      })
      accountCheck.push(item.country_id)

      arrayDuplicates.push(duplicates)
    }
  })

  return arrayDuplicates
}
function addDuplicates (data) {
  let newArray = data.map(item => {
    const countryId = item[0].country_id
    const total_tweets_period = item.reduce((acc, item) => {
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
