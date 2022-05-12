import React from 'react';
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-mentioned';

const MostMentionedItem = () => {
  const data = useGetData(api);
  const item = data.data;
  let accountId = '19';
  let periodId = '4';
  const tweetNumber = item
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
    )
    .map((item) => parseInt(item.mentions_number));
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
          <div key={`mentioned-${data.users_most_metioned_id}`}>
            <h4>cuenta mencionada: {data.user_account}</h4>
            <p>descripción: {data.most_mentioned_description_spa}</p>
            <p>categoría: {data.most_mentioned_category_spa}</p>
            <p>
              descripción de la categoría:
              {data.most_mentioned_category_desc_spa}
            </p>
            <p>número de menciones: {parseInt(data.mentions_number)}</p>
            <p>cuenta verificada: {data.user_accounts_verified}</p>
          </div>
        ))}
    </div>
  );
};

export { MostMentionedItem };
