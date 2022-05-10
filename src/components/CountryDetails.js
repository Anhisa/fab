import React, { useState, useEffect } from 'react';
import { AccountItem } from './AccountItem';
import axios from 'axios';

const api =
  'https://fundacionandresbello.local/wp-json/fab/v1/official-accounts';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setAccounts(response.data);
  }, []);

  return (
    <section>
      <div>
        {accounts.map((account) => (
          <>
            <h2>{account.official_account}</h2>
            <h3>{account.official_account_name_spa}</h3>
            <h3>{account.country_name_spa}</h3>
          </>
        ))}
        <AccountItem />
      </div>
    </section>
  );
};

export { AccountList };
