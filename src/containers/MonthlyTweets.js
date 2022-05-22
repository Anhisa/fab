import React, { useContext, useEffect, useState } from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { MonthlyTweetsChart } from '../components/MonthlyTweetsChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';
export const MonthlyTweetsItems = () => {
  const data = useFilterData(api, 'monthly-tweets');
  const [innerData, setInnerData] = useState(false);
console.log('monthly-tweets', data)
  const context = useContext(TableContext);
  const { period } = context;

  useEffect(() => {
    if (data !== false) {
      setInnerData(data);
    }
  }, [data, context]);

  if (!innerData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="closed" id="monthy-tweets">
      {Object.values(data).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            
          
              <MonthlyTweetsChart newData={accountId} periodId={period} />
          
          </section>
        );
      })}
    </section>
  );
};
