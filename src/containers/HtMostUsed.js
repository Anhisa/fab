import React, { useContext, useEffect } from 'react';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
export const HtMostUsedItems = () => {
  const context = useContext(TableContext);
  const { period } = context;  
  const data = useFilterData(api, 'ht-most-used');
  useEffect(()=> {
    console.log("refresh")
  },[data])
  if(!data){
    return <div>Loading...</div>
  }
  return (
    <>

    {Object.values(data).map((accountId, index) => {
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
  </>
    // <section>
    //     <HtMostUsedItem />
    //     <HtMostUsedChart />
    // </section>
  );
};
