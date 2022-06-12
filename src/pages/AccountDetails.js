import React, { useEffect, useState } from 'react';

import { MonthlyTweetsItems } from '../containers/MonthlyTweets';


import { useParams } from 'react-router';
import { useGetData } from '../hooks/useGetData';

import ViewUserCard from '../components/ViewUserCard';

import {
  UserCardStyled,
  ContainerButtons,
} from '../styles/styledComponents/userCardStyled';
import HeaderUserCard from '../components/HeaderUserCard';
import { AccountDetailsStyled } from '../styles/styledComponents/AccountDetailsStyled';
import { CompPeriodSlider } from '../components/CompPeriodSlider';

import NavBar from '../components/NavBar';
import ErrorComponent from '../components/errorComponent';
import { AccountPeriodContainer } from '../styles/styledComponents/AccountPeriodContainer';
import ComparativeUserViewContainer from '../containers/ComparativeUserView/ComparativeUserViewContainer';
import Lottie from 'lottie-react';
const apiUsuarios =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-fol';
import lootieLoading from '../loader/107220-loading-circles.json';
import VerifiedPie from '../components/extraTables/VerifiedPie';
import AccountCreationDate from '../components/extraTables/accountCreationDate';
import AllDataByAccount from '../components/extraTables/allDataByAccount';

export const AccountDetails = () => {
  const { account } = useParams();
  const [innerLoading, setInnerLoading] = useState(true);
  const { loading, data } = useGetData(apiUsuarios);

  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 4,
  });

  const [dataSearch, setDataSearch] = useState(false);

  useEffect(() => {
    if (!loading) {
      const userId = data.filter((item) => item.official_account === account);
      if (userId.length === 0) {
        return;
      }

      setDataSearch({
        country: userId[0].country_id,
        dataUser: userId,
        userOfficialName: userId[0].official_account_name_spa,
        accounts: {
          accountIdA: {
            id: userId[0].official_account_id,
            name: userId[0].official_account_name_spa,
          },
        },
        period: period,
      });
    }
  }, [loading, data, account, period]);
  useEffect(() => {
    setTimeout(() => {
      setInnerLoading(false);
    }, 1500);
  },[])
  if (innerLoading) {
    return (
      <div
        className="spinner"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Lottie animationData={lootieLoading} loop={true} label="loading" />
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (data.length === 0) {
    return <div>Error no hay data en ese Usuario</div>;
  }

  return (
    <>
      {dataSearch !== false ? (
    
          <AccountDetailsStyled>
            <NavBar />
            <HeaderUserCard
              countryId={dataSearch.country}
              userName={dataSearch.userOfficialName}
            />
            <UserCardStyled>
              <div className="left">
                <ViewUserCard
                  data={dataSearch.dataUser}
                  period={dataSearch.period}
                />
              </div>
              <div className="right">
                <MonthlyTweetsItems period={period} context={dataSearch}/>
              </div>
            </UserCardStyled>
            <hr />
            <AccountPeriodContainer>
              <CompPeriodSlider
                setPeriod={setPeriod}
                data={dataSearch.dataUser}
              />
            </AccountPeriodContainer>
            <hr />          
            <ComparativeUserViewContainer period={period} usuario={true} context={dataSearch}/>
          </AccountDetailsStyled>
      
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};
