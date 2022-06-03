import React from 'react'
import { FloatingTextRightStyled } from '../styles/styledComponents/FloatingText.styled'

const FloatingTextRight = ({currentMap}) => {
  console.log('currentMap', currentMap)
  return (
    <FloatingTextRightStyled caribe = {currentMap ? false : true}><p>{currentMap  ? 'America Latina Continental' : 'El Caribe'}</p></FloatingTextRightStyled>
  )
}

export default FloatingTextRight