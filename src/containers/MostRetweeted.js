import React from 'react';
import { MostRetweetedItem } from '../components/MostRetweetedItem';
import { MostRetweetedChart } from '../components/MostRetweetedChart';


export const MostRetweetedItems = () => {

  return (
    <section className="row">
      <div className="col-8">
        <MostRetweetedItem  />
      </div>
      <div className="col-4">
        <MostRetweetedChart />
      </div>
    </section>
  );
};


