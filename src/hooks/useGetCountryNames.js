import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/dataContext'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry'

const useGetCountryNames = () => {
  const { countries } = useContext(DataContext)
  const [countryNames, setCountryNames] = useState([])
  const tweetsByCountry = useGetTweetsByCountry()

  useEffect(() => {
    if (countries) {
      const countryIds = tweetsByCountry.map((tweet) => tweet.countryId)

      const countryNames = countryIds.map((countryId) => {
        const country = countries.find(
          (country) => country.country_id === countryId
        )

        const countryName = country.country_name_spa

        const countryInId = country.country_id

        return { countryName, countryInId }
      })

      setCountryNames(countryNames)
    }
  }, [tweetsByCountry])

  return countryNames
}

export default useGetCountryNames
