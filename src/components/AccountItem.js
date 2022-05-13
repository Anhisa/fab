import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const AccountItem = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setAccounts(response.data);
  }, []);

  return (
      <div>
        {accounts
        .filter((account) => account.country_id === '7')
        .map((account) => (
          <div key={account.official_account_id}  >
            <span>{account.country_name_spa} - {account.official_account} - {account.official_account_name_spa}</span>
          </div>
        ))}
      </div>
  );
};

