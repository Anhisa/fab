import React, { useState, memo } from 'react'
import {
  MenuButtonStyled,
  NavBarHomeStyled
} from '../styles/styledComponents/NavBarHomeStyled'
import { Spin as Hamburger } from 'hamburger-react'
import PropTypes from 'prop-types'
import { TableContext } from '../context/InitialState'
// import { Link } from 'react-router-dom'

const NavBarHome = memo(function memoNavBar ({ menu, setOpen }) {
  const {
    setShowMap,
    setShowAccountComparing,
    setShowPeriodComparing,
    showMap
  } = menu
  const [showMenu, setShowMenu] = useState(false)
  const [, , themeToggler] = React.useContext(TableContext)

  // function handleClickChange () {
  //   setCurrentMap((prev) => !prev)
  //   setOpen(false)
  //   setShowAccountComparing(false)
  //   setShowPeriodComparing(false)
  // }
  function handleClickAccounts () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setShowMenu(false)
    if (!showMap) {
      setShowMap(true)
      setShowAccountComparing(false)
      setShowPeriodComparing(false)
    } else {
      setShowAccountComparing(true)
      setShowPeriodComparing(true)
      setShowMap(false)
      setOpen(false)
    }
  }
  function changeTheme () {
    themeToggler()
  }
  // useEffect(()=>{
  //   if(showMap){
  //     firstButton.current.classList.add('active')
  //     secondButton.current.classList.remove('active')
  //     thirdButton.current.classList.remove('active')
  // }},[showMap])
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
      <div className="hamburger" tabIndex={1}>
        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          size={30}
          direction="left"
          strokeWidth={3}
          color="white"
          duration={0.5}
          className="hamburger-icon"
        />
      </div>

      <div className={showMenu ? 'menu opened' : 'menu close'}>
        <MenuButtonStyled
          className="menu-item"
          onClick={handleClickAccounts}
          type="button"
        >
          <p tabIndex={0}>{showMap ? 'COMPARADOR' : 'MAPA'}</p>
        </MenuButtonStyled>
        <MenuButtonStyled className="menu-item" type="button">
          <a
            target="_blank"
            href="https://fundacionandresbello.org/documentos-dd/"
            rel="noreferrer"
          >
            <p>DOCUMENTOS</p>
          </a>
        </MenuButtonStyled>
        <MenuButtonStyled
          className="menu-item"
          type="button"
          onClick={changeTheme}
        >
          <p tabIndex={0}>CAMBIAR TEMA</p>
        </MenuButtonStyled>
      </div>
    </NavBarHomeStyled>
  )
})

export default NavBarHome

NavBarHome.propTypes = {
  menu: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired
}
