import React, { memo } from 'react'
import {
  ColorBarContainer,
  ColorBarStyled
} from '../styles/styledComponents/ColorBarStyled'

const ColorBar = memo(function memoColor () {
  return (
    <ColorBarContainer>
      <em>
        Menor <br />
        actividad
      </em>
      <ColorBarStyled />
      <em>
        Mayor <br />
        actividad
      </em>
    </ColorBarContainer>
  )
})

export default ColorBar
