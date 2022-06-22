import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useFilterData from '../hooks/useFilterData'
import { MonthlyTweetsChart } from '../components/monthyTweets/MonthlyTweetsChart'

MonthlyTweetsItems.propTypes = {
  context: PropTypes.object.isRequired
}

export default function MonthlyTweetsItems ({ context }) {
  const [data] = useFilterData(context, 'monthly-tweets')

  const [innerData, setInnerData] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setInnerData(data)
    }
  }, [data])

  if (data.length === 0) {
    return <p> Loading... </p>
  }

  return (
    <section className="closed" id="monthy-tweets">
      <MonthlyTweetsChart newData={innerData} context={context} />
    </section>
  )
}
