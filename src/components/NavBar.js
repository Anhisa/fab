import React from 'react'
import { Link } from 'react-router-dom';
import { NavBarStyled } from '../styles/styledComponents/NavBarStyled';

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="navbar-header">
        <h1>
          <Link to={'/diplomacia-digital'}>
            <p>
              <b>Home</b>
            </p>

          </Link>
        </h1>
      </div>
    
    </NavBarStyled>
  );
}



export default NavBar