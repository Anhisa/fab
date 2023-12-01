import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import { extractHtCategories } from './HtMostUsedPie'
import { colorsFromCategory } from '../../helpers/colorsFromCategory'
import { useTheme } from 'styled-components'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

HtMostUsedChart.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired
}

export function HtMostUsedChart ({ newData, title }) {
  let dataSets = createDatasets(newData, title)
  dataSets = sortLongestArray(dataSets)
  const theme = useTheme()
  const labels = createLabels(newData)

  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
        ticks: {
          color: theme.text,
          font: {
            size: 15
          }
        }
      },
      x: {
        min: 0,
        ticks: {
          color: theme.text,
          font: {
            size: 15
          }
        }
      }
    },
    interaction: {
      mode: 'index',
      axis: 'x',
      position: 'nearest'
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 10,
          color: theme.text,
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Menciones por hashtags',
        color: theme.text,
        font: {
          size: 20,
          weight: 'bold'
        }
      },
      tooltip: {
        enabled: true
      }
    }
  }

  const data = {
    datasets: dataSets,
    labels
  }

  return <Bar data={data} options={options} />
}

function createDatasets (data, title) {
  const datasets = []
  let controlColor = 0
  data.forEach((item) => {
    const htCategories = extractHtCategories(item)
    const colors = colorsFromCategory(htCategories)

    const color =
      controlColor === 0 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)'

    datasets.push({
      label: title[controlColor],
      data: item.map((item2) => parseInt(item2.ht_mentions_number)),
      tension: 0.3,
      borderColor: color,
      pointRadius: 6,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      backgroundColor: colors
    })
    controlColor++
  })

  return datasets
}
// We have to check which array has the longest length
function createLabels (data) {
  let labels = []
  data.forEach((item) => {
    labels.push(item.map((item2) => item2.ht))
  })
  if (labels.length > 1) {
    const labels1 = labels[0]
    const labels2 = labels[1]
    const isOneLongest = labels1.length > labels2.length
    labels = isOneLongest
      ? labels1.map((item, index) => {
        const isLabelUndefined = labels2[index] === undefined
        return isLabelUndefined ? item : item + ' - ' + labels2[index]
      })
      : labels2.map((item, index) => {
        const isLabelUndefined = labels1[index] === undefined
        return isLabelUndefined ? item : item + ' - ' + labels1[index]
      })
    return labels
  }
  return labels[0]
}
function sortLongestArray (data) {
  const newArray = []
  if (data.length > 1) {
    if (data[0].length > data[1].length) {
      newArray.push(data[0])
      newArray.push(data[1])
    } else {
      newArray.push(data[1])
      newArray.push(data[0])
    }
  } else {
    return data
  }
  return newArray
}
