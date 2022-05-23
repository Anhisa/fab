import React, { useContext, useEffect, useState, memo } from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart'
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';
import { MostMentionedItemCHANGE } from '../components/MostMentionedItemCHANGE';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
export const MostMentionedItems = memo(({period}) => {

const [innerData, setInnerData] = useState([]);

 const data = useFilterData(api, 'most-mentioned');

 useEffect(()=> {
   if(data !== false){
     setInnerData(data);
   }  
 },[data, period])
  if(!data ){
    return <div>Loading...</div>
  }
  if(data.length === 0){
    return <div>No data</div>
  }

   
  
  return (
    <section className='closed' id='most-mentioned'>
    
   
      {Object.values(data).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div >
              <MostMentionedItemCHANGE newData={accountId} periodId={period} />
            </div>
            {/* <div>
              <MostMentionedChart newData={accountId} periodId={period}/>
            </div> */}
          </section>
        );
      })}
    </section>
  );
});


