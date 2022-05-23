import React from 'react';
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';
let periodId = '4'; //default
let accountId = '14';

export const AccountInfo = () => {
  const response = useGetData(api);
  const items = response.data;
  const accountInfo = [];
  const account = items
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
    )
    .find((item) => item.official_account_id === accountId);
  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa);
    accountInfo.push(account.most_retweeted_category_desc_spa);
  }
  return( <div>
      <div> {accountInfo[0]} </div>
      <div> {accountInfo[1]} </div>
      <div> {accountInfo[2]} </div>
      <div> {accountInfo[3]} </div>
    </div>
    )
};
