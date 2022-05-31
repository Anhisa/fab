import React from 'react'
import { NavBarHomeStyled } from '../styles/styledComponents/NavBarHomeStyled'

const NavBarHome = () => {
  return (
    <NavBarHomeStyled>
      <h2 className="banner-title">CHINA LATAM TWITTER DATABASE <em>beta</em></h2>
      <p>Base de datos interactiva de las cuentas de Twitter pertenecientes a los diplomáticos y representaciones diplomáticas de la República Popular China en América Latina y el Caribe.</p>
    </NavBarHomeStyled>
  )
}

export default NavBarHome