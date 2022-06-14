import React from 'react';

import VerifiedIcon from '@mui/icons-material/Verified';
import {
  UserCardStyled,
  ViewUserCardStyled,
} from '../styles/styledComponents/ViewUserCardStyled';
const ViewUserCard = ({ data, period }) => {
  
  const dataLength = data.length - 1;
  let periods
  let i = 1;
  
  if(dataLength !== 3){
    periods = Object.values(data).map((item) => {
      return parseInt(item.period_id);
    });   
  } else {
  periods = Object.values(data).map((item) => {
    return i++
  });
}
i = 1
  const totalCalculator = () => {
    if (period.startDate === period.endDate) {
      let indexStart = periods.indexOf(period.startDate);
  
      return data[indexStart].total_tweets_period;
    } else {
      let start = periods.indexOf(period.startDate)
     
      let end = periods.indexOf(period.endDate)

      let count = data.slice(start, end + 1).reduce((acc, curr) => {
        return acc + parseInt(curr.total_tweets_period);
      }, 0);

      return count;
    }
  };
  const total_tweets_period = totalCalculator();  

  return (
    <ViewUserCardStyled>
      <div className="innerLeft">
        <UserAccountCard user={data[0].official_account} />
        <hr />
        <UserCard
          name={'Institución / Nombre'}
          data={data[0].official_account_name_spa}
        />
        <hr />
        <UserCard
          name={'Fecha de creación de la cuenta'}
          data={data[0]['official_account creation_date']}
        />
      </div>
      <div className="innerRight">
        <UserCard
          name={'Nº Seguidores'}
          data={
            data[period.endDate - 1]?.followers_number === '0'
              ? data[period.endDate-2]?.followers_number
              : data[period.endDate - 1]?.followers_number ??
                'No hay data correspondiente al periodo seleccionado'
          }
        />
        <hr />
        <UserCard
          name={'Nº cuentas seguidas'}
          data={
            data[period.endDate - 1]?.following_number === '0'
              ? data[period.endDate-2]?.following_number
              : data[period.endDate - 1]?.following_number ??
                'No hay data correspondiente al periodo seleccionado'
          }
        />
        <hr />
        <UserCard
          name={'Total tuits período'}
          data={
            total_tweets_period ??
            'No hay data correspondiente al periodo seleccionado'
          }
        />
      </div>
    </ViewUserCardStyled>
  );
};

export default ViewUserCard;

export const UserAccountCard = ({ user }) => {
  return (
    <UserCardStyled>
      <div className="firstGroup">
        <div className="dot" />
        <div className="innerGroup">
          <div className="title">
            <b>Cuenta</b>
          </div>
          <div className="account">
            <p>{user}</p>
            <div className="verified">
              <VerifiedIcon color="primary" />
            </div>
          </div>
        </div>
      </div>
    </UserCardStyled>
  );
};

export const UserCard = ({ name, data }) => {
  return (
    <UserCardStyled>
      <div className="firstGroup">
        <div className="dot" />
        <div className="innerGroup">
          <div className="title">
            <h5>{name}</h5>
          </div>
          <div className="data">
            <span>{data}</span>
          </div>
        </div>
      </div>
    </UserCardStyled>
  );
};
