import React, { useContext, useEffect, useState, memo } from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';
import { MostMentionedItemCHANGE } from '../components/MostMentionedItemCHANGE';
import { CreateChart } from '../helpers/createChart';
import { Spinner } from 'react-bootstrap';
import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import MostMentionedPie from '../components/MostMentionedPie';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
export const MostMentionedItems = memo(({ period }) => {
  const [innerData, setInnerData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const accountsNames = useActiveNames()
  const {isPeriodComparisonActive} = usePeriodComparison();
  let arraysBar = [];
  const data = useFilterData(api, 'most-mentioned');
  
  useEffect(() => {
    if (data !== false) {
    
      setInnerData(data);

      setChartData(CreateChart(data));
    }
  }, [data, period]);
  if (!data) {
    return   <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
  if (innerData.length === 0) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>;
  }

  return (
    <section className="closed" id="most-mentioned">
      {data.map((accountId, index) => {
        return (
          <section className="column" key={index}>
            
              <MostMentionedItemCHANGE
                newData={accountId}
                arrayBar={chartData[index]}
                
                comparisonView={isPeriodComparisonActive}
                title={accountsNames[index]}
              />
            
            <MostMentionedPie newData={accountId}
              periodId={period}
              title={accountsNames[index]}
            />
          </section>
        );
      })}
    </section>
  );
});
