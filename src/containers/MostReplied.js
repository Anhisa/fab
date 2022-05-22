import React, { useContext, useEffect, useState } from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = () => {
  const context = useContext(TableContext);
  const { period } = context;
  const data = useFilterData(api, 'most-replied');
  const [innerData, setInnerData] = useState(data);

  useEffect(() => {
    if (data !== false) {
      setInnerData(data);
    }
  }, [data,context]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
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
};
