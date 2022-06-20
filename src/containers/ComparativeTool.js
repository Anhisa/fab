import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CompAccountSelector } from '../components/CompAccountSelector'
import { CompCategoryCb } from '../components/CompCategoryCb'
import { CompPeriodSlider } from '../components/CompPeriodSlider'

import Button from '@mui/material/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { AccountPeriodContainer } from '../styles/styledComponents/AccountPeriodContainer'
import {
  ComparativeStyled
} from '../styles/styledComponents/ComparativeStyled'
import UseAccountErrors from '../hooks/UseAccountErrors'

ComparativeTool.propTypes = {
  setDataComparing: PropTypes.func.isRequired
}

export function ComparativeTool ({ setDataComparing }) {
  const [errors, setErrors] = useState({
    sameAccounts: false,
    emptyAccounts: false
  })
  const [accounts, setAccounts] = useState({
    accountIdA: {
      id: '',
      name: ''
    },
    accountIdB: {
      id: '',
      name: ''
    }
  })
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
    monthlyTweets: true
  })

  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 4
  })
  const [firstTime, setFirstTime] = useState(true)
  const thereIsError = Object.values(errors).some((error) => error)

  const handleComparison = () => {
    // scroll to bottom
    window.scrollTo(0, 550)
    setFirstTime(false)
    setDataComparing((prev) => {
      return {
        ...prev,
        accounts,
        categories,
        period,
        isPeriodComparisonActive: false
      }
    })
  }

  return (
    <ComparativeStyled>
      <CompAccountSelector setAccounts={setAccounts} />
      <CompCategoryCb setCategories={setCategories} />
      <AccountPeriodContainer>
        <CompPeriodSlider setPeriod={setPeriod} />
      </AccountPeriodContainer>
      <div className="btnContainer">
        <Button variant="contained" onClick={handleComparison} className="btn" disabled={thereIsError}>
          COMPARAR
        </Button>
      </div>
    {!firstTime && <UseAccountErrors accounts={accounts} errors={errors} setErrors={setErrors}/>}
    </ComparativeStyled>
  )
}
