import React, { useContext, useEffect } from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart'
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
export const MostMentionedItems = () => {
const context = useContext(TableContext);
const { period } = context;
 const data = useFilterData(api, 'most-mentioned');
 useEffect(()=> {
   console.log("refresh")
 },[data])
  if(!data){
    return <div>Loading...</div>
  }
    console.log('data', data)
  
  return (
    <>
    <h1>Most mentioned</h1>
      {Object.values(data).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div >
              <MostMentionedItem newData={accountId} periodId={period} />
            </div>
            <div>
              <MostMentionedChart newData={accountId} periodId={period}/>
            </div>
          </section>
        );
      })}
    </>
  );
};


