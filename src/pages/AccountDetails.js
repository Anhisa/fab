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
import { UserCardStyled, ContainerButtons } from '../styles/styledComponents/userCardStyled'
import HeaderUserCard from '../components/HeaderUserCard';
import { AccountDetailsStyled } from '../styles/styledComponents/AccountDetailsStyled';
import { CompPeriodSlider } from '../components/CompPeriodSlider';


const apiUsuarios =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-fol';

export const AccountDetails = () => {
  const { account } = useParams();
  const { loading, data } = useGetData(apiUsuarios);
  const items = data;
  const [period, setPeriod] = useState({
    startDate: 1,
          endDate: 4,
  });

  
  const [dataSearch, setDataSearch] = useState(false);
  
  useEffect(() => {
    if (!loading) {
      const userId = items.filter((item) => item.official_account === account);
      
      setDataSearch({
        country: userId[0].country_id,
        dataUser: userId,
        userOfficialName : userId[0].official_account_name_spa,
        accounts: {
          accountIdA: userId[0].official_account_id,
        },
        period: period,
      });
    }
  }, [loading, items, account, period]);
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <AccountDetailsStyled>
      {dataSearch !== false && (
        <TableContext.Provider value={dataSearch}>
          <HeaderUserCard countryId={dataSearch.country} userName={dataSearch.userOfficialName}/>
          <UserCardStyled>
            
            <div className='left'>
            <ViewUserCard data={dataSearch.dataUser} period={dataSearch.period.endDate - 1} />
            </div>
            <div className='right'>
            <MonthlyTweetsItems />
            </div>
          </UserCardStyled>
          <div>
            <hr/>
            <CompPeriodSlider setPeriod={setPeriod} />
            <hr/>
          </div>
          
          <CollapsableTableStyled>
            <button name="most-retweet" onClick={handleClick}>
              Most retweeted
            </button>
            <MostRetweetedItems />
          </CollapsableTableStyled>
          <CollapsableTableStyled>
            <button name="most-replied" onClick={handleClick}>
              Most Replied
            </button>

            <MostRepliedItems />
          </CollapsableTableStyled>
          <CollapsableTableStyled>
            <button name="most-ht" onClick={handleClick}>
              Most used hashtags
            </button>

            <HtMostUsedItems />
          </CollapsableTableStyled>
          <CollapsableTableStyled>
            <button name="most-mentioned" onClick={handleClick}>
              Most mentioned
            </button>

            <MostMentionedItems />
          </CollapsableTableStyled>
          
        </TableContext.Provider>
      )}
    </AccountDetailsStyled>
  );
};
