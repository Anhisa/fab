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

 

  useEffect(() => {
    let header = document.getElementById('floating-button');    
    let sticky = 140;  

    if (scroll > sticky) {
      header.classList.add('sticky');
      header.classList.add('hide');
      header.classList.remove('rest');
    } else {
      header.classList.remove('sticky');
      header.classList.add('rest');
    }
  
 }, [scroll]);
  useEffect(() => {
    let header = document.getElementById('floating-button');
    setTimeout(() => {
      header.classList.add('hide');
    },1000)
  
  }, [])
  
  if(!menu) return null;
  const { setShowMap, setShowAccountComparing, setShowPeriodComparing, showMap } = menu;  

  function handleClick() {
    setShowMap(true);
  
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
    window.scrollTo(0, 0);
  }
  function handleClickAccounts() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setShowAccountComparing((prev) => !prev);
    setShowPeriodComparing((prev) => !prev);
    
    setShowMap(false);
  }
  function handleClickChange() {
    setCurrentMap((prev) => !prev);
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
   
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
                <FloatingButtonInner type="button" onClick={handleClickChange}>
                {currentMap === true ? 'Ver islas del Caribe' : 'Ver continente'}
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
