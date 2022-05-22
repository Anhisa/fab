import React, { useContext, useEffect, useState, memo } from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = memo((period) => {
    const data = useFilterData(api, 'most-replied');
  const [innerData, setInnerData] = useState(data);

  useEffect(() => {
    if (data !== false) {
      setInnerData(data);
    }
  }, [data,period]);

  if (!data ) {
    return <div>Loading...</div>;
  }
  if(data.length === 0){
    return <div>No data</div>
  }


  return (
    <section className='closed' id='most-replied'>
    
    
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRepliedItem newData={accountId} periodId={period} />
            </div>
            <div>
              <MostRepliedChart newData={accountId} periodId={period} />
            </div>
          </section>
        );
      })}
    </section>
  );
});
