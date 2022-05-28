import React, { useContext, useEffect, useState, memo } from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { MonthlyTweetsChart } from '../components/MonthlyTweetsChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';
import { Spinner } from 'react-bootstrap';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';
export const MonthlyTweetsItems = memo((period) => {
  const data = useFilterData(api, 'monthly-tweets');
  const [innerData, setInnerData] = useState(false);

  useEffect(() => {
    if (data !== false && data.length > 0) {
      setInnerData(data);
    }
  }, [data, period]);

  if (!innerData) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (innerData.length === 0) {
    return <div>No hay data en el periodo seleccionado</div>;
  }
 ;

  return (
    <section className="closed" id="monthy-tweets">
      <MonthlyTweetsChart newData={innerData} periodId={period} />
    </section >
  );
});
