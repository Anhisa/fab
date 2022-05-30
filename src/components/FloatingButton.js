import React, { useEffect } from 'react';
import useMenu from '../hooks/useMenu';
import useScroll from '../hooks/useScroll';
import {
  FloatingButtonInner,
  FloatingButtonContainer,
  FloatingButtonStyled,
} from '../styles/styledComponents/FloatingButtonStyled';

const FloatingButton = ({ currentMap, setCurrentMap, menu }) => {
  const scroll = useScroll();  
  console.log(menu)
 

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
  if(!menu) return null;
  const { setShowMap, setShowAccountComparing, setShowPeriodComparing, showMap } = menu;  

  function handleClick() {
    setShowMap(true);
    setCurrentMap((prev) => !prev);
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
    window.scrollTo(0, 0);
  }
  function handleClickAccounts() {
    setShowAccountComparing((prev) => !prev);
    setShowPeriodComparing((prev) => !prev);
    
    setShowMap(false);
  }
  function handleClickPeriods() {
    setShowAccountComparing(false);
    setShowMap(false);
  }
  return (
    <FloatingButtonContainer>
      <FloatingButtonStyled id="floating-button" className="rest">
        <p id='menuName'>Menú</p>
        <ul id="content">
          <li>
          <h3>{showMap ? 'Cambiar mapa' : 'Ver mapa'}</h3>
            <ul>            
           { !showMap &&  <li>
                <FloatingButtonInner type="button" onClick={handleClick}>
                  Ver mapa
                </FloatingButtonInner>
              </li>}
              <li>
                <FloatingButtonInner type="button" onClick={handleClick}>
                {currentMap === true ? 'Ver islas' : 'Ver continente'}
                </FloatingButtonInner>
              </li>
            </ul>
            
            <h3>Herramientas comparativas</h3>
            <ul>            
              <li>
                <FloatingButtonInner type="button" onClick={handleClickAccounts}>
                  Comparar por usuarios y periodos
                </FloatingButtonInner>
              </li>         
            </ul>
          </li>
        </ul>

      </FloatingButtonStyled>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
