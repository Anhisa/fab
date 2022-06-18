import React, { useEffect, useState } from 'react'
import { getFlag } from '../helpers/getFlag'
import useGetCountries from '../hooks/useGetCountries'
import { HeaderUserView } from '../styles/styledComponents/userCardStyled'
import PropTypes from 'prop-types'

HeaderUserCard.propTypes = {
  countryId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}

function HeaderUserCard ({ countryId, userName }) {
  const [data, setData] = useState({
    countryName: '',
    flagUrl: '',
    loading: true
  })

  const dataCountries = useGetCountries()
  let countryName = ''
  let flagUrl = ''

  useEffect(() => {
    if (!dataCountries.loading) {
      countryName = dataCountries.data.find(
        (country) => country.country_id === countryId
      )

      flagUrl = getFlag(countryName.country_name_eng)

      setData({
        countryName: countryName.country_name_spa,
        flagUrl
      })
    }
  }, [dataCountries.loading, countryId])
  if (data.loading) {
    return <div>Loading...</div>
  }

  return (
    <HeaderUserView>
      <img src={data.flagUrl} alt={`Bandera de ${data.countryName}`} />
      <div className="name">
        <h2 className="countryName">{data.countryName}</h2>
        <h2 className="accountName">{userName}</h2>
      </div>
    </HeaderUserView>
  )
}

export default HeaderUserCard
