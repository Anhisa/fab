import React from 'react';
import { Link } from 'react-router-dom';


export const HtMostUsedItem = ({ newData, periodId }) => {
  console.log('newData HT most used item', newData[0]);
  // let accountId = '15';
  // let periodId = '4';
  const tweetNumber = newData.map(item => parseInt(item.ht_mentions_number));
  

  console.log('tweetNumber', tweetNumber);
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => 
    {return totaltweetsNumber + item},
    0
  );
  
  console.log('total tweets', totaltweets )

  //console.log(accountInfo);
  return (
    <div>
      <h1>cuenta oficial:</h1> <Link to={`/diplomacia-digital/${newData[0].official_account}`}>{newData[0].official_account}</Link> 
      <h1>
        Periodo de {periodId.startDate.toString()} a{' '}
        {periodId.endDate.toString()}
      </h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {newData.map((data) => (
        <div key={`ht-${data.ht_most_used_id}`}>
          <h2>Hashtag: {data.ht}</h2>
          <h4>descripción: {data.official_account_name_spa}</h4>
          <span>
            categoría: {data.ht_category_spa} - descripción de la categoría:{' '}
            {data.ht_category_desc_spa} - número de menciones:{' '}
            {data.ht_mentions_number} - periodo: {data.period_id}
          </span>
        </div>
      ))}
    </div>
  );
};
