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
import handleClick from '../helpers/HandleClick';
import {
  UserCardStyled,
  ContainerButtons,
} from '../styles/styledComponents/userCardStyled';
import HeaderUserCard from '../components/HeaderUserCard';
import { AccountDetailsStyled } from '../styles/styledComponents/AccountDetailsStyled';
import { CompPeriodSlider } from '../components/CompPeriodSlider';
import { StyledFilterButton } from '../styles/styledComponents/StyledFilterButton';
import NavBar from '../components/NavBar';


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

      setDataSearch({
        country: userId[0].country_id,
        dataUser: userId,
        userOfficialName: userId[0].official_account_name_spa,
        accounts: {
          accountIdA: userId[0].official_account_id,
        },
        period: period,
      });
    }
  }, [loading, data, account, period]);
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
    <AccountDetailsStyled>
    <NavBar />
      {dataSearch !== false && (
        <TableContext.Provider value={dataSearch}>
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
          <div>
            <hr />
            <CompPeriodSlider setPeriod={setPeriod} />
            <hr />
          </div>

          <CollapsableTableStyled usuario="usuario">
            <StyledFilterButton
              type="button"
              name="most-retweet"
              onClick={handleClick}
            >
              Usuarios más retuiteados
            </StyledFilterButton>
            <MostRetweetedItems period={period} />
          </CollapsableTableStyled>
          <CollapsableTableStyled usuario="usuario">
            <StyledFilterButton
              type="button"
              name="most-replied"
              onClick={handleClick}
            >
              Usuarios que más han recibido respuesta
            </StyledFilterButton>

            <MostRepliedItems period={period} />
          </CollapsableTableStyled>

          <CollapsableTableStyled usuario="usuario">
            <StyledFilterButton
              type="button"
              name="most-mentioned"
              onClick={handleClick}
            >
              Usuarios más mencionados
            </StyledFilterButton>

            <MostMentionedItems period={period} />
          </CollapsableTableStyled>
          <CollapsableTableStyled usuario="usuario">
            <StyledFilterButton
              type="button"
              name="most-ht"
              onClick={handleClick}
            >
              Most used hashtags
            </StyledFilterButton>

            <HtMostUsedItems period={period} />
          </CollapsableTableStyled>
        </TableContext.Provider>
      )}
    </AccountDetailsStyled>
    </>
  );
};
