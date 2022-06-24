import React, { memo } from 'react'
import {
  FloatingTextRightIslandStyled,
  FloatingTextRightStyled
} from '../styles/styledComponents/FloatingText.styled'
import PropTypes from 'prop-types'

const FloatingTextRight = memo(function memoNameMap ({ currentMap }) {
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
})

FloatingTextRight.propTypes = {
  currentMap: PropTypes.bool.isRequired
}

export default FloatingTextRight
