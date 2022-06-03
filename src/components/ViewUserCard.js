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
  /* Pendiente agregar el periodo */ 

const totalCalculator =  () => {
if(period.startDate === 4 && period.endDate === 4){
  return data[dataLength].total_tweets_period
} else if (period.startDate === 1 && period.endDate === 1){
  return data[0].total_tweets_period
} else if (period.startDate === 2 && period.endDate === 2){
  return data[1].total_tweets_period
} else if (period.startDate === 3 && period.endDate === 3){
  return data[2].total_tweets_period
} else if (period.startDate === 3 && period.endDate === 4){
  return parseInt(data[2].total_tweets_period) + parseInt(data[3].total_tweets_period)
}
else {
 
let count =  data.slice(period.startDate - 1,period.endDate ).reduce((acc, curr) => {
  return acc + parseInt(curr.total_tweets_period)
},0)


return count
}
}
const total_tweets_period = totalCalculator()

  return (
    <ViewUserCardStyled>
      <div className="innerLeft">
        <UserAccountCard user={data[0].official_account} />
        <hr/>
        <UserCard name={"Institución / Nombre"} data={data[0].official_account_name_spa}/>
        <hr/>
        {/* <UserCard name={"Período"} data={'Julio 1, 2020 - Diciembre 31, 2020'}/> */}
      </div>
      <div className="innerRight">
        <UserCard  name={'Nº Seguidores'} data={data[period.endDate-1].followers_number ?? 'No hay data correspondiente al periodo seleccionado'}/>
        <hr/>
        <UserCard name={'Nº cuentas seguidas'} data={data[period.endDate-1].following_number ?? 'No hay data correspondiente al periodo seleccionado'} />
        <hr/>
        <UserCard  name={"Total tuits período"} data={total_tweets_period ?? 'No hay data correspondiente al periodo seleccionado'} />
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
            <b>Cuenta</b>
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
        <h5>{name}</h5>
      </div>
      <div className="data">
        <span>{data}</span>        
      </div>
    </div>
  </div>
</UserCardStyled>
)
}

