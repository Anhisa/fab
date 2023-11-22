import axios from 'axios'
const apiMostMentioned =
  'https://fab.local/wp-json/fab/v1/most-mentioned'
const apiMostReplied =
  'https://fab.local/wp-json/fab/v1/most-replied'
const apiMostRetweeted =
  'https://fab.local/wp-json/fab/v1/most-retweeted'
const apiHtMostUsed =
  'https://fab.local/wp-json/fab/v1/ht-most-used'
const fol = 'https://fab.local/wp-json/fab/v1/official-fol'
const countries = 'https://fab.local/wp-json/fab/v1/countries'
const officialAccounts = 'https://fab.local/wp-json/fab/v1/official-accounts'
const monthlyTweets = 'https://fab.local/wp-json/fab/v1/monthly-tweets'

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
console.log('🚀 ~ file: promisesUrl.js:25 ~ promisesUrl:', promisesUrl)
