import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-replied';

const MostRepliedItem = () => {
  const [mostRepItems, setMostRepItems] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setMostRepItems(response.data);
  }, []);

  return (
    <div>
      {mostRepItems
        .filter(
          (mostRepItem) =>
            mostRepItem.official_account_id === '34' &&
            mostRepItem.period_id === '4'
        )
        .map((mostRepItem) => (
          <div key={mostRepItem.users_most_replied_id}>
            <h2>{mostRepItem.official_account}</h2>
            <h4>{mostRepItem.official_account_name_spa}</h4>
            <span>
              {mostRepItem.user_account} -{' '}
              {mostRepItem.most_replied_description_spa} -{' '}
              {mostRepItem.most_replied_category_spa} -{' '}
              {mostRepItem.most_replied_category_desc_spa} -{' '}
              {parseInt(mostRepItem.tweets_number)} - {mostRepItem.period_id} -{' '}
              {mostRepItem.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};

export { MostRepliedItem };
