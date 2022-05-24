import { useContext, useEffect } from 'react';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { TableContext } from '../context/TableContext';
import handleClick from '../helpers/HandleClick';
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled';
import { StyledFilterButton } from '../styles/styledComponents/StyledFilterButton';


export const ComponentContainer = ({context}) => {

  const { categories, accounts, periodComparison } = context;
  const { accountIdA, accountIdB } = accounts;
  const {periodA, periodB} = periodComparison

  useEffect(() => {
    console.log('ComponentContainer useEffect');    
  } , [accountIdA, accountIdB, periodA, periodB]);
  if(periodA === periodB){
    if (accountIdA === accountIdB ) {
      return (
        <div>
          <h1>Please select two different accounts to compare</h1>
        </div>
      );
    }
  }

  return (
    <>
     <TableContext.Provider value={context}>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <StyledFilterButton name="monthy-tweets" onClick={handleClick}>
            Monthy tweets
          </StyledFilterButton>

          <MonthlyTweetsItems period={context.period}/>
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-retweet" onClick={handleClick}>
            Most retweeted
          </StyledFilterButton>
          <MostRetweetedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-replied" onClick={handleClick}>
            Most Replied
          </StyledFilterButton>

          <MostRepliedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-ht" onClick={handleClick}>
            Most used hashtags
          </StyledFilterButton>

          <HtMostUsedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-mentioned" onClick={handleClick}>
            Most mentioned
          </StyledFilterButton>

          <MostMentionedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      </TableContext.Provider>
    </>
  );
};
