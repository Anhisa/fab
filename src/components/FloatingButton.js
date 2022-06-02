import React, { useEffect } from 'react';
import useMenu from '../hooks/useMenu';
import useScroll from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';
import {
  FloatingButtonInner,
  FloatingButtonContainer,
  FloatingButtonStyled,
} from '../styles/styledComponents/FloatingButtonStyled';

const FloatingButton = ({ currentMap, setCurrentMap, countryListManagmentOpen, menu, themeToggler }) => {
  const scroll = useScroll(); 
  const { open, setOpen } = countryListManagmentOpen; 

 

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
    setOpen(false);
  
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
    window.scrollTo(0, 0);
  }
  function handleClickAccounts() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setShowAccountComparing(true);
    setShowPeriodComparing(true);
    setOpen(false);
    setShowMap(false);
  }
  function handleClickChange() {
    setCurrentMap((prev) => !prev);
    setOpen(false);
    setShowAccountComparing(false);
    setShowPeriodComparing(false);
   
  }
  function changeTheme(){

    themeToggler()    
  }
  return (
    <FloatingButtonContainer>
      <FloatingButtonStyled id="floating-button" className="rest">
        <p id='menuName'>Menú</p>
        <ul id="content">
          <>
          <h5>{showMap ? 'Cambiar mapa' : 'Ver mapa'}</h5>
                      
           { !showMap &&  <li>
                <FloatingButtonInner type="button" onClick={handleClick}>
                  Ver mapa
                </FloatingButtonInner>
              </li>}
              {showMap && <li>
                <FloatingButtonInner type="button" onClick={handleClickChange}>
                {currentMap === true ? 'Ver islas del Caribe' : 'Ver continente'}
                </FloatingButtonInner>
              </li>}
            
            
            <h5>Herramientas comparativas</h5>
                       
              <li>
                <FloatingButtonInner type="button" onClick={handleClickAccounts}>
                  Comparar por usuarios y periodos
                </FloatingButtonInner>
              </li>   
              <li>
            <h5>Otras opciones</h5>
            <FloatingButtonInner type="button" >
             
                Ver documentos de la investigación
                </FloatingButtonInner>
                </li>
                <li>
            <FloatingButtonInner type="button" onClick={changeTheme}>
              Cambiar el tema
            </FloatingButtonInner>
                </li>

               
          
            
          </>
          
        </ul>

      </FloatingButtonStyled>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
