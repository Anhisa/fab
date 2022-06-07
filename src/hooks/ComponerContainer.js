import { useContext, useEffect } from 'react';
import ButtonToogle from '../components/ButtonToogle';
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



  useEffect(() => {
    console.log('ComponentContainer useEffect');

  } , [accountIdA, accountIdB, periodA]);
  if (accountIdA.id === '' || accountIdB.id === '' || accountIdA.id === accountIdB.id){
  // alert('Seleccione dos cuentas diferentes');
     console.log('Please select two different accounts and periods')
   return []
  }

  return (
    <>
     <TableContext.Provider value={context}>
      {categories.monthlyTweets &&
      !isPeriodComparisonActive ? (
        <CollapsableTableStyled>
          <ButtonToogle name="monthy-tweets">

            {isPeriodComparisonActive ? ` Número de tweets por mes  del periodo ${periodA.name} al ${periodB.name}` : ` Número de tweets por mes de las cuentas ${accountIdA.name} y ${accountIdB.name}`}

          </ButtonToogle>

          <MonthlyTweetsItems period={context.period}/>
        </CollapsableTableStyled>
      ): ''}
      {categories.mostRetweeted && (
        <CollapsableTableStyled  >
          <ButtonToogle name="most-retweet" >

            {isPeriodComparisonActive ? `Usuarios más retuiteados del periodo ${periodA.name} al ${periodB.name}` : `Usuarios más retuiteados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <MostRetweetedItems period={context.period} context={context} />
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled >
          <ButtonToogle name="most-replied">

            {isPeriodComparisonActive ? `Usuarios que más han recibido respuesta del periodo ${periodA.name} al ${periodB.name}` : `Usuarios que más han recibido respuesta de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>

          <MostRepliedItems period={context.period}  />
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-ht">

            {isPeriodComparisonActive ? `Hashtags más usados del periodo ${periodA.name} al ${periodB.name}` : `Hashtags más usados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>

          <HtMostUsedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-mentioned">
          {isPeriodComparisonActive ? `Usuarios más mencionados del periodo ${periodA.name} al ${periodB.name}` : `Usuarios más mencionados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>

          <MostMentionedItems  period={context.period} />
        </CollapsableTableStyled>
      )}
      </TableContext.Provider>
    </>
  );
};
