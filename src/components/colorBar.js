import React from 'react'
import {
  ColorBarContainer,
  ColorBarStyled
} from '../styles/styledComponents/ColorBarStyled'

const ColorBar = () => {
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
}

export default ColorBar
