import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-mentioned';

const MostMentionedItem = () => {
  const [mostMenItems, setMostMenItems] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setMostMenItems(response.data);
  }, []);

  return (
    <div>
      {mostMenItems
        .filter(
          (mostMenItem) =>
            mostMenItem.official_account_id === '12' &&
            mostMenItem.period_id === '1'
        )
        .map((mostMenItem) => (
          <div key={mostMenItem.users_most_metioned_id}>
            <h2>{mostMenItem.official_account}</h2>
            <h4>{mostMenItem.official_account_name_spa}</h4>
            <span>
              {mostMenItem.user_account} -{' '}
              {mostMenItem.most_mentioned_description_spa} -{' '}
              {mostMenItem.most_mentioned_category_spa} -{' '}
              {mostMenItem.most_mentioned_category_desc_spa} -{' '}
              {parseInt(mostMenItem.mentions_number)} - {mostMenItem.period_id} -{' '}
              {mostMenItem.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};

export { MostMentionedItem };
