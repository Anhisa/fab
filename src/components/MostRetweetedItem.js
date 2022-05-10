import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-retweeted';

const MostRetweetedItem = () => {
  const [mostRetItems, setMostRetItems] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setMostRetItems(response.data);
  }, []);

  return (
    <div>
      {mostRetItems
        .filter(
          (mostRetItem) =>
            mostRetItem.official_account_id === '3' &&
            mostRetItem.period_id === '3'
        )
        .map((mostRetItem) => (
          <div key={mostRetItem.users_most_retweeted_id}>
            <h2>{mostRetItem.official_account}</h2>
            <h4>{mostRetItem.official_account_name_spa}</h4>
            <span>
              {mostRetItem.user_account} -{' '}
              {mostRetItem.most_retweeted_description_spa} -{' '}
              {mostRetItem.most_retweeted_category_spa} -{' '}
              {mostRetItem.most_retweeted_category_desc_spa} -{' '}
              {parseInt(mostRetItem.tweets_number)} - {mostRetItem.period_id} -{' '}
              {mostRetItem.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};

export { MostRetweetedItem };
