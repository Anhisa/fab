import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

const periods = [
  {
    id: 1,
    name: '2020 Semestre I'
  },
  {
    id: 2,
    name: '2020 Semestre II'
  },
  {
    id: 3,
    name: '2020-Consolidado'
  },
  {
    id: 4,
    name: '2021 Semestre I'
  },
  {
    id: 5,
    name: '2021 Semestre II'
  },
  {
    id: 6,
    name: '2021-Consolidado'
  }
]

const ComparativePerPeriod = React.memo(function ComparativeSelectorMemo ({ setDataComparing }) {
  const [periodA, setPeriodA] = React.useState('')
  const [periodB, setPeriodB] = React.useState('')
  //

  const handleChangeA = ({ target: { value } }) => {
    if (value === '') {
      setPeriodA('')
      setDataComparing((prev) => {
        return {
          ...prev,
          periodA: {
            id: '',
            name: ''
          }
        }
      })
      return
    }

    setPeriodA(value)
    setDataComparing((prevState) => ({
      ...prevState,
      periodA: {
        id: value,
        name: periods[value - 1].name
      }
    }))
  }
  const handleChangeB = ({ target: { value } }) => {
    if (value === '') {
      setPeriodB('')
      setDataComparing((prev) => {
        return {
          ...prev,
          periodB: {
            id: '',
            name: ''
          }
        }
      })
      return null
    }

    setPeriodB(value)
    setDataComparing((prevState) => ({
      ...prevState,
      periodB: {
        id: value,
        name: periods[value - 1].name
      }
    }))
  }

  return (
    <div className="countSelector">
      <div className="title">
        <h4>Periodos que desea comparar:</h4>
      </div>
      <div
        className="selectors"
        style={{
          width: '100%'
        }}
      >
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="label1">Periodo 1</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled1"
            value={periodA}
            onChange={handleChangeA}
          >
            <MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            {periods.map((item) => (
              <MenuItem key={`oa-${item.id}`} value={item.id} name={item.name}>
                <div>
                  <h6>{item.name}</h6>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="label2">Periodo 2</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled2"
            value={periodB}
            onChange={handleChangeB}
          >
            <MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            {periods.map((item) => (
              <MenuItem key={`oa-${item.id}`} value={item.id} name={item.name}>
                <div>
                  <h6>{item.name}</h6>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
})

ComparativePerPeriod.propTypes = {
  setDataComparing: PropTypes.func.isRequired
}

export default ComparativePerPeriod
