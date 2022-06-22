import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import useActiveNames from '../hooks/useActiveNames'
import { CreateChart } from '../helpers/createChart'
import useFilterData from '../hooks/useFilterData'
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable'
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled'
import { MostRepliedItemCHANGE } from '../components/mostReplied/MostRepliedItemCHANGE'
import MostRepliedPie from '../components/mostReplied/MostRepliedPie'

MostRepliedItems.propTypes = {
  usuario: PropTypes.bool.isRequired,
  context: PropTypes.object.isRequired
}

export default function MostRepliedItems ({ usuario, context }) {
  const [data] = useFilterData(context, 'most-replied')
  const accountsNames = useActiveNames(context)
  const { isPeriodComparisonActive } = context

  const [innerData, setInnerData] = useState(data)

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setInnerData(data)
      setChartData(CreateChart(data))
    }
  }, [data])

  if (!data) {
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
  if (data.length === 0) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>
  }

  return (
    <>
    <section className="closed" id="most-replied">
      {Object.values(innerData).map((accountId, index) => {
        return (

          <section className="column" key={index}>

              <MostRepliedItemCHANGE
                newData={accountId}
                arrayBar={chartData[index]}
                comparisonView={isPeriodComparisonActive}
                title={accountsNames[index]}
              />

              <MostRepliedPie newData={accountId} title={accountsNames[index]} usuario={usuario} />

          </section>

        )
      })}
      {isPeriodComparisonActive &&
     Object.values(innerData).length === 1 && (
      <StyledDataTable className="dataTable">
        <div className="column">
          <h1>No hay datos para mostrar</h1>
        </div>
      </StyledDataTable>
      )}

    </section>

    </>
  )
}
