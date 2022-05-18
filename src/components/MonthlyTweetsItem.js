import React from 'react';
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';

export const MonthlyTweetsItem = () => {
  const data = useGetData(api);
  const item = data.data;
  let accountId = '7';
  let periodId = '2';
  const tweetNumber = item
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
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
        item.official_account_id === accountId && item.period_id === periodId
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
          (data) => data.official_account_id === accountId
          && data.period_id === periodId
        )
        .map((data) => (
          <div key={`monthlytweets-${data.monthly_tweets_id}`}>
            <p>
              mes: {data.month} número de tweets: {parseInt(data.tweets_number)}
            </p>
          </div>
        ))}
    </div>
  );
};
