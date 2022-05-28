import React, { useContext, useEffect, useState, memo } from 'react';
import { Spinner } from 'react-bootstrap';
import useActiveNames from '../hooks/useActiveNames';
import usePeriodComparison from '../hooks/periodComparison';
import { MostRepliedItemCHANGE } from '../components/MostRepliedItemCHANGE';
import { TableContext } from '../context/TableContext';
import { CreateChart } from '../helpers/createChart';
import { useFilterData } from '../hooks/useFilterData';
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = memo((period) => {
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
    return <div>No hay data en el periodo seleccionado</div>;
  }
  
  return (
    <>
    <section className="closed" id="most-replied">
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRepliedItemCHANGE
                newData={accountId}
                arrayBar={chartData[index]}
                comparisonView={isPeriodComparisonActive}
                title={accountsNames[index]}
              />
            </div>
            {/* <div>
              <MostRepliedChart newData={accountId} periodId={period} />
            </div> */}
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
