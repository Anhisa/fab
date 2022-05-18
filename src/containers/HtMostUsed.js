import React from 'react';
import { HtMostUsedChart } from '../components/HtMostUsedChart';
import { HtMostUsedItem } from '../components/HtMostUsedItem';
import { TableContext } from '../context/TableContext';


export const HtMostUsedItems = () => {
  const context = React.useContext(TableContext);
  const { accounts, period } = context;
  return (
    <>
    {Object.values(accounts).map((accountId, index) => {
      return (
        <section className="column" key={index}>
          <div >
            <HtMostUsedItem accountId={accountId} periodId={period} />
          </div>
          <div>
            <HtMostUsedChart accountId={accountId} periodId={period}/>
          </div>
        </section>
      );
    })
  }
  </>
    // <section>
    //     <HtMostUsedItem />
    //     <HtMostUsedChart />
    // </section>
  );
};
