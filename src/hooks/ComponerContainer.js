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
  
 

  useEffect(() => {} , [accountIdA, accountIdB, periodA]);
  if (accountIdA.id === '' || accountIdB.id === '' || accountIdA.id === accountIdB.id) {
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
           
            {isPeriodComparisonActive ? ` Número de tweets por mes  del periodo ${periodA.name} al ${periodB.name}` : ` Número de tweets por mes de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
            
          </StyledFilterButton>

          <MonthlyTweetsItems period={context.period}/>
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-retweet" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Usuarios más retuiteados del periodo ${periodA.name} al ${periodB.name}` : `Usuarios más retuiteados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </StyledFilterButton>
          <MostRetweetedItems period={context.period} context={context} />
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-replied" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Usuarios que más han recibido respuesta del periodo ${periodA.name} al ${periodB.name}` : `Usuarios que más han recibido respuesta de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </StyledFilterButton>

          <MostRepliedItems period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-ht" onClick={handleClick}>
            
            {isPeriodComparisonActive ? `Hashtags más usados del periodo ${periodA.name} al ${periodB.name}` : `Hashtags más usados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </StyledFilterButton>

          <HtMostUsedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <StyledFilterButton name="most-mentioned" onClick={handleClick}>
          {isPeriodComparisonActive ? `Usuarios más mencionados del periodo ${periodA.name} al ${periodB.name}` : `Usuarios más mencionados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </StyledFilterButton>

          <MostMentionedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      </TableContext.Provider>
    </>
  );
};
