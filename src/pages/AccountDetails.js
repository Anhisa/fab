import React, { useEffect, useState } from 'react';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';

import { useParams } from 'react-router';
import { useGetData } from '../hooks/useGetData';
import { TableContext } from '../context/TableContext';
import ViewUserCard from '../components/ViewUserCard';
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled';

import {
  UserCardStyled,
  ContainerButtons,
} from '../styles/styledComponents/userCardStyled';
import HeaderUserCard from '../components/HeaderUserCard';
import { AccountDetailsStyled } from '../styles/styledComponents/AccountDetailsStyled';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { StyledFilterButton } from '../styles/styledComponents/StyledFilterButton';
import NavBar from '../components/NavBar';
import ErrorComponent from '../components/errorComponent';
import { AccountPeriodContainer } from '../styles/styledComponents/AccountPeriodContainer';
import ComparativeUserViewContainer from '../containers/ComparativeUserView/ComparativeUserViewContainer';

const apiUsuarios =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-fol';

export const AccountDetails = () => {
  const { account } = useParams();

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
  if (loading) {
    return <div>Loading</div>;
  }
  if (data.length === 0) {
    return <div>Error no hay data en ese Usuario</div>;
  }

  return (
    <>
      {dataSearch !== false ? (
        <TableContext.Provider value={dataSearch}>
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
                  period={dataSearch.period.endDate - 1}
                />
              </div>
              <div className="right">
                <MonthlyTweetsItems period={period} />
              </div>
            </UserCardStyled>
              <hr />
            <AccountPeriodContainer>
              <CompPeriodSlider setPeriod={setPeriod} />
            </AccountPeriodContainer>
              <hr />

            <ComparativeUserViewContainer period={period}/>
          </AccountDetailsStyled>
        </TableContext.Provider>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};
