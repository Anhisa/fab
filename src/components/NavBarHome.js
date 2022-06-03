import React from 'react';
import { NavBarHomeStyled } from '../styles/styledComponents/NavBarHomeStyled';

const NavBarHome = ({setCurrentMap, menu, countryListManagmentOpen}) => {
  const { setShowMap, setShowAccountComparing, setShowPeriodComparing, showMap } = menu;
  const { open, setOpen } = countryListManagmentOpen; 

  function handleClickChange() {
    setCurrentMap((prev) => !prev);
    setOpen(false);
    setShowAccountComparing(false);
    setShowPeriodComparing(false);      
  }
  function handleClickAccounts() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    if(!showMap){
      setShowMap(true);
      setShowAccountComparing(false);
      setShowPeriodComparing(false);
    } else {
      setShowAccountComparing(true);
      setShowPeriodComparing(true);
      setShowMap(false);
      setOpen(false);
    }
    
  }
  return (
    <NavBarHomeStyled>
      <div className="title">
        <h3 className="banner-title">
          CHINA LATAM TWITTER DATABASE{' '}
          <em>
            <small>Beta</small>
          </em>
        </h3>
      </div>
      <div className="menu">
        <div className="menu-item"
          onClick={handleClickAccounts}
        >
          <p>{showMap ? 'COMPARADOR' : 'MAPA'}</p>
        </div>
        <div className="menu-item">
          <p>DOCUMENTOS</p>
        </div>
        <div className="menu-item">
          <p>CAMBIAR TEMA</p>
        </div>
      </div>
    </NavBarHomeStyled>
  );
};

export default NavBarHome;

