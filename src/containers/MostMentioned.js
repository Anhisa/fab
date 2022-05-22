import React, { useContext, useEffect, useState } from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart'
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
export const MostMentionedItems = () => {
const context = useContext(TableContext);
const [innerData, setInnerData] = useState([]);
const { period } = context;
 const data = useFilterData(api, 'most-mentioned');

 useEffect(()=> {
   if(data !== false){
     setInnerData(data);
   }  
 },[data, context])
  if(!data || data.length === 0){
    return <div>Loading...</div>
  }
   
  
  return (
    <section className='closed' id='most-mentioned'>
    
   
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
    </section>
  );
};


