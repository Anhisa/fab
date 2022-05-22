import { useContext, useEffect } from 'react';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { TableContext } from '../context/TableContext';
import handleClick from '../helpers/HandleClick';
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled';


export const ComponentContainer = ({context}) => {

  const { categories, accounts } = context;
  const { accountIdA, accountIdB } = accounts;

  useEffect(() => {} , [accountIdA, accountIdB]);
  if (accountIdA === '' || accountIdB === '' || accountIdA === accountIdB) {
    return (
      <div>
        <h1>Please select two different accounts to compare</h1>
      </div>
    );
  }

  return (
    <>
     <TableContext.Provider value={context}>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <button name="monthy-tweets" onClick={handleClick}>
            Monthy tweets
          </button>

          <MonthlyTweetsItems period={context.period}/>
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled>
          <button name="most-retweet" onClick={handleClick}>
            Most retweeted
          </button>
          <MostRetweetedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <button name="most-replied" onClick={handleClick}>
            Most Replied
          </button>

          <MostRepliedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <button name="most-ht" onClick={handleClick}>
            Most used hashtags
          </button>

          <HtMostUsedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <button name="most-mentioned" onClick={handleClick}>
            Most mentioned
          </button>

          <MostMentionedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      </TableContext.Provider>
    </>
  );
};
