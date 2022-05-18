import React from 'react';
import { MostMentionedItem } from '../components/MostMentionedItem';
import { MostMentionedChart } from '../components/MostMentionedChart'
import { TableContext } from '../context/TableContext';


export const MostMentionedItems = () => {
  const context = React.useContext(TableContext);
  const { accounts, period } = context;

  return (
    <>
      {Object.values(accounts).map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <div >
              <MostMentionedItem accountId={accountId} periodId={period} />
            </div>
            <div>
              <MostMentionedChart accountId={accountId} periodId={period}/>
            </div>
          </section>
        );
      })}
    </>
  );
};


