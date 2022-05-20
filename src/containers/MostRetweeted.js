import React, { useContext, useEffect } from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';
import { useFilterData } from '../hooks/useFilterData';
import { TableContext } from '../context/TableContext';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = () => {
  const context = useContext(TableContext);
  const { period } = context; 
    
  const data = useFilterData(api, 'most-retweeted');
  useEffect(()=> {
    console.log("refresh")
  },[data])
  if(!data){
    return <div>Loading...</div>
  }
  console.log('data', data)
  
  return (
    <>
   
    <h1>Most retweeted</h1>
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
   </>
  );
};
