import React, { useContext, useEffect, useState, memo } from 'react';
import { Spinner } from 'react-bootstrap';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';
import HtMostUsedPie from '../components/HtMostUsedPie';
import { TableContext } from '../context/TableContext';
import usePeriodComparison from '../hooks/periodComparison';
import useActiveNames from '../hooks/useActiveNames';
import { useFilterData } from '../hooks/useFilterData';
import { PieContainerStyled } from '../styles/styledComponents/PieContainerStyled';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
export const HtMostUsedItems = memo(({ period }) => {
  const [innerData, setInnerData] = useState([]);
  const [categories, setCategories] = useState([]);
  const accountsNames = useActiveNames()
  const {isPeriodComparisonActive} = usePeriodComparison();
  const data = useFilterData(api, 'ht-most-used');
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

  return (
    <section className="closed" id="most-ht">
      <HtMostUsedChart categories={categories} newData={innerData} periodId={period} title={accountsNames} />
      <PieContainerStyled>
        {innerData.map((item, index) => (
          <HtMostUsedPie newData={item} key={index} title={accountsNames[index]}  setCategories={setCategories} />
        ))}
      </PieContainerStyled>
    </section>
  );
});
