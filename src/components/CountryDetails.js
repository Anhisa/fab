import React, { useState, useEffect } from 'react';
import { AccountItem } from './AccountItem';
import axios from 'axios';

const api = '/official-accounts'

const AccountList = () => {
  const [account, setAccount] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setAccount(response.data);
  }, [])

  return (
    <section>
      <div>
        <AccountItem />
      </div>
    </section>
  )
}

export {AccountList};
