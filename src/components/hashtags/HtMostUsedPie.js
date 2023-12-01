import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { PieChartContainer } from '../../styles/styledComponents/PieContainerStyled'
import { colorsFromCategory } from '../../helpers/colorsFromCategory'
import useOptionsPie from '../../helpers/optionsPie'
import PropTypes from 'prop-types'

ChartJS.register(ArcElement, Tooltip, Legend)

HtMostUsedPie.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  usuario: PropTypes.bool.isRequired
}

function HtMostUsedPie ({ newData, title, usuario }) {
  const htCategories = extractHtCategories(newData)
  const optionsPie = useOptionsPie()
  const dataSolved = addDuplicates(filterDuplicates(htCategories))
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
    options: {
      title: {
        display: true,
        text: 'Mentions por hashtags'
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
  }
  return (
    <PieChartContainer usuario={usuario}>
      <h4>
        Categorias más usadas de: <br /> {title}
      </h4>
      {data.length > 0
        ? (
        <Pie data={dataChart} options={optionsPie} />
          )
        : (
        <h4>No hay data correspondiente al periodo seleccionado</h4>
          )}
    </PieChartContainer>
  )
}

export default HtMostUsedPie

export function extractHtCategories (data) {
  const htCategories = []
  data.forEach((item) => {
    htCategories.push({
      category: item.ht_category_spa,
      count: item.ht_mentions_number
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
