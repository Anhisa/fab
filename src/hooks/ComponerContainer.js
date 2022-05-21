import { useContext, useEffect, useState } from 'react';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { TableContext } from '../context/TableContext';
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled';
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
  function handleClick(e) {   
    console.log(e.target.name);
    const element = document.getElementById(e.target.name);
    if (element.classList.contains('closed')) {
      element.classList.remove('closed');
      element.classList.add('open');
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      element.classList.add('closed');
      element.classList.remove('open');
    }
  }
  return (
    <>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <button name='monthy-tweets' onClick={handleClick}>Monthy tweets</button>
         
            <MonthlyTweetsItems />
          
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && categories.monthlyTweets && (
        <CollapsableTableStyled>
          <button name='most-retweet' onClick={handleClick}>Most retweeted</button>          
            <MostRetweetedItems />
          
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <button name='most-replied' onClick={handleClick}>Most Replied</button>
        
            <MostRepliedItems />
  
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <button name='most-ht' onClick={handleClick}>Most used hashtags</button>
          
            <HtMostUsedItems />
          
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <button name='most-mentioned' onClick={handleClick}>Most mentioned</button>
          
            <MostMentionedItems />
          
        </CollapsableTableStyled>
      )}
    </>
  );
};
