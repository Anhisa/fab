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

  const { categories, accounts, periodComparison,isPeriodComparisonActive  } = context;
  const { accountIdA, accountIdB } = accounts;
  const {periodA, periodB} = periodComparison
  console.log(periodA, periodB)

  useEffect(() => {} , [accountIdA, accountIdB, periodA]);
  if (accountIdA === '' || accountIdB === '' || accountIdA === accountIdB) {
    return (
      []
    );
  }

  return (
    <>
     <TableContext.Provider value={context}>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <StyledFilterButton name="monthy-tweets" onClick={handleClick}>
           
            {isPeriodComparisonActive ? ` Monthy tweets  del periodo ${periodA.name} al ${periodB.name}` : ` Monthy tweets  de las cuentas ${accountIdA} y ${accountIdB}`}
            
          </StyledFilterButton>

          <MonthlyTweetsItems period={context.period}/>
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-retweet" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Most retweeted del periodo ${periodA.name} al ${periodB.name}` : `Most retweeted de las cuentas ${accountIdA} y ${accountIdB}`}
          </StyledFilterButton>
          <MostRetweetedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-replied" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Most Replied del periodo ${periodA.name} al ${periodB.name}` : `Most Replied de las cuentas ${accountIdA} y ${accountIdB}`}
          </StyledFilterButton>

          <MostRepliedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-ht" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Most used hashtags del periodo ${periodA.name} al ${periodB.name}` : `Most used hashtags de las cuentas ${accountIdA} y ${accountIdB}`}
          </StyledFilterButton>

          <HtMostUsedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-mentioned" onClick={handleClick}>
          {isPeriodComparisonActive ? `Usuarios más mencionados del periodo ${periodA.name} al ${periodB.name}` : `Usuarios más mencionados de las cuentas ${accountIdA} y ${accountIdB}`}
          </StyledFilterButton>

          <MostMentionedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      </TableContext.Provider>
    </>
  );
};
