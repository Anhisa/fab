import React, { useState } from 'react';
import { MenuButtonStyled, NavBarHomeStyled } from '../styles/styledComponents/NavBarHomeStyled';
import { Spin as Hamburger } from 'hamburger-react'

const NavBarHome = ({setCurrentMap, menu, countryListManagmentOpen, themeToggler}) => {
  const { setShowMap, setShowAccountComparing, setShowPeriodComparing, showMap } = menu;
  const { open, setOpen } = countryListManagmentOpen; 
  const [showMenu, setShowMenu] = useState(false)

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
    setShowMenu(false);
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
  function changeTheme(){

    themeToggler()    
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
      <div className="hamburger">
        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          size={30}
          direction= 'left'
          strokeWidth={3}
          color="white"
          duration={0.5}
          className="hamburger-icon"
        />
      </div>

      <div className={
        showMenu ? 'menu open' : 'menu closed'
      }>
        <MenuButtonStyled className="menu-item"
          onClick={handleClickAccounts}
        >
          <p>{showMap ? 'COMPARADOR' : 'MAPA'}</p>
        </MenuButtonStyled>
        <MenuButtonStyled className="menu-item">
          <p>DOCUMENTOS</p>
        </MenuButtonStyled>
        <MenuButtonStyled className="menu-item"
          onClick={changeTheme}
        >
          <p>CAMBIAR TEMA</p>
        </MenuButtonStyled>
      </div>

    </NavBarHomeStyled>
  );
};

export default NavBarHome;

