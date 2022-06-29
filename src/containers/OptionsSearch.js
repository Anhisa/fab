import { Button } from '@mui/material'
import React from 'react'
import openTables from '../helpers/OpenTables'
import { TableContext } from '../context/InitialState'
import PropTypes from 'prop-types'

OptionsSearch.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func
}

function OptionsSearch ({ open, setOpen }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [dataComparing, setDataComparing] = React.useContext(TableContext)
  const { accounts: { accountIdA, accountIdB }, categories } = dataComparing

  const isCategoriesTrue = Object.keys(categories)
    .flatMap((key) => categories[key])
    .some((item) => item === true)

  React.useEffect(() => {
    setOpen(open)
    setIsOpen(open)
  }
  , [open])

  if (!isCategoriesTrue) {
    return null
  }
  if (accountIdA.id === accountIdB.id) {
    return null
  }

  if (categories === undefined) {
    return null
  }
  // console.log('isCategoriesTrue', isCategoriesTrue)

  function handleClear () {
    setDataComparing((prev) => {
      return {
        ...prev,
        accounts: {
          accountIdA: {
            id: '',
            name: ''
          },
          accountIdB: {
            id: '',
            name: ''
          }
        },
        periodComparison: {
          periodA: {
            id: '',
            name: ''
          },
          periodB: {
            id: '',
            name: ''
          }
        }
      }
    })
  }
  function handleClick () {
    openTables(isOpen, setOpen)
  }

  return (
    <>
      <Button variant="contained" onClick={handleClear}>
        Limpiar busqueda
      </Button>
      <Button variant="contained" onClick={handleClick}>
        {!open ? 'Abrir' : 'Cerrar'} tablas
      </Button>
    </>
  )
}

export default OptionsSearch
