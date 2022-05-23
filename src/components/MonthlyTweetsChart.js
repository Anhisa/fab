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
  let labels = newData.map((item) => item.month);
  labels = labels.map(
    (item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'long',
        timeZone: 'UTC',
      }) +
      ' ' +
      new Date(item).getUTCFullYear()
  );

  const dataSet = newData.map((item) => parseInt(item.tweets_number));
  

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
    datasets: [
      {
        label: 'Cuenta Oficial ' + accountInfo[0],
        data: dataSet,
        tension: 0.3,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 6,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
      },
    ],
    labels,
  };
  useEffect(()=> {

  }, [newData]);

  return <Line data={data} options={options} />;
};
