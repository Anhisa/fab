import React from 'react'
import { FloatingButtonStyled } from '../styles/styledComponents/FloatingButtonStyled'
import { ButtonFloatingStyled, FloatingTextStyled } from '../styles/styledComponents/FloatingText.styled'

const FloatingText = ({setCurrentMap}) => {
  function handleMap(){
    setCurrentMap((prev) => prev = !prev)
  }
  return (
    <FloatingTextStyled>

<p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p> 
<ButtonFloatingStyled onClick={handleMap}>
<p>¡Cambia el mapa!</p>
</ButtonFloatingStyled>
      </FloatingTextStyled>
  )
}

export default FloatingText


/* text  <p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p> */