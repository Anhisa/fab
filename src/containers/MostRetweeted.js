import React from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';


export const MostRetweetedItems = ({periodId , accountId}) => {
  
  return (
    <section className="column">
      <div >
        <MostRetweetedItem2 periodId={periodId} accountId={accountId} />
      </div>
      <div>
        <MostRetweetedChart periodId={periodId} accountId={accountId}/>
      </div>
    </section>
  );
};


