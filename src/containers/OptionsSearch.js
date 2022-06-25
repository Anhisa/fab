import { Button } from '@mui/material'
import React from 'react'
import openTables from '../helpers/OpenTables'
import { TableContext } from '../context/InitialState'

function OptionsSearch () {
  const [open, setOpen] = React.useState(false)
  const [dataComparing, setDataComparing] = React.useContext(TableContext)
  const { categories } = dataComparing

  if (categories === undefined) {
    return null
  }
  const isCategoriesTrue = Object.keys(categories)
    .flatMap((key) => categories[key])
    .some((item) => item === true)

  if (!isCategoriesTrue) {
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
    openTables(open, setOpen)
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
