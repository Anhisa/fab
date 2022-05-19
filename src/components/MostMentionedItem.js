import React from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../hooks/useGetData';




export const MostMentionedItem = ({newData, periodId}) => {
 
  const tweetNumber = newData.map((item) => parseInt(item.mentions_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );


  return (
    <div>
      <h1>cuenta oficial:</h1> <Link to={`/diplomacia-digital/${newData[0].official_account}`}>{newData[0].official_account}</Link> 
      <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {newData
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


