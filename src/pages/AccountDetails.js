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
  const { loading, data } = useGetData(apiUsuarios);
  const items = data;

  const userId = items.filter((item) => item.official_account === account);
  console.log(userId);
  const [dataSearch, setDataSearch] = useState(false);
  function handleRefresh() {
    setDataSearch({
      accounts: {
        accountIdA: userId[0].official_account_id,
      },
      period: {
        startDate: 1,
        endDate: 4,
      },
    });
  }
  useEffect(() => {
    if (!loading) {
      setDataSearch({
        accounts: {
          accountIdA: userId[0].official_account_id,
        },
        period: {
          startDate: 1,
          endDate: 4,
        },
      });
    }
  }, [loading]);
  if (loading) {
    return <div>Loading</div>;
  }
 

  return (
    <>
    <h1>VIsta usuarios</h1>
    <button onClick={handleRefresh}>refresh</button>
      {dataSearch !== false && (
        <TableContext.Provider value={dataSearch}>
          <>
            <HtMostUsedItems />
            <MostRetweetedItems />
            <MostRepliedItems />
            <MostMentionedItems />
          </>

          {/* <MonthlyTweetsItems /> */}
        </TableContext.Provider>
      )}
    </>
  );
};
