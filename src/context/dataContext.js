import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loading from '../components/Loading'
import { promisesUrl } from '../helpers/promisesUrl'

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json'

export const DataContext = createContext()

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default function DataProvider ({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
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
      setData(allData)
    } catch (error) {
      console.log(error)
    }
  }
  , [])

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false)
    }
  }
  , [data])
  if (loading) {
    return <Loading/>
  }
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}
