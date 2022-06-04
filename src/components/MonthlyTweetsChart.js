import React, { useEffect, useContext, useCallback } from 'react';
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

import monthyHelper from '../helpers/monthyHelper';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';

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
  if (!newData) {
    return null;
  }

  // let labels = newData[0]?.map((item) => item.month)
  // console.log('labels', labels);

  let [dataSets, labels] = useCallback(createDatasets(newData), [newData]);

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
        text: 'Número de Tweets mensuales',
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

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

function createDatasets(data) {
  const { isPeriodComparisonActive, periods } = usePeriodComparison();
  let data2 = { ...data };
  let newLabels = [];
  let test;

  if (isPeriodComparisonActive) {
    if (periods[0].id < periods[1].id) {
      test = monthyHelper(data, periods);

      data2[0] = test[0];
      data2[1] = test[1];
    } else {
      let temp = periods[0];
      periods[0] = periods[1];
      periods[1] = temp;

      let tempData = data2[0];
      data2[0] = data2[1];
      data2[1] = tempData;

      data2[0] = test[0];
    }
    if (
      (periods[0].id === 1 || periods[0].id === 4) &&
      (periods[1].id === 2 || periods[1].id === 5)
    ) {
      data2[1] = data2[0].concat(data2[1]);
    }
    if (
      (periods[0].id === 2 || periods[0].id === 5) &&
      (periods[1].id === 3 || periods[1].id === 6)
    ) {
      data2[0] = data2[1].slice(0, 6).concat(data2[0]);
    }
    // if((periods[0].id === 1 ) && (periods[1].id === 6 )){
    //   data2[0] = data2[0].concat(data2[1].slice(6,12))
    // }

    if (!data2[1]) {
      newLabels = data2[0].map((item) => item.month);
    } else {
      newLabels = data2[1].map((item) => item.month);
    }

    //uniques with Set
    newLabels = newLabels.map((item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
        timeZone: 'UTC',
      })
    );

    newLabels = [...new Set(newLabels)];
    const datasets = [];
    let controlColor = 0;

    Object.values(data2).forEach((item) => {
      if (item === undefined) {
        return;
      }
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

    return [datasets, newLabels];
  } else {
    // para las cuentas
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
    let labels = data[0]?.map((item) => item.month);
    labels = labels.map((item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
        timeZone: 'UTC',
        year: 'numeric',
        
      })
    );
    return [datasets, labels];
  }
}
