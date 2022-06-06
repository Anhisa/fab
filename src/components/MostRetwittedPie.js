

import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
import { PieChartContainer } from '../styles/styledComponents/PieContainerStyled';
import { colorsFromCategory } from '../helpers/colorsFromCategory';

ChartJS.register(ArcElement, Tooltip, Legend);

const MostRetwittedPie = ({newData, title, setCategories, usuario}) => {
  const repliedCategories = extractRetwittedCategories(newData);
  
  const duplicates = filterDuplicates(repliedCategories);


  
  
  let dataSolved = addDuplicates(duplicates);
  
  let colors = colorsFromCategory(dataSolved);
  
  let labels = dataSolved.map(item => item.category) 
  let data = dataSolved.map(item => item.count)
 


  let dataChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,       


      }
    ],
    options: {
      title: {
        display: true,
        text: 'Mentions por hashtags'
      },
      legend: {
        display: true,
        position: 'top',
      }
    }
    ,



  }
  return (
    <PieChartContainer usuario={usuario}>
    <h4>{title}</h4>
    <Doughnut
      data = {dataChart}
      options={{
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 10,
              font: {
                size: 20,
                weight: 'bold'

              },
              padding: 15,
              pointStyle: 'rectRounded',
              usePointStyle: true,

              
          }
        }
      }
      }}
    />
    </PieChartContainer>
  )
}

export default MostRetwittedPie



export function extractRetwittedCategories(data){

  const htCategories = [];
  data.forEach(item => {
    htCategories.push({
      category: item.most_retweeted_category_spa,
      count: item.tweets_number,
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

export function addDuplicates (data){
let newArray = data.map(item => {
  let itemCount = item.reduce((acc, item) => {
    return acc + item.count;
  },0)
  return {
    category: item[0].category,
    count: itemCount
  }
})
return newArray;
}
export function addDuplicates2 (data){
  let newArray = data.map(item => {
    return {
      category: item[0].category,
      count: item.count
    }
  })
  return newArray;
  }
