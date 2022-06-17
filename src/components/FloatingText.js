import React from 'react';
import { FloatingButtonStyled } from '../styles/styledComponents/FloatingButtonStyled';
import {
  ButtonFloatingStyled,
  FloatingTextIslandsStyled,
  FloatingTextStyled,
} from '../styles/styledComponents/FloatingText.styled';

const FloatingText = ({ setCurrentMap, islands, zoom }) => {
  
  function handleMap() {
    setCurrentMap((prev) => (prev = !prev));
  }

  if (islands) {
    return (
      <FloatingTextIslandsStyled>
        {!zoom && (
          <p className="info">
            Base de datos interactiva de las cuentas de Twitter pertenecientes a
            los diplomáticos y representaciones diplomáticas de la República
            Popular China en América Latina y el Caribe.
          </p>
        )}
        <ButtonFloatingStyled onClick={handleMap} type="button">
          <p tabIndex={0}>Ver mapa continente</p>
        </ButtonFloatingStyled>
      </FloatingTextIslandsStyled>
    );
  }
  return (
    <FloatingTextStyled>
      {!zoom && (
        <p className="info" aria-label='info'>
          Base de datos interactiva de las cuentas de Twitter pertenecientes a
          los diplomáticos y representaciones diplomáticas de la República
          Popular China en América Latina y el Caribe.
        </p>
      )}
      <ButtonFloatingStyled onClick={handleMap} tabIndex={0}>
        <p >Ver mapa del Caribe</p>
      </ButtonFloatingStyled>
    </FloatingTextStyled>
  );
};

export default FloatingText;

/* text  <p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p> */
