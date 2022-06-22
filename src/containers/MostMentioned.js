import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useFilterData from '../hooks/useFilterData'
import { MostMentionedItemCHANGE } from '../components/mostMentioned/MostMentionedItemCHANGE'
import { CreateChart } from '../helpers/createChart'
import useActiveNames from '../hooks/useActiveNames'
import MostMentionedPie from '../components/mostMentioned/MostMentionedPie'

MostMentionedItems.propTypes = {
  usuario: PropTypes.bool.isRequired,
  context: PropTypes.object.isRequired
}

export default function MostMentionedItems ({ usuario, context }) {
  const [innerData, setInnerData] = useState([])
  const [chartData, setChartData] = useState([])
  const accountsNames = useActiveNames(context)
  const { isPeriodComparisonActive } = context

  const [data] = useFilterData(context, 'most-mentioned')

  useEffect(() => {
    if (data.length > 0) {
      setInnerData(data)
      setChartData(CreateChart(data))
    }
  }, [data])

  return (
    <section className="closed" id="most-mentioned">
      { innerData.map((accountId, index) => {
        return (
          <section className="column" key={index}>
            <MostMentionedItemCHANGE
              newData={accountId}
              arrayBar={chartData[index]}
              comparisonView={isPeriodComparisonActive}
              title={accountsNames[index]}
            />

            <MostMentionedPie
              newData={accountId}
              title={accountsNames[index]}
              usuario={usuario}
            />
          </section>
        )
      })}
    </section>
  )
}
