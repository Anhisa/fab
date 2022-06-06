import React, { useEffect, useState, memo } from 'react';

import { useFilterData } from '../hooks/useFilterData';
import { MostRetweetedItemChange } from '../components/MostRetweetedItemCHANGE';
import { CreateChart } from '../helpers/createChart';
import { Spinner } from 'react-bootstrap';

import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import MostRetwittedPie from '../components/MostRetwittedPie';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = memo((period) => {
  const [innerData, setInnerData] = useState(false);
  const accountsNames = useActiveNames()
  const {isPeriodComparisonActive} = usePeriodComparison();

  // const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);
  const data = useFilterData(api, 'most-retweeted');
  let arraysBar = [];
 
  useEffect(() => {
    if (data !== false) {  
    setInnerData(data);      
     arraysBar = CreateChart(data)
    setChartData(arraysBar);  
  }
  }, [period, data]);
  if (!data ) {
    return   <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
  if (innerData.length === 0|| chartData.length === 0) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>;
  } 
0


  return (
    <section className="closed" id="most-retweet">
      {innerData.map((dataAccount, index) => {
        return (
          <section className="column" key={index}>
            
              <MostRetweetedItemChange newData={dataAccount} arrayBar={chartData[index]} period={period} comparisonView={isPeriodComparisonActive} title={
                accountsNames[index]
              }/>
              <MostRetwittedPie newData={dataAccount} period={period} title={'Categorías más retuiteadas'}/>
            {/* <div>
              <MostRetweetedChart newData={accountId} period={period} />
            </div> */}
          </section>
        );
      })}
    </section>
  );
});
