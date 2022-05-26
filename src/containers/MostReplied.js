import React, { useContext, useEffect, useState, memo } from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { MostRepliedItemCHANGE } from '../components/MostRepliedItemCHANGE';
import { TableContext } from '../context/TableContext';
import { CreateChart } from '../helpers/createChart';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = memo((period) => {
    const data = useFilterData(api, 'most-replied');
    const {accounts} =useContext(TableContext);
  
    const accountsName = [
      accounts.accountIdA.name,
      accounts.accountIdB?.name || '',
    ];
  const [innerData, setInnerData] = useState(data);
  const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data !== false) {
      if(data.length > 1){     
        setComparisonView(true);
      }
      setInnerData(data);
      setChartData(CreateChart(data));
    }
  }, [data,period]);

  if (!data ) {
    return <div>Loading...</div>;
  }
  if(data.length === 0){
    return <div>No data</div>
  }


  return (
    <section className='closed' id='most-replied'>
    
    
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRepliedItemCHANGE newData={accountId} arrayBar={chartData[index]} comparisonView={comparisonView} title={accountsName[index]}/>
            </div>
            {/* <div>
              <MostRepliedChart newData={accountId} periodId={period} />
            </div> */}
          </section>
        );
      })}
    </section>
  );
});
