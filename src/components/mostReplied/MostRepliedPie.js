import React from 'react'
import PropTypes from 'prop-types'
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { PieChartContainer } from '../../styles/styledComponents/PieContainerStyled'
import { colorsFromCategory } from '../../helpers/colorsFromCategory'
import useOptionsPie from '../../helpers/optionsPie'

ChartJS.register(Tooltip, Legend)

MostRepliedPie.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  usuario: PropTypes.bool.isRequired
}

function MostRepliedPie ({ newData, title, usuario }) {
  const repliedCategories = extractRepliedCategories(newData)

  const duplicates = filterDuplicates(repliedCategories)
  const optionsPie = useOptionsPie()
  const dataSolved = addDuplicates(duplicates)

  const colors = colorsFromCategory(dataSolved)

  const labels = dataSolved.map((item) => item.category)
  const data = dataSolved.map((item) => item.count)

  const dataChart = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors
      }
    ],
    legend: {
      display: false
    }
  }
  return (
    <>
    {data.length > 0 && <PieChartContainer usuario={usuario}>
      <h4>Categorias de más respuesta de: <br/> {title}</h4>
      <Doughnut
        data={dataChart}
        options={optionsPie}
      />
    </PieChartContainer>}
    </>
  )
}

export default MostRepliedPie

export function extractRepliedCategories (data) {
  const htCategories = []
  data.forEach((item) => {
    htCategories.push({
      category: item.most_replied_category_spa,
      count: item.tweets_number
    })
  })

  return htCategories
}

export function filterDuplicates (data) {
  const usersAccountCheck = []
  const arrayDuplicates = []
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!usersAccountCheck.includes(item.category)) {
      const duplicates = data.filter((item2) => {
        return item.category === item2.category
      })
      usersAccountCheck.push(item.category)
      arrayDuplicates.push(duplicates)
    }
  })

  return arrayDuplicates
}

export function addDuplicates (data) {
  const newArray = data.map((item) => {
    const itemCount = item.reduce((acc, item) => {
      return acc + item.count
    }, 0)
    return {
      category: item[0].category,
      count: itemCount
    }
  })
  return newArray
}
export function addDuplicates2 (data) {
  const newArray = data.map((item) => {
    return {
      category: item[0].category,
      count: item.count
    }
  })
  return newArray
}
