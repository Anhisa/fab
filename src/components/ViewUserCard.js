import React from 'react';

import VerifiedIcon from '@mui/icons-material/Verified';
import { UserCardStyled, ViewUserCardStyled } from '../styles/styledComponents/ViewUserCardStyled';
const ViewUserCard = ({data, period}) => {
  const dataLength = data.length - 1;
  const dataDiccionary = {
    1: 'Enero 1,2020 a Junio 31,2020',
    2: 'Julio 1,2020 a Diciembre 31,2020',
    3: 'Enero 1,2021 a Junio 31,2021',
    4: 'Julio 1,2021 a Diciembre 31,2021',
  }

  return (
    <ViewUserCardStyled>
      <div className="innerLeft">
        <UserAccountCard user={data[0].official_account} />
        <hr/>
        <UserCard name={"Institución / Nombre"} data={data[0].official_account_name_spa}/>
        <hr/>
        <UserCard name={"Período"} data={'Julio 1, 2020 - Diciembre 31, 2020'}/>
      </div>
      <div className="innerRight">
        <UserCard  name={'Nº Seguidores'} data={data[period].followers_number}/>
        <hr/>
        <UserCard name={'Nº cuentas seguidas'} data={data[period].following_number} />
        <hr/>
        <UserCard  name={"Total tuits período"} data={data[period].total_tweets_period}/>
      </div>
    </ViewUserCardStyled>
  );
};

export default ViewUserCard;

export const UserAccountCard = ({user}) => {
  return (
    <UserCardStyled>
      <div className="firstGroup">
        <div className="dot" />
        <div className="innerGroup">
          <div className="title">
            <p>Cuenta</p>
          </div>
          <div className="account">
            <p>{user}</p>
            <div className='verified'>
              <VerifiedIcon color="primary" />
            </div>
          </div>
        </div>
      </div>
    </UserCardStyled>
  );
};

export const UserCard = ({name, data}) => {
return(
  <UserCardStyled>
  <div className="firstGroup">
    <div className="dot" />
    <div className="innerGroup">
      <div className="title">
        <p>{name}</p>
      </div>
      <div className="data">
        <p>{data}</p>        
      </div>
    </div>
  </div>
</UserCardStyled>
)
}

