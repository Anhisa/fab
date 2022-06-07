import React from 'react';
import {
  FloatingTextRightIslandStyled,
  FloatingTextRightStyled,
} from '../styles/styledComponents/FloatingText.styled';

const FloatingTextRight = ({ currentMap }) => {
  if (!currentMap) {
    return (
      <FloatingTextRightIslandStyled>
        <p>El Caribe</p>
      </FloatingTextRightIslandStyled>
    );
  } else {
  return (
    <FloatingTextRightStyled>
      <p>America Latina Continental</p>
    </FloatingTextRightStyled>
  );
};
}

export default FloatingTextRight;
