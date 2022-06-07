import React, { useEffect, useState, memo } from 'react';

import { useFilterData } from '../hooks/useFilterData';
import { MostMentionedItemCHANGE } from '../components/mostMentioned/MostMentionedItemCHANGE';
import { CreateChart } from '../helpers/createChart';
import { Spinner } from 'react-bootstrap';
import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import MostMentionedPie from '../components/mostMentioned/MostMentionedPie';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';

export const MostMentionedItems = memo(() => {
  
  const [innerData, setInnerData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const accountsNames = useActiveNames();
  const { isPeriodComparisonActive } = usePeriodComparison();


  const data = useFilterData(api, 'most-mentioned');




  

  useEffect(() => {
    if (data !== false) {
      
      console.log('data', data);
      data.forEach((accountId, index) => {
        if(accountId.length > 1){
          data[index].pop()          
        }
      })
      console.log('data', data);
      setInnerData(data);
      setChartData(CreateChart(data));
    }
  }, [data]);

  if (!data) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (innerData.length === 0) {
    return (
      <EmptyDataStyled>
        No hay data correspondiente al periodo seleccionado
      </EmptyDataStyled>
    );
  }

  return (
    <section className="closed" id="most-mentioned">
      { data.map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <MostMentionedItemCHANGE
              newData={accountId}
              arrayBar={chartData[index]}
              comparisonView={isPeriodComparisonActive}
              title={accountsNames[index]}
            />

            <MostMentionedPie
              newData={accountId}             
              title={'Categorias de los más mencionados'}
            />
          </section>
        );
      })}
    </section>
  );
});
