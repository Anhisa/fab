import React from 'react'
import PropTypes from 'prop-types'
import { CountryItem } from '../components/CountryItem'

CountryList.propTypes = {
  accountsCountry: PropTypes.array.isRequired,
  countryListManagmentOpen: PropTypes.object.isRequired,
  countrySelectedId: PropTypes.string
}

export default function CountryList ({
  accountsCountry,
  countryListManagmentOpen,
  countrySelectedId
}) {
  return (
    <CountryItem
      accountsCountry={accountsCountry}
      countryListManagmentOpen={countryListManagmentOpen}
      countrySelectedId={countrySelectedId}
    />
  )
}
