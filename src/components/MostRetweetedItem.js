import React, { useState, useEffect } from 'react';
import {useGetData} from '../hooks/useGetData';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-retweeted';

const MostRetweetedItem = () => {
  const data = useGetData(api);
  const item = data.data;
  let accountId = '21';
  let periodId = '3';
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
      <h1>periodo: {accountInfo[1]}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {data.data
        .filter(
          (data) =>
            data.official_account_id === accountId &&
            data.period_id === periodId
        )
        .map((data) => (
          <div key={data.users_most_retweeted_id}>
            <span>
              {data.user_account} -{' '}
              {data.most_retweeted_description_spa} -{' '}
              {data.most_retweeted_category_spa} -{' '}
              {data.most_retweeted_category_desc_spa} -{' '}
              {parseInt(data.tweets_number)} - {data.period_id} -{' '}
              {data.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};

export { MostRetweetedItem };
