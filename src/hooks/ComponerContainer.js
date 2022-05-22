import { useContext, useEffect, useState } from 'react';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { TableContext } from '../context/TableContext';
import handleClick from '../helpers/HandleClick';
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled';
import { useFilterData } from './useFilterData';

export const ComponentContainer = () => {
  const context = useContext(TableContext);  
  const { categories, accounts } = context;
  const { accountIdA, accountIdB } = accounts;

  if (accountIdA === '' || accountIdB === '' || accountIdA === accountIdB) {
    return (
      <div>
        <h1>Please select two different accounts to compare</h1>
      </div>
    );
  }

  return (
    <>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <button name='monthy-tweets' onClick={handleClick}>Monthy tweets</button>
         
            <MonthlyTweetsItems />
          
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted  && (
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
