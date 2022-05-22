import React, { useContext, useEffect, useState } from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';
import { useFilterData } from '../hooks/useFilterData';
import { TableContext } from '../context/TableContext';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = () => {
  const context = useContext(TableContext);
  const [innerData, setInnerData] = useState(false);
  const { period } = context; 
    
  const data = useFilterData(api, 'most-retweeted');
;
  useEffect(()=> {
    if(data.length > 0){

      setInnerData(data);
    }    
  },[innerData, data])
  if(!data || data.length === 0){
    return <div>Loading...</div>
  }


 
  return (
    <section className='closed' id='most-retweet'>   
   {data.map((accountId, index) => {
     return (
      <section className="column" key={index}>
      <div>
        <MostRetweetedItem2          
          newData={accountId}
          period={period}
        />
      </div>
      <div>
        <MostRetweetedChart         
          newData={accountId}
          period={period}
        />
      </div>
    </section>
   )})
   } 
   </section>
  );
};
