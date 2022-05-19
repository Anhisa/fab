import React, { useEffect, useState } from 'react';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { useParams } from 'react-router';
import { useGetData } from '../hooks/useGetData';
import { TableContext } from '../context/TableContext';

const apiUsuarios =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const AccountDetails = () => {
  const { account } = useParams();
  const response = useGetData(apiUsuarios);
  const items = response.data;

  const userId = items.filter((item) => item.official_account === account);
  console.log(userId);
  const [dataSearch, setDataSearch] = useState({
    accounts: 'undefined',
    period: {
      startDate: 1,
      endDate: 4,
    },
  });
  useEffect(() => {
    setDataSearch({
      accounts: userId[0].official_account_id,
      period: {
        startDate: 1,
        endDate: 4,
      },
    });
  }, [items]);

  console.log(dataSearch);
  return (
    <TableContext.Provider value={dataSearch}>
      {dataSearch.accounts !== 'undefined' && (
        <>
          <HtMostUsedItems />
          <MostRetweetedItem2 accountId={dataSearch.accounts}/>
          <MostRepliedItems />
          <MostMentionedItems />
        </>
      )}
      {/* <MonthlyTweetsItems /> */}
    </TableContext.Provider>
  );
};
