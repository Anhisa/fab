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

export const MostMentionedItems = ({usuario, context}) => {

  const [innerData, setInnerData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const accountsNames = useActiveNames(context);
  const { isPeriodComparisonActive } = context


  const [data, loading] = useFilterData(api, context, 'most-mentioned');




  

  useEffect(() => {
    if (!loading && data.length > 0) {

      setInnerData(data);
      setChartData(CreateChart(data));
    }
  }, [data, loading]);

  if (loading) {
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
              title={accountsNames[index]}
              usuario={usuario}
            />
          </section>
        );
      })}
    </section>
  );
};
