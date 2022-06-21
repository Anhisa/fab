import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { AccountDetails } from '../pages/AccountDetails'
import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes'
import { promisesUrl } from '../hooks/useGetAllData'
import { DataContext } from '../context/dataContext'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json'

export const App = () => {
  const [theme, themeToggler] = useTheme()
  const [loading, setLoading] = useState(true)
  // const allData = useGetAllData()
  const [data, setData] = useState({})

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
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/diplomacia-digital"
            element={<Home themeToggler={ themeToggler} />}
          />
          <Route
            path={'/diplomacia-digital/:account'}
            element={<AccountDetails themeToggler = {themeToggler}/>}
          />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </DataContext.Provider>
  )
}
