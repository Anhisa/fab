import React, { useContext, useEffect, useState } from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { TableContext } from '../context/TableContext';
import { useFilterData } from '../hooks/useFilterData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied';
export const MostRepliedItems = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(TableContext);
  const { period } = context;
  const data = useFilterData(api, 'most-replied');
  const [innerData, setInnerData] = useState(data);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      if(data.length > 0){
      setInnerData(data);
      setLoading(false);
      console.log('data mostReplied', data);
      }
    }
  }, [data]);

  //console.log(period)
  console.log('innerData', innerData)
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1> Most replied </h1>
      {Object.values(innerData).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div>
              <MostRepliedItem newData={accountId} periodId={period} />
            </div>
            <div>
              <MostRepliedChart newData={accountId} periodId={period} />
            </div>
          </section>
        );
      })}
    </>
  );
};
