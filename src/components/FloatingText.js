import React from 'react';
import { FloatingButtonStyled } from '../styles/styledComponents/FloatingButtonStyled';
import {
  ButtonFloatingStyled,
  FloatingTextIslandsStyled,
  FloatingTextStyled,
} from '../styles/styledComponents/FloatingText.styled';

const FloatingText = ({ setCurrentMap, islands, zoom }) => {
  console.log(zoom);
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
          <p>Ver mapa continente</p>
        </ButtonFloatingStyled>
      </FloatingTextIslandsStyled>
    );
  }
  return (
    <FloatingTextStyled>
      {!zoom && (
        <p className="info">
          Base de datos interactiva de las cuentas de Twitter pertenecientes a
          los diplomáticos y representaciones diplomáticas de la República
          Popular China en América Latina y el Caribe.
        </p>
      )}
      <ButtonFloatingStyled onClick={handleMap}>
        <p>Ver mapa del Caribe</p>
      </ButtonFloatingStyled>
    </FloatingTextStyled>
  );
};

export default FloatingText;

/* text  <p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p> */
