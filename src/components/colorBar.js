import React, { memo } from 'react'
import {
  ColorBarContainer,
  ColorBarStyled
} from '../styles/styledComponents/ColorBarStyled'

const ColorBar = memo(function memoColor () {
  return (
    <ColorBarContainer>
      <em>
      Lower<br/>
      activity
      </em>
      <ColorBarStyled />
      <em>
      Highest<br />
      activity
      </em>
    </ColorBarContainer>
  )
})

export default ColorBar
