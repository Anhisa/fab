import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import ComparativePerPeriod from '../components/ComparativePerPeriod'
import { CompCategoryCb } from '../components/CompCategoryCb'
import { ComparativeStyled } from '../styles/styledComponents/ComparativeStyled'
import UsePeriodErrors from '../hooks/usePeriodErrors'
// import PropTypes from 'prop-types'
import CountrySelectFilter from '../components/countrySelectFilter'
import { TableContext } from '../context/InitialState'

// SelectorComparative.propTypes = {
//   setDataComparing: PropTypes.func.isRequired
// }

function SelectorComparative () {
  const [, setDataComparing] = useContext(TableContext)
  const [periodComparison, setPeriodComparison] = useState({
    periodA: {
      id: '',
      name: ''
    },
    periodB: {
      id: '',
      name: ''
    }
  })
  const [isCountryFilterActive, setCountryFilterActive] = useState(false)
  const [countryId, setCountryId] = useState('')
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
    monthlyTweets: true
  })
  const [errors, setErrors] = useState({
    samePeriods: false,
    emptyPeriods: false,
    nonAscendingPeriods: false
  })
  const [firstTime, setFirstTime] = useState(true)
  const thereIsError = Object.values(errors).some((error) => error)

  const handleComparison = () => {
    window.scrollTo(0, window.innerHeight)
    setFirstTime(false)
    setDataComparing((prev) => {
      return {
        ...prev,
        periodComparison,
        accounts: {
          accountIdA: {
            id: 'null',
            name: ''
          },
          accountIdB: {
            id: 'null1',
            name: ''
          }
        },
        categories,
        isPeriodComparisonActive: true,
        isCountryFilterActive,
        country_id: countryId
      }
    })
  }
  return (
    <ComparativeStyled>
      <ComparativePerPeriod setDataComparing={setPeriodComparison} />
      <CompCategoryCb
        setCategories={setCategories}
        period={true}
        isPeriodComparisonActive={true}
      />
      <CountrySelectFilter
        setCountryFilterActive={setCountryFilterActive}
        setCountryId={setCountryId}
      />
      <div className="btnContainer">
        <Button
          variant="contained"
          onClick={handleComparison}
          className="btn"
          disabled={thereIsError}
        >
          COMPARE
        </Button>
      </div>
      {!firstTime && (
        <UsePeriodErrors
          periodComparison={periodComparison}
          errors={errors}
          setErrors={setErrors}
        />
      )}
    </ComparativeStyled>
  )
}

export default SelectorComparative
