

import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from '../styles/styledComponents/PieContainerStyled';
import { colorsFromCategory } from '../helpers/colorsFromCategory';

ChartJS.register(ArcElement, Tooltip, Legend);

const MostMentionedPie = ({newData, title, setCategories, usuario}) => {
  console.log('newDa',newData)
  const repliedCategories = extractMentionedCategories(newData);
  console.log(repliedCategories);
  
  const duplicates = filterDuplicates(repliedCategories);


  
  
  let dataSolved = addDuplicates(duplicates);
  console.log(dataSolved); 
  let colors = colorsFromCategory(dataSolved);
  console.log('pie Colors', colors)
  let labels = dataSolved.map(item => item.category) 
  let data = dataSolved.map(item => item.count)
  console.log('pie Data', data)
 


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
    <h4>Categorias más usadas de: {title}</h4>
    <Pie
      data = {dataChart}
      options={{
        title: {
          display: true,
          text: 'Menciones por hashtags',
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

export default MostMentionedPie



export function extractMentionedCategories(data){

  const htCategories = [];
  data.forEach(item => {
    htCategories.push({
      category: item.most_mentioned_category_spa,
      count: item.mentions_number,
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
