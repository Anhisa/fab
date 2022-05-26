import React, { useEffect } from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const MonthlyTweetsChart = ({ newData }) => {
  //
  //   const labels = newData.map(item =>  new Date(item.month).toLocaleString('es-ES', { month: 'long' , timeZone: 'UTC' }))
  console.log(newData);

  let labels = newData[0]?.map((item) => item.month);

  labels = labels.map(
    (item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'long',
        timeZone: 'UTC',
      }) +
      ' ' +
      new Date(item).getUTCFullYear()
  );

  const dataSets = createDatasets(newData);

  const accountInfo = [];
  const account = newData[0];

  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
  }

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
  useEffect(() => {}, [newData]);

  return <Line data={data} options={options} />;
};

function createDatasets(data) {
  const datasets = [];
  let controlColor = 1;
  data.forEach((item) => {
    let color =
      controlColor === 1 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)';
    datasets.push({
      label: item[0].official_account,
      data: item.map((item2) => parseInt(item2.tweets_number)),
      tension: 0.3,
      borderColor: color,
      pointRadius: 6,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      backgroundColor: color,
    });
    controlColor++;
  });
  return datasets;
}
