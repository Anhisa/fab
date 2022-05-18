import React from 'react';
import {useGetData} from '../hooks/useGetData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';

export const MostRepliedItem = ({accountId, periodId}) => {
  const data = useGetData(api);
  const item = data.data;
  //console.log('mostRepliedItem', periodId);
  // let accountId = '15';
  // let periodId = '1';
  const tweetNumber = item
    .filter(
      (item) =>
        item.official_account_id === accountId && (parseInt(item.period_id ) >= periodId.startDate && parseInt(item.period_id ) <= periodId.endDate)
    )
    .map((item) => parseInt(item.tweets_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  const accountInfo = [];
  const account = item
    .filter(
      (item) =>
        item.official_account_id === accountId && (parseInt(item.period_id ) >= periodId.startDate && parseInt(item.period_id ) <= periodId.endDate)
    )
    .find((item) => item.official_account_id === accountId);
  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
  }


  return (
    <div>
      <h1>cuenta oficial: {accountInfo[0]}</h1>
      <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {data.data
        .filter(
          (data) =>
            data.official_account_id === accountId &&
            data.period_id === periodId
        )
        .map((data) => (
          <div key={data.users_most_replied_id}>
            <span>
              {data.user_account} -{' '}
              {data.most_replied_description_spa} -{' '}
              {data.most_replied_category_spa} -{' '}
              {data.most_replied_category_desc_spa} -{' '}
              {parseInt(data.tweets_number)} - {data.period_id} -{' '}
              {data.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};


