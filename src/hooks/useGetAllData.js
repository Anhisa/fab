import axios from 'axios'
import { useEffect, useState } from 'react'

const apiMostMentioned =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned'
const apiMostReplied =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-replied'
const apiMostRetweeted =
  'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted'
const apiHtMostUsed =
  'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used'
const fol = 'https://fundacionandresbello.org/wp-json/fab/v1/official-fol'
const countries = 'https://fundacionandresbello.org/wp-json/fab/v1/countries'
const officialAccounts = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts'
const monthlyTweets = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets'
const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json'

export const promisesUrl = [
  axios.get(apiMostMentioned),
  axios.get(apiMostReplied),
  axios.get(apiMostRetweeted),
  axios.get(apiHtMostUsed),
  axios.get(fol),
  axios.get(countries),
  axios.get(officialAccounts),
  axios.get(monthlyTweets)
]

const useGetAllData = () => {
  const [data, setData] = useState({})
  const allPromises = [
    axios.get(apiMostMentioned),
    axios.get(apiMostReplied),
    axios.get(apiMostRetweeted),
    axios.get(apiHtMostUsed),
    axios.get(fol),
    axios.get(countries),
    axios.get(officialAccounts),
    axios.get(monthlyTweets)

  ]

  useEffect(async () => {
    if (Object.keys(data).length === 0) {
      try {
        const result = await Promise.all(allPromises)
        const mostMentioned = result[0].data
        const mostReplied = result[1].data
        const mostRetweeted = result[2].data
        const htMostUsed = result[3].data
        const fol = result[4].data
        const countries = result[5].data
        const officialAccounts = result[6].data
        const monthlyTweets = result[7].data
        const allData = {
          mostMentioned,
          mostReplied,
          mostRetweeted,
          htMostUsed,
          fol,
          countries,
          officialAccounts,
          monthlyTweets,
          geoUrl
        }
        setData(allData)
      } catch (error) {
        console.log(error)
      }
    }
  }, [data])
  return data
}

export default useGetAllData
