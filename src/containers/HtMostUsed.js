import React from 'react';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';


export const HtMostUsedItems = () => {

  return (
    <section>
        <HtMostUsedItem />
        <HtMostUsedChart />
    </section>
  );
};
