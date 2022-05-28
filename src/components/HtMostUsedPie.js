

import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from '../styles/styledComponents/PieContainerStyled';

ChartJS.register(ArcElement, Tooltip, Legend);

const HtMostUsedPie = ({newData, title}) => {
  const htCategories = extractHtCategories(newData);
  const duplicates = filterDuplicates(htCategories);
 
  let dataSolved = addDuplicates(duplicates);
  let labels = dataSolved.map(item => item.category) 
  let data = dataSolved.map(item => item.count)
 
   
       
  let dataChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2F6B84',
          '#F6A6EB',
          '#CCCE56',
          '#666384',


        ],
        


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
    <PieChartContainer>
    <h1>{title}</h1>
    <Pie 
      data = {dataChart}
      options={{
        title: {
          display: true,
          text: 'Mentions por hashtags',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'top'
        }
      }}
    />
    </PieChartContainer>
  )
}

export default HtMostUsedPie



function extractHtCategories(data){

  const htCategories = [];  
  data.forEach(item => {
    htCategories.push({
      category: item.ht_category_spa,
      count: item.ht_mentions_number,
    });
  });

  return htCategories;
}

function filterDuplicates(data) {
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

function addDuplicates (data){
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