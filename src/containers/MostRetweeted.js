import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useFilterData from '../hooks/useFilterData'
import { CreateChart } from '../helpers/createChart'
import useActiveNames from '../hooks/useActiveNames'
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled'

import MostRetweetedItemChange from '../components/mostRetweet/MostRetweetedItemCHANGE'
import MostRetwittedPie from '../components/mostRetweet/MostRetwittedPie'

MostRetweetedItems.propTypes = {
  context: PropTypes.object.isRequired,
  usuario: PropTypes.bool.isRequired
}

export default function MostRetweetedItems ({ context, usuario }) {
  const accountsNames = useActiveNames(context)
  const { isPeriodComparisonActive } = context
  // const [comparisonView, setComparisonView] = useState(false);
  const [chartData, setChartData] = useState([])
  const [data] = useFilterData(context, 'most-retweeted')

  let arraysBar = []

  useEffect(() => {
    if (data.length > 0) {
      arraysBar = CreateChart(data)

      setChartData(arraysBar)
    }
  }, [data])

  return (
    <>
    {chartData.length > 0

      ? <section className="closed" id="most-retweet">
      {data.map((dataAccount, index) => {
        return (
          <section className="column" key={index}>
              <MostRetweetedItemChange newData={dataAccount} arrayBar={chartData[index]} comparisonView={isPeriodComparisonActive} title={
                accountsNames[index]
              }/>
              <MostRetwittedPie newData={dataAccount} title={accountsNames[index]} usuario={usuario}/>
          </section>
        )
      })}
      {accountsNames.length > data.length && <>
      <EmptyDataStyled>
        No hay datos para mostrar
      </EmptyDataStyled>

      </>}
    </section>
      : ''
  }
  </>
  )
}
