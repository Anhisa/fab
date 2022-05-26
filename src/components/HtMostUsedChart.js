import React from "react";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
Filler,
BarElement,
} from "chart.js";
import {  Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const HtMostUsedChart = ({newData}) => {
console.log(newData);
  // const accountId = '19';
  // const periodId = '4';

  const labels = newData[0].map(item => item.ht)

  // const dataSet = newData.map(item => item.ht_mentions_number)
  const dataSets = createDatasets(newData);



const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
    x: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

  const data = {
      datasets: dataSets,
      labels,
    };

  return <Bar data={data} options={options} />;
}

function createDatasets(data){
  const datasets = [];
  let controlColor = 1
  data.forEach(item => {
    let color = controlColor === 1 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)'
    datasets.push({
      label: "Cuenta Oficial "+ item[0].official_account,
      data: item.map((item2) => parseInt(item2.ht_mentions_number)),
      tension: 0.3,
      borderColor: color,
      pointRadius: 6,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      backgroundColor: color,
    })
    controlColor++
  })
  return datasets; 
}