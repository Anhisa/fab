import { useContext, useEffect, useState } from 'react';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { TableContext } from '../context/TableContext';
import { useFilterData } from './useFilterData';

export const ComponentContainer = () => {
  const context = useContext(TableContext);
  const [data, setData] = useState([]);
  const { categories, accounts } = context;
  const { accountIdA, accountIdB } = accounts;
  const { period } = context;
  let filterData = useFilterData();
  useEffect(() => {
    if (filterData !== false) {
      setData(filterData);
    }
    console.log('cambio en context', context);
  }, [context, filterData]);
  if (!data) {
    return <div>Loading...</div>;
  }

  if (accountIdA === '' || accountIdB === '') {
    return (
      <div>
        <h1>Please select two accounts to compare</h1>
      </div>
    );
  }
  return (
    <>
      {categories.mostRetweeted && (
        <MostRetweetedItems period={period} />
      )}
      {categories.mostReplied && <MostRepliedItems  />}
      {categories.mostHashtags && <HtMostUsedItems />}
      {categories.mostMentioned && <MostMentionedItems />}
    </>
  );
};
