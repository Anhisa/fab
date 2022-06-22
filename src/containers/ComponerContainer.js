import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import ButtonToogle from '../components/ButtonToogle'
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled'

const HtMostUsedItems = lazy(() => import('./HtMostUsed'))
const MonthlyTweetsItems = lazy(() => import('./MonthlyTweets'))
const MostMentionedItems = lazy(() => import('./MostMentioned'))
const MostRepliedItems = lazy(() => import('./MostReplied'))
const MostRetweetedItems = lazy(() => import('./MostRetweeted'))

ComponentContainer.propTypes = {
  context: PropTypes.object.isRequired,
  usuario: PropTypes.bool.isRequired
}

export default function ComponentContainer ({ context, usuario }) {
  const { categories, accounts, periodComparison, isPeriodComparisonActive } =
    context
  const { accountIdA, accountIdB } = accounts
  const { periodA, periodB } = periodComparison

  if (isPeriodComparisonActive) {
    if (periodA.id === periodB.id) {
      return []
    } else if (periodA.id > periodB.id) {
      return []
    }
  } else if (
    accountIdA.id === '' ||
    accountIdB.id === '' ||
    accountIdA.id === accountIdB.id
  ) {
    return []
  }

  return (
    <>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <ButtonToogle name="monthy-tweets">
            {isPeriodComparisonActive
              ? ` Número de tweets por mes  del periodo ${periodA.name} al ${periodB.name}`
              : ` Número de tweets por mes de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <Suspense fallback={<div>Loading...</div>}>
          <MonthlyTweetsItems context={context} />
          </Suspense>
        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled className='comparative'>
          <ButtonToogle name="most-retweet">
            {isPeriodComparisonActive
              ? `Usuarios más retuiteados del periodo ${periodA.name} al ${periodB.name}`
              : `Usuarios más retuiteados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <Suspense fallback={<div>Loading...</div>}>
          <MostRetweetedItems context={context} usuario={usuario} />
          </Suspense>
        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-replied">
            {isPeriodComparisonActive
              ? `Usuarios que más han recibido respuesta del periodo ${periodA.name} al ${periodB.name}`
              : `Usuarios que más han recibido respuesta de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <Suspense fallback={<div>Loading...</div>}>
          <MostRepliedItems usuario={usuario} context={context} />
          </Suspense>
        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-ht">
            {isPeriodComparisonActive
              ? `Hashtags más usados del periodo ${periodA.name} al ${periodB.name}`
              : `Hashtags más usados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <Suspense fallback={<div>Loading...</div>}>
          <HtMostUsedItems
            period={context.period}
            usuario={usuario}
            context={context}
          />
          </Suspense>
        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-mentioned">
            {isPeriodComparisonActive
              ? `Usuarios más mencionados del periodo ${periodA.name} al ${periodB.name}`
              : `Usuarios más mencionados de las cuentas ${accountIdA.name} y ${accountIdB.name}`}
          </ButtonToogle>
          <Suspense fallback={<div>Loading...</div>}>
          <MostMentionedItems usuario={usuario} context={context} />
          </Suspense>
        </CollapsableTableStyled>
      )}
    </>
  )
};
