import React from 'react';
import { MostRepliedChart } from '../components/MostRepliedChart';
import { MostRepliedItem } from '../components/MostRepliedItem';
import { TableContext } from '../context/TableContext';


export const MostRepliedItems = () => {
  const context = React.useContext(TableContext);
  const { accounts, period } = context;
  //console.log(period)
 
  return (
    <>
    {Object.values(accounts).map((accountId, index) => {
      return (
        <section className="column" key={index}>
          <div >
            <MostRepliedItem accountId={accountId} periodId={period} />
          </div>
          <div>
            <MostRepliedChart accountId={accountId} periodId={period}/>
          </div>
        </section>
      );
    }) }

    </>
    
    // <section>
    //     <MostRepliedItem />
    //     <MostRepliedChart />
    // </section>
  );
};


