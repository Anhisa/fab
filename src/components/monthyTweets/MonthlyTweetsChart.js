import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { dataReducer } from '../../helpers/dataReducer'
import { useTheme } from 'styled-components'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)
MonthlyTweetsChart.propTypes = {
  newData: PropTypes.array.isRequired,
  context: PropTypes.object.isRequired
}

export function MonthlyTweetsChart ({ newData, context }) {
  if (newData.length === 0) {
    return null
  }
  const [dataSets, labels] = useCallback(createDatasets(newData, context), [
    newData
  ])
  const theme = useTheme()
  const accountInfo = []
  const account = newData[0]

  if (account) {
    accountInfo.push(account?.official_account)
    accountInfo.push(account?.period_id)
  }

  const options = {
    //   animations: {
    //   tension: {
    //     duration: 5000,
    //     easing: 'linear',
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },
    fill: true,

    interaction: {
      mode: 'index',
      axis: 'x',
      position: 'nearest'
    },

    scales: {
      y: {
        min: 0,
        ticks: {
          color: theme.text
        }
      },
      x: {
        min: 0,
        ticks: {
          color: theme.text
        }
      }
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
      tooltip: {
        bodyColor: theme.text,
        titleFontSize: 20,
        titleFontStyle: 'bold',
        titleFontColor: theme.text,
        titleMarginBottom: 10,
        titleFontFamily: 'Roboto',
        titleFontWeight: 'bold'
      },

      title: {
        display: true,
        text: 'Número de Tweets mensuales',
        position: 'top',
        fullSize: true,
        color: theme.text,

        font: {
          size: 20,
          weight: 'bold'
        }
      }
    }
  }

  const data = {
    datasets: dataSets,
    labels
  }

  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}

function createDatasets (data, context) {
  const { periodComparison, isPeriodComparisonActive } = context
  const data2 = { ...data }
  let newLabels = []

  if (isPeriodComparisonActive) {
    const periods = [periodComparison.periodA, periodComparison.periodB]
    const [newData, labels] = dataReducer(data, periods)

    newLabels = labels

    newLabels = newLabels.map((item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
        timeZone: 'UTC'
      })
    )

    const datasets = []
    let controlColor = 0

    Object.values(newData).forEach((item) => {
      if (item === undefined) {
        return
      }
      const color =
        controlColor === 0 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)'
      datasets.push({
        label: isPeriodComparisonActive
          ? periods[controlColor].name
          : item[0].official_account,
        data: item.map((item2) => parseInt(item2.tweets_number)),
        tension: 0.3,
        borderColor: 'black',
        pointRadius: 6,
        pointBackgroundColor: color,
        backgroundColor: color
      })
      controlColor++
    })

    return [datasets, newLabels]
  } else {
    // para las cuentas
    // const periods = [periodComparison.periodA, periodComparison.periodB]
    const datasets = []
    let controlColor = 0
    data.forEach((item) => {
      const color =
        controlColor === 0 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)'
      datasets.push({
        label: item[0].official_account,
        data: item.map((item2) => parseInt(item2.tweets_number)),
        tension: 0.3,
        borderColor: 'black',
        pointRadius: 6,
        pointBackgroundColor: color,
        backgroundColor: color
      })
      controlColor++
    })
    let labels = data2[0]?.map((item) => item.month)
    labels = labels.map((item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
        timeZone: 'UTC',
        year: 'numeric'
      })
    )
    return [datasets, labels]
  }
}
