import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarStyled } from '../styles/styledComponents/NavBarStyled';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="navbar-header">
        <h1>
          <Link to={'/diplomacia-digital'}>
            <ArrowBackIcon 
              sx={{
                fontSize: 40,
                color: '#ffce21',
              }}
            />
          </Link>
        </h1>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
