import React, { useEffect } from 'react';
import useMenu from '../hooks/useMenu';
import useScroll from '../hooks/useScroll';
import {
  FloatingButtonContainer,
  FloatingButtonStyled,
} from '../styles/styledComponents/FloatingButtonStyled';

const FloatingButton = ({ setCurrentMap, menu }) => {
  const scroll = useScroll();  
  const { setShowMap, setShowAccountComparing, setShowPeriodComparing } = menu;  


  useEffect(() => {
    let header = document.getElementById('floating-button');    
    let sticky = 140;
    if(scroll > 100){
      header.classList.add('sticky');
    }
    if (scroll > sticky) {
      header.classList.add('sticky');
      header.classList.add('hide');
      header.classList.remove('rest');
    } else {
      header.classList.remove('sticky');
      header.classList.add('rest');
    }
  }, [scroll]);
  function handleClick() {
    setShowMap(true);
    setCurrentMap((prev) => !prev);
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
    window.scrollTo(0, 0);
  }
  function handleClickAccounts() {
    setShowAccountComparing((prev) => !prev);
    setShowPeriodComparing(false);
    setShowMap(false);
  }
  function handleClickPeriods() {
    setShowPeriodComparing((prev) => !prev);
    setShowAccountComparing(false);
    setShowMap(false);
  }
  return (
    <FloatingButtonContainer>
      <FloatingButtonStyled id="floating-button" className="rest">
        <p id='menuName'>Menú</p>
        <ul id="content">
          <li>
            <h3>Herramientas comparativas</h3>
            <ul>
              <li>
                <button type="button" onClick={handleClick}>
                  Cambiar mapa
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClickAccounts}>
                  Comparar por usuarios
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClickPeriods}>
                  Comparar por periodos
                </button>
              </li>
            </ul>
          </li>
        </ul>

      </FloatingButtonStyled>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
