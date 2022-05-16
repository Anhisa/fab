import React from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { MonthlyTweetsChart } from '../components/MonthlyTweetsChart';



export const MonthlyTweetsItems = () => {
  return (
    <section>
      <div>
        <MonthlyTweetsItem />
        <MonthlyTweetsChart />
      </div>
    </section>
  );
};

