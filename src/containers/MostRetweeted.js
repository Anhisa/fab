import React, { useEffect, useState, memo } from 'react';

import { useFilterData } from '../hooks/useFilterData';

import { CreateChart } from '../helpers/createChart';
import { Spinner } from 'react-bootstrap';

import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import { MostRetweetedItemChange } from '../components/mostRetweet/MostRetweetedItemCHANGE';
import MostRetwittedPie from '../components/mostRetweet/MostRetwittedPie';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = ({context, usuario}) => {

  const accountsNames = useActiveNames(context)
  console.log('account names', accountsNames)
  const {isPeriodComparisonActive} = context

  // const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [data, loading] = useFilterData(api, context, 'most-retweeted');
console.log('data', data)
  let arraysBar = [];
 
  useEffect(() => {
    if (!loading && data.length > 0) { 
 
      arraysBar = CreateChart(data)

    setChartData(arraysBar);  
  }
  }, [data, loading]);

  if (!data || data.length === 0) {
    return   <Spinner animation="border" role="status" style={{
      margin: '0, auto',
    }}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }

  



  return (
    <>
    {chartData.length > 0 ? 

      <section className="closed" id="most-retweet">
      {data.map((dataAccount, index) => {
        return (
          <section className="column" key={index}>
            
              <MostRetweetedItemChange newData={dataAccount} arrayBar={chartData[index]} comparisonView={isPeriodComparisonActive} title={
                accountsNames[index]
              }/>
              <MostRetwittedPie newData={dataAccount} title={accountsNames[index]} usuario={usuario}/>
       
          </section>
        );
      })}
      {accountsNames.length > data.length && <> 
      <EmptyDataStyled>
        No hay datos para mostrar
      </EmptyDataStyled>

      
      </>}
    </section>
  : ""
  }
  </>
  );
};
