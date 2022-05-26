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
    if (data !== false && data.length > 0) {
      setInnerData(data);
    }
  }, [data, period]);

  if (!innerData) {
    return <div>Loading...</div>;
  }
  if (innerData.length === 0) {
    return <div>No hay data en el periodo seleccionado</div>;
  }

  return (
    <section className="closed" id="most-ht">
      {/* <div>
              <HtMostUsedItem newData={accountId} periodId={period} />
            </div> */}
     
        <HtMostUsedChart newData={innerData} periodId={period} />
     
    </section>
  );
});
