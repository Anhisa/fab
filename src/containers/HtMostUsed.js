import React, { useContext, useEffect, useState, memo } from 'react';
import { Spinner } from 'react-bootstrap';
import { HtMostUsedChart } from '../components/hashtags/HtMostUsedChart';
import HtMostUsedPie from '../components/hashtags/HtMostUsedPie';


import { TableContext } from '../context/TableContext';
import usePeriodComparison from '../hooks/periodComparison';
import useActiveNames from '../hooks/useActiveNames';
import { useFilterData } from '../hooks/useFilterData';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import { PieContainerStyled } from '../styles/styledComponents/PieContainerStyled';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used';
export const HtMostUsedItems = memo(({ period, usuario }) => {
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
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>;
  }

  return (
    <section className="closed ht" id="most-ht">
     
      <HtMostUsedChart categories={categories} newData={innerData} periodId={period} title={accountsNames} />
      <PieContainerStyled usuario={usuario}>
        {innerData.map((item, index) => (
          <HtMostUsedPie newData={item} key={index} title={accountsNames[index]}  setCategories={setCategories} usuario={usuario} />
        ))}
      </PieContainerStyled>

    </section>
  );
});
