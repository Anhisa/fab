/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import useQueryData from '../hooks/useQueryData'

export function getDataAccounts () {
  const { fol } = useQueryData()
  const [innerData, setInnerData] = useState(fol)
  const [filteredData, setFilteredData] = useState([])
  let arrayDuplicate = []
  useEffect(() => {
    if (innerData !== false) {
      setInnerData(fol)
    }

    const array = filterDuplicates(innerData)
    arrayDuplicate = addDuplicates(array)
    setFilteredData(arrayDuplicate)
  }, [fol])
  return filteredData
}
function filterDuplicates (data) {
  const accountCheck = []
  const arrayDuplicates = []
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!accountCheck.includes(item.official_account_id)) {
      const duplicates = data.filter((item2) => {
        return item.official_account_id === item2.official_account_id
      })
      accountCheck.push(item.official_account_id)
      arrayDuplicates.push(duplicates)
    }
  })

  return arrayDuplicates
}
function addDuplicates (data) {
  const newArray = data.map(item => {
    const accId = item[0].official_account_id
    const creationDate = item[0]['official_account creation_date']
    const isVerified = item[0].official_account_verified

    const total_tweets_period = item.reduce((acc, item) => {
      return acc + parseInt(item.total_tweets_period)
    }, 0)
    const followers_number = item.reduce((acc, item) => {
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
