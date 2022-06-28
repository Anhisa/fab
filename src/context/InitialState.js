import React, { createContext } from 'react'
import PropTypes from 'prop-types'
const initialStateCategories = {
  mostRetweeted: true,
  mostHashtags: true,
  mostMentioned: true,
  mostReplied: true,
  monthlyTweets: true
}
const mapManagment = {
  country_id: ''
}

const booleanValues = {
  isPeriodComparisonActive: false,
  isCountryFilterActive: false
}
const accounts = {
  accountIdA: {
    id: '',
    name: ''
  },
  accountIdB: {
    id: '',
    name: ''
  }
}
const period = {
  startDate: 1,
  endDate: 4
}
const periodComparison = {
  periodA: {
    id: '',
    name: ''
  },
  periodB: {
    id: '',
    name: ''
  }
}

export const TableContext = createContext()

export const ComparingDataContext = ({ children, themeToggler }) => {
  const [dataComparing, setDataComparing] = React.useState({
    accounts,
    periodComparison,
    isPeriodComparisonActive: false,
    isCountryFilterActive: false,
    countryId: '',
    categories: initialStateCategories
  })
  return (
    <TableContext.Provider value={[dataComparing, setDataComparing, themeToggler]}>
      {children}
    </TableContext.Provider>
  )
}

export const initialState = {
  categories: initialStateCategories,
  mapManagment,
  booleanValues,
  accounts,
  period,
  periodComparison
}
ComparingDataContext.propTypes = {
  children: PropTypes.node.isRequired,
  themeToggler: PropTypes.func.isRequired
}
