import React, { useContext, useEffect, useState } from 'react';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
export const HtMostUsedItems = () => {
  const context = useContext(TableContext);
  const [innerData, setInnerData] = useState([]);
  const { period } = context;  
  const data = useFilterData(api, 'ht-most-used');
  useEffect(()=> {    
    if(data !== false){
      setInnerData(data);
    }
  },[data, context])
  if(!data){
    return <div>Loading...</div>
  }
  return (
    <section className='closed' id='most-ht'>

    {Object.values(innerData).map((accountId, index) => {
      return (
        <section className="column" key={index}>
          <div >
            <HtMostUsedItem newData={accountId} periodId={period} />
          </div>
          <div>
            <HtMostUsedChart newData={accountId} periodId={period}/>
          </div>
        </section>
      );
    })
  }
  </section>

  );
};
