import React from 'react';
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
import { useGetData } from '../hooks/useGetData';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedChart = ({ periodId, accountId }) => {
  const response = useGetData(api);
  const items = response.data;
  //console.log(periodId, 'mostRetweetedChart');

  const labels = items
    .filter(
      (item) =>
        item.official_account_id === accountId &&
        // && item.period_id === periodId
        parseInt(item.period_id) >= periodId.startDate &&
        parseInt(item.period_id) <= periodId.endDate
    )
    .map((item) => item.user_account);
 //console.log(labels);
  const dataSet = items
    .filter(
      (item) =>
        item.official_account_id === accountId &&
        // && item.period_id === periodId
        parseInt(item.period_id) >= periodId.startDate &&
        parseInt(item.period_id) <= periodId.endDate
    )
    .map((item) => parseInt(item.tweets_number));
  // console.log(labels);
//  console.log(dataSet);

  const accountInfo = [];
  const account = items
    .filter(
      (item) =>
        item.official_account_id === accountId &&
        parseInt(item.period_id) >= periodId.startDate &&
        parseInt(item.period_id) <= periodId.endDate
    )
    .find((item) => item.official_account_id === accountId);
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

  return <Line data={data} options={options} />;
};
