import React from 'react';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { MostRetweetedChart } from '../components/MostRetweetedChart';


export const MostRetweetedItems = () => {

  return (
    <section className="row">
      <div className="col-8">
        <MostRetweetedItem2  />
      </div>
      <div className="col-4">
        <MostRetweetedChart />
      </div>
    </section>
  );
};


