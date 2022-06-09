import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from '../../styles/styledComponents/PieContainerStyled';
import { colorsFromCategory } from '../../helpers/colorsFromCategory';


ChartJS.register(ArcElement, Tooltip, Legend);

const HtMostUsedPie = ({ newData, title, setCategories, usuario }) => {
  const htCategories = extractHtCategories(newData);
  const duplicates = filterDuplicates(htCategories);

  let dataSolved = addDuplicates(duplicates);

  let colors = colorsFromCategory(dataSolved);

  let labels = dataSolved.map((item) => item.category);
  let data = dataSolved.map((item) => item.count);

  let dataChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
      },
    ],
    options: {
      title: {
        display: true,
        text: 'Mentions por hashtags',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  return (
    <PieChartContainer usuario={usuario}>
      <h4>Categorias más usadas de: <br/> {title}</h4>
      <Pie
        data={dataChart}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 10,
                font: {
                  size: 12,
                  weight: 'bold',
                },
                padding: 15,
                pointStyle: 'rectRounded',
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </PieChartContainer>
  );
};

export default HtMostUsedPie;

export function extractHtCategories(data) {
  const htCategories = [];
  data.forEach((item) => {
    htCategories.push({
      category: item.ht_category_spa,
      count: item.ht_mentions_number,
    });
  });

  return htCategories;
}

export function filterDuplicates(data) {
  let usersAccountCheck = [];
  let arrayDuplicates = [];
  // Devuelve un array con los elementos duplicados
  data.forEach((item) => {
    if (!usersAccountCheck.includes(item.category)) {
      let duplicates = data.filter((item2) => {
        return item.category === item2.category;
      });
      usersAccountCheck.push(item.category);
      arrayDuplicates.push(duplicates);
    }
  });

  return arrayDuplicates;
}

export function addDuplicates(data) {
  let newArray = data.map((item) => {
    let itemCount = item.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    return {
      category: item[0].category,
      count: itemCount,
    };
  });
  return newArray;
}
export function addDuplicates2(data) {
  let newArray = data.map((item) => {
    return {
      category: item[0].category,
      count: item.count,
    };
  });
  return newArray;
}
