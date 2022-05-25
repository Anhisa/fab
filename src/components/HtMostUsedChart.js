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


export const HtMostUsedChart = ({newData, periodId}) => {

  // const accountId = '19';
  // const periodId = '4';

  const labels = newData.map(item => item.ht)

  const dataSet = newData.map(item => item.ht_mentions_number)



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
          label: "Cuenta Oficial "+ newData[0].official_account,
          data: dataSet,
          tension: 0.3,
          borderColor: "#ffce21",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "#ffce21",
        },
      ],
      labels,
    };

  return <Bar data={data} options={options} />;
}
