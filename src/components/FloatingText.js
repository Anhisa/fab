import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  ButtonFloatingIslandStyled,
  ButtonFloatingStyled,
  FloatingTextIslandsStyled,
  FloatingTextStyled
} from '../styles/styledComponents/FloatingText.styled'

const FloatingText = memo(function memoFloatingText ({ setCurrentMap, islands, zoom }) {
  function handleMap () {
    setCurrentMap((prev) => (prev = !prev))
  }

  if (islands) {
    return (
      <FloatingTextIslandsStyled>
        {!zoom && (
          <p className="info">
            Interactive database of the X accounts (former Twitter) belonging to the PCR’s diplomatic representatives and representations based in Latin America and the Caribbean. Click on any country or the comparison tool to get started.
          </p>
        )}
        <ButtonFloatingIslandStyled onClick={handleMap} type="button">
          <p tabIndex={0}>Map of the continent</p>
        </ButtonFloatingIslandStyled>
      </FloatingTextIslandsStyled>
    )
  }
  return (
    <FloatingTextStyled>
      {!zoom && (
        <p className="info" aria-label="info">
            Interactive database of the X accounts (former Twitter) belonging to the PCR’s diplomatic representatives and representations based in Latin America and the Caribbean. Click on any country or the comparison tool to get started.
        </p>
      )}
      <ButtonFloatingStyled onClick={handleMap}>
        <p>Map of the Caribbean</p>
      </ButtonFloatingStyled>
    </FloatingTextStyled>
  )
})

export default FloatingText

FloatingText.propTypes = {
  setCurrentMap: PropTypes.func.isRequired,
  islands: PropTypes.bool,
  zoom: PropTypes.bool.isRequired
}
/* text  <p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p> */
