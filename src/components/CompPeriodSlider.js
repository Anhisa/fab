import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'

const marks = [
  {
    value: 1,
    label: '2020 semestre I'
  },
  {
    value: 2,
    label: '2020 semestre II'
  },
  {
    value: 3,
    label: '2021 semestre I'
  },
  {
    value: 4,
    label: '2021 semestre II'
  }
]

const valuetext = (value) => {
  return value
}

CompPeriodSlider.propTypes = {
  setPeriod: PropTypes.func.isRequired,
  data: PropTypes.array
}

export function CompPeriodSlider ({ setPeriod, data }) {
  const [value, setValue] = useState([1, 4])
  let periods = [1, 4]
  if (data) {
    periods = data.map((item) => {
      return parseInt(item.period_id)
    })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setPeriod({
      startDate: newValue[0],
      endDate: newValue[1]
    })
  }

  useEffect(() => {
    if (data) {
      setPeriod({
        startDate: periods[0],
        endDate: periods[periods.length - 1]
      })

      setValue([periods[0], periods[periods.length - 1]])
      return
    }

    setPeriod({
      startDate: value[0],
      endDate: value[1]
    })
  }, [])

  return (
    <div
      style={{
        width: '100%',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
      }}
    >
      <h4>Periodo de búsqueda</h4>
      <small>Acorde a la data disponible de la cuenta</small>
      <Box>
        <Slider
          getAriaLabel={() => 'Period range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          marks={marks}
          min={periods[0] ?? 1}
          max={periods[periods.length] ?? 4}
        />
      </Box>
    </div>
  )
}
