import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import { HtMostUsedChart } from '../components/hashtags/HtMostUsedChart'
import HtMostUsedPie from '../components/hashtags/HtMostUsedPie'
import useActiveNames from '../hooks/useActiveNames'
import useFilterData from '../hooks/useFilterData'
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled'
import { PieContainerStyled } from '../styles/styledComponents/PieContainerStyled'

HtMostUsedItems.propTypes = {
  usuario: PropTypes.bool.isRequired,
  context: PropTypes.object.isRequired
}

export default function HtMostUsedItems ({ usuario, context }) {
  const [innerData, setInnerData] = useState([])
  const accountsNames = useActiveNames(context)
  // const { isPeriodComparisonActive } = context
  const [data] = useFilterData(context, 'ht-most-used')
  useEffect(() => {
    if (data.length > 0) {
      setInnerData(data)
    }
  }, [data])

  if (!innerData) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  if (innerData.length === 0) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>
  }

  return (
    <section className="closed" id="most-ht">
     <div className='ht'>
      <HtMostUsedChart newData={innerData} title={accountsNames} />
      <PieContainerStyled usuario={usuario}>
        {innerData.map((item, index) => (
          <HtMostUsedPie newData={item} key={index} title={accountsNames[index]} usuario={usuario} />
        ))}
      </PieContainerStyled>
      </div>

    </section>
  )
}
