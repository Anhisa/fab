import React, { useCallback } from 'react';

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
import usePeriodComparison from '../../hooks/periodComparison';
import monthyHelper from '../../helpers/monthyHelper';
import { dataReducer } from '../../helpers/dataReducer';

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

export const MonthlyTweetsChart = ({ newData, context }) => {
  if (!newData) {
    return null;
  }
  

  let [dataSets, labels] = useCallback(createDatasets(newData, context), [newData]);

  const accountInfo = [];
  const account = newData[0];

  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
  }

  const options = {
    fill: true,
    responsive: true,
    interaction: {
      mode: 'index',
      axis: 'x',
    },
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


function createDatasets(data, context) {
  const {periodComparison, isPeriodComparisonActive} = context;
  if(context.userOfficialName){

  }
  let data2 = { ...data };
  
  let newLabels = [];
  let test;
  
  if (isPeriodComparisonActive) {
    
    const periods = [periodComparison.periodA, periodComparison.periodB];
    let [newData, labels] = dataReducer(data, periods);
 
    newLabels = labels


    newLabels = newLabels.map((item) =>
      new Date(item).toLocaleString('es-ES', {
        month: 'short',
        timeZone: 'UTC',
      })
    );

    // newLabels = [...new Set(newLabels)];
    const datasets = [];
    let controlColor = 0;

    Object.values(newData).forEach((item) => {
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
        pointBackgroundColor: color,
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
        pointBackgroundColor: color,
        backgroundColor: color,
      });
      controlColor++;
    });
    let labels = data2[0]?.map((item) => item.month);
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
