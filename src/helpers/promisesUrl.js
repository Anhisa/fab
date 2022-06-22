import axios from 'axios'
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
