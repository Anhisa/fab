import React from 'react'
import {
  FloatingTextRightIslandStyled,
  FloatingTextRightStyled
} from '../styles/styledComponents/FloatingText.styled'
import PropTypes from 'prop-types'

FloatingTextRight.propTypes = {
  currentMap: PropTypes.bool.isRequired
}

function FloatingTextRight ({ currentMap }) {
  if (!currentMap) {
    return (
      <FloatingTextRightIslandStyled>
        <p>El Caribe</p>
      </FloatingTextRightIslandStyled>
    )
  } else {
    return (
      <FloatingTextRightStyled>
        <p>América Latina Continental</p>
      </FloatingTextRightStyled>
    )
  }
}

export default FloatingTextRight
