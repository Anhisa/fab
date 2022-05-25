import React, { useContext, useEffect, useState, memo } from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';
import { MostMentionedItemCHANGE } from '../components/MostMentionedItemCHANGE';
import { CreateChart } from '../helpers/createChart';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned';
export const MostMentionedItems = memo(({ period }) => {
  const [innerData, setInnerData] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);
  let arraysBar = [];
  const data = useFilterData(api, 'most-mentioned');

  useEffect(() => {
    if (data !== false) {
      if (data.length > 1) {
        setComparisonView(true);
      }
      setInnerData(data);

      setChartData(CreateChart(data));
    }
  }, [data, period]);
  if (!data) {
    return <div>Loading...</div>;
  }
  if (innerData.length === 0) {
    return <div>No hay data correspondiente al periodo seleccionado</div>;
  }

  return (
    <section className="closed" id="most-mentioned">
      {data.map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostMentionedItemCHANGE
                newData={accountId}
                arrayBar={chartData[index]}
                period={period}
                comparisonView={comparisonView}
              />
            </div>
            {/* <div>
              <MostMentionedChart newData={accountId} periodId={period}/>
            </div> */}
          </section>
        );
      })}
    </section>
  );
});
