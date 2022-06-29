import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../components/Loading'
import { promisesUrl } from '../helpers/promisesUrl'
import { useQuery } from 'react-query'

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json'

QueryData.propTypes = {
  children: PropTypes.node.isRequired
}

export default function QueryData ({ children }) {
  const { error, isError, isLoading } = useQuery('data', fetchData)

  if (isError) {
    console.log(error.message)
    return <div>Error</div>
  }

  if (isLoading) {
    return <Loading />
  }

  return <>{children}</>
}

async function fetchData () {
  try {
    const result = await Promise.all(promisesUrl)
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
    return allData
  } catch (error) {
    console.log(error)
  }
}
