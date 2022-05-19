import React from 'react';
import { Link } from 'react-router-dom';
import { useFilterData } from '../hooks/useFilterData';
import {useGetData} from '../hooks/useGetData';


export const MostRepliedItem = ({newData, periodId}) => {

  const tweetNumber = newData    
    .map((item) => parseInt(item.tweets_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );

  return (
    <div>
      <h1>cuenta oficial:<Link to={`/diplomacia-digital/${newData[0].official_account}`}>{newData[0].official_account}</Link> </h1>
      <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {newData.map((data) => (
        <div key={data.users_most_replied_id}>            
            <span>
              {data.user_account} -{' '}
              {data.most_replied_description_spa} -{' '}
              {data.most_replied_category_spa} -{' '}
              {data.most_replied_category_desc_spa} -{' '}
              {data.tweets_number} - {data.period_id} -{' '}
              {data.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
};


