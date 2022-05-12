import React from 'react';
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/ht-most-used';

export const HtMostUsedItem = () => {
  const data = useGetData(api);
  const item = data.data;
  let accountId = '15';
  let periodId = '4';
  const tweetNumber = item
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
    )
    .map((item) => parseInt(item.ht_mentions_number));
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

  console.log(accountInfo);
  return (
    <div>
      <h1>cuenta oficial: {accountInfo[0]}</h1>
      <h1>periodo: {accountInfo[1]}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {data.data
        .filter(
          (data) => data.official_account_id === accountId && data.period_id === periodId
        )
        .map((data) => (
          <div key={`ht-${data.ht_most_used_id}`}>
            <h2>Hashtag: {data.ht}</h2>
            <h4>descripción: {data.official_account_name_spa}</h4>
            <span>
              categoría: {data.ht_category_spa} - descripción de la
              categoría: {data.ht_category_desc_spa} - número de
              menciones: {parseInt(data.ht_mentions_number)} - periodo: {data.period_id}
            </span>
          </div>
        ))}
    </div>
  );
};


