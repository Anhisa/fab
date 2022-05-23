import React, { useContext, useEffect, useState, memo } from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';
import { useFilterData } from '../hooks/useFilterData';
import { TableContext } from '../context/TableContext';
import { MostRetweetedItemChange } from '../components/MostRetweetedItemCHANGE';
import { CreateChart } from '../helpers/createChart';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = memo((period) => {
  const [innerData, setInnerData] = useState(false);
  const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);
  const data = useFilterData(api, 'most-retweeted');
  let arraysBar = [];
  useEffect(() => {
    if (data !== false) {
    if(data.length > 1){     
      console.log('data 😀😀😀😀',data);
      setComparisonView(true);
    }
    setInnerData(data);      
     
    setChartData(CreateChart(data));      
  }
  }, [period, data]);
  if (!data) {
    return <div>Loading...</div>;
  }
  if (innerData.length === 0) {
    return <div>No hay data correspondiente al periodo seleccionado</div>;
  } 



  return (
    <section className="closed" id="most-retweet">
      {data.map((dataAccount, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRetweetedItemChange newData={dataAccount} arrayBar={chartData[index]} period={period} comparisonView={comparisonView}/>
            </div>
            {/* <div>
              <MostRetweetedChart newData={accountId} period={period} />
            </div> */}
          </section>
        );
      })}
    </section>
  );
});
