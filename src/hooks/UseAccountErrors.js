import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  ErrorContainer,
  ErrorTable
} from '../styles/styledComponents/ErrorTable.styled'

UseAccountErrors.propTypes = {
  accounts: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired
}

function UseAccountErrors ({ accounts, errors, setErrors }) {
  useEffect(() => {
    if (
      accounts.accountIdA.id === accounts.accountIdB.id &&
      accounts.accountIdA.id !== '' &&
      accounts.accountIdB.id !== ''
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sameAccounts: true
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sameAccounts: false
      }))
    }
    if (accounts.accountIdA.id === '' || accounts.accountIdB.id === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emptyAccounts: true
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emptyAccounts: false
      }))
    }
  }, [accounts])
  return (
    <ErrorContainer>
      {errors.sameAccounts === true && (
        <ErrorTable>
          <p>Seleccione 2 cuentas diferentes</p>
        </ErrorTable>
      )}
      {errors.emptyAccounts && (
        <ErrorTable>
          <p>Seleccione 2 cuentas</p>
        </ErrorTable>
      )}
    </ErrorContainer>
  )
}

export default UseAccountErrors
