import React, { useContext, useEffect, useState, memo } from 'react';
import { Spinner } from 'react-bootstrap';
import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { MostRepliedItemCHANGE } from '../components/MostRepliedItemCHANGE';
import { TableContext } from '../context/TableContext';
import { CreateChart } from '../helpers/createChart';
import { useFilterData } from '../hooks/useFilterData';
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import MostRepliedPie from '../components/MostRepliedPie';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = memo((period, usuario) => {
  const data = useFilterData(api, 'most-replied');
  const accountsNames = useActiveNames()
  const {isPeriodComparisonActive} = usePeriodComparison();

  const [innerData, setInnerData] = useState(data);
 
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data !== false) {
      
      setInnerData(data);
      setChartData(CreateChart(data));
    }
  }, [data, period]);

  if (!data) {
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  }
  if (data.length === 0) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>;
  }
  
  return (
    <>
    <section className="closed" id="most-replied">
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
          
              <MostRepliedItemCHANGE
                newData={accountId}
                arrayBar={chartData[index]}
                comparisonView={isPeriodComparisonActive}
                title={accountsNames[index]}
              />
           
           
              <MostRepliedPie newData={accountId} periodId={period}  title={accountsNames[index]} />
           
          </section>
        );
      })}
      {isPeriodComparisonActive &&
     Object.values(innerData).length === 1&& (
      <StyledDataTable className="dataTable">
        <div className="column">
          <h1>No hay datos para mostrar</h1>
        </div>
      </StyledDataTable>
    )}
     
    </section>
     
    </>
  );
});
