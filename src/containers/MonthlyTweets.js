import React, { useContext } from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { MonthlyTweetsChart } from '../components/MonthlyTweetsChart';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';


const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';
export const MonthlyTweetsItems = () => {
  const data = useFilterData(api, 'monthly-tweets');

  const context = useContext(TableContext);
const { period } = context;

  if(!data || data.length === 0){
    return <div>Loading...</div>
  }

  return (

        <section className='closed' id='monthy-tweets'>

        {Object.values(data).map((accountId, index) => {
          return (
            <section className="column" key={index}>
              <div >
                <MonthlyTweetsItem  newData={accountId} periodId={period} />
              </div>
              <div>
                <MonthlyTweetsChart newData={accountId} periodId={period}/>
              </div>
            </section>
          );
        })
      }
      </section>
  );
};

