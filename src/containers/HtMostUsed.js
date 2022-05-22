import React, { useContext, useEffect, useState, memo } from 'react';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
export const HtMostUsedItems = memo(({ period }) => {
  const [innerData, setInnerData] = useState([]);

  const data = useFilterData(api, 'ht-most-used');
  useEffect(() => {
    if (data !== false) {
      setInnerData(data);
    }
  }, [data, period]);
  if (!data) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div>No data</div>;
  }

  return (
    <section className="closed" id="most-ht">
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <HtMostUsedItem newData={accountId} periodId={period} />
            </div>
            <div>
              <HtMostUsedChart newData={accountId} periodId={period} />
            </div>
          </section>
        );
      })}
    </section>
  );
});
