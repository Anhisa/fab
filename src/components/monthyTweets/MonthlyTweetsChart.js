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

import { dataReducer } from '../../helpers/dataReducer';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();
  const accountInfo = [];
  const account = newData[0];

  if (account) {
    accountInfo.push(account?.official_account);
    accountInfo.push(account?.period_id);
  }

  const options = {
    fill: true,
   
    interaction: {
      mode: 'index',
      axis: 'x',
      position: 'nearest'
    },
   
    scales: {
      y: {
        min: 0,
      },
      x: {
        min: 0,
      },
      ticks: {
        beginAtZero: true,
        fontColor: theme.text,
        fontSize: 12,
        fontFamily: 'Roboto',
      }
      

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
        color: theme.text,
       
        font: {
          size: 20,
          weight: 'bold', 

        },
      },
      tooltip :{         
          bodyColor: theme.text        
      }
    },
  };

  const data = {
    datasets: dataSets,
    labels,
  };

  return (
    <>
      <Line data={data} options={
        {
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
                color: theme.text,
              }             
              
            },
            x: {
              min: 0,
              ticks: {
                color: theme.text,
              }             
            },
            
       
            
      
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                boxWidth: 10,
                color: theme.text,
                font: {
                  size: 12,
                  weight: 'bold',
                }
                
              }
            },
            tooltip:{
              bodyColor: theme.text,
              titleFontSize: 20,
              titleFontStyle: 'bold',
              titleFontColor: theme.text,
              titleMarginBottom: 10,
              titleFontFamily: 'Roboto',
              titleFontWeight: 'bold',
            },

            title: {
              display: true,
              text: 'Número de Tweets mensuales',
              position: 'top',
              fullSize: true,
              color: theme.text,
             
              font: {
                size: 20,
                weight: 'bold',                
      
              },
            },
          
          },
        }
      }




      />
    </>
  );
};


function createDatasets(data, context) {
  const {periodComparison, isPeriodComparisonActive} = context;
  if(context.userOfficialName){

  }
  let data2 = { ...data };
  
  let newLabels = [];

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
