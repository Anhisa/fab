import React, { useContext } from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';


const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = () => {
  const context = useContext(TableContext);
  const { period } = context;
  const data = useFilterData(api, 'most-replied');
  console.log('data most Replied', data)
  if(!data){
    return <div>Loading...</div>
  }
  //console.log(period)
 
  return (
    <>
    {Object.values(data).map((accountId, index) => {
      return (
        <section className="column" key={index}>
          <div >
            <MostRepliedItem newData={accountId} periodId={period} />
          </div>
          <div>
            <MostRepliedChart newData={accountId} periodId={period}/>
          </div>
        </section>
      );
    }) }

    </>    

  );
};


