import React from 'react'
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
// import { useGetData } from '../hooks/useGetData';

// const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';
MostRetweetedChart.propTypes = {
  newData: PropTypes.array.isRequired
}

export function MostRetweetedChart ({ newData }) {
  // const response = useGetData(api);
  const labels = newData.map((item) => item.user_account)
  const dataSet = newData.map((item) => parseInt(item.tweets_number))
  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0
      },
      x: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true
      }
    }
  }

  const data = {
    datasets: [
      {
        label: 'Cuenta Oficial ' + '',
        data: dataSet,
        tension: 0.3,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 6,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)'
      }
    ],
    labels
  }

  return <Line data={data} options={options} />
}
