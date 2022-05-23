import React, { useContext, useEffect, useState, memo } from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { MonthlyTweetsChart } from '../components/MonthlyTweetsChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';
export const MonthlyTweetsItems = memo((period) => {
  const data = useFilterData(api, 'monthly-tweets');
  const [innerData, setInnerData] = useState(false);
 
  console.log('MonthlyTweetsItems', period);
  useEffect(() => {   
    if (data !== false) {
      setInnerData(data);
    }
  }, [data, period]);

  if (!data) {
    return <div>Loading...</div>;
  }
  if (innerData.length === 0) {
    return <div>No hay data en el periodo seleccionado</div>;
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
});
