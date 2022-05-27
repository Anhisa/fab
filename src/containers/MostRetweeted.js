import React, { useContext, useEffect, useState, memo } from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';
import { useFilterData } from '../hooks/useFilterData';
import { TableContext } from '../context/TableContext';
import { MostRetweetedItemChange } from '../components/MostRetweetedItemCHANGE';
import { CreateChart } from '../helpers/createChart';
import { Spinner } from 'react-bootstrap';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItems = memo((period) => {
  const [innerData, setInnerData] = useState(false);
  const {accounts} =useContext(TableContext);
  
  const accountsName = [
    accounts.accountIdA.name,
    accounts.accountIdB?.name || '',
  ];
 
  const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);
  const data = useFilterData(api, 'most-retweeted');
  let arraysBar = [];
  useEffect(() => {
    if (data !== false) {
    if(data.length > 1){     
     
      setComparisonView(true);
    }
    setInnerData(data);      
     arraysBar = CreateChart(data)
    setChartData(arraysBar);      

  }
  }, [period, data]);
  if (!data || chartData.length === 0) {
    return   <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
  if (innerData.length === 0) {
    return <div>No hay data correspondiente al periodo seleccionado</div>;
  } 
0


  return (
    <section className="closed" id="most-retweet">
      {innerData.map((dataAccount, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRetweetedItemChange newData={dataAccount} arrayBar={chartData[index]} period={period} comparisonView={comparisonView} title={
                accountsName[index]
              }/>
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
