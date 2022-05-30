import React, { useEffect, useContext } from 'react';
import { TableContext } from '../context/TableContext';
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
import usePeriodComparison from '../hooks/periodComparison';
import { MonthyUserViewStyled } from '../styles/styledComponents/MonthyUserViewStyled';

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

  //  For some reason a whole array of arrays is returned
  if (newData[0][newData[0].length - 1].length > 5) {
    newData[0].pop();
  }

  let labels = newData[0]?.map((item) => item.month);

  labels = labels.map(
    (item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
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
      title: {
        display: true,
        text: 'Tweets mensuales',
        position: 'top',
        fullSize: true,
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  };

  const data = {
    datasets: dataSets,
    labels,
  };
  useEffect(() => {}, [newData]);

  return (
    <MonthyUserViewStyled>
      <Line data={data} options={options} />
    </MonthyUserViewStyled>
  );
};

function createDatasets(data) {
  const { isPeriodComparisonActive, periods } = usePeriodComparison();

  const datasets = [];
  let controlColor = 0;
  data.forEach((item) => {
    let color =
      controlColor === 0 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)';
    datasets.push({
      label: isPeriodComparisonActive
        ? periods[controlColor].name
        : item[0].official_account,
      data: item.map((item2) => parseInt(item2.tweets_number)),
      tension: 0.3,
      borderColor: 'black',
      pointRadius: 6,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      backgroundColor: color,
    });
    controlColor++;
  });
  return datasets;
}
