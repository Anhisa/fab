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
import { addDuplicates, addDuplicates2, extractHtCategories, filterDuplicates } from "./HtMostUsedPie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const HtMostUsedChart = ({newData, title}) => {

  // const accountId = '19';
  // const periodId = '4';

 
  // const dataSet = newData.map(item => item.ht_mentions_number)
  let dataSets = createDatasets(newData, title);
  dataSets = sortLongestArray(dataSets);
  


  const labels = createLabels(newData);


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
      position: 'top',      
    },
    title: {
      display: true,
      text: 'Mentions por hashtags',
    }
  },
};

  const data = {
      datasets: dataSets,
      labels: labels,
    };

  return <Bar data={data} options={options} />;
}

function createDatasets(data, title){
  
  const htCategories = extractHtCategories(data[0]);
   


  const datasets = [];
  let controlColor = 0
  data.forEach((item) => {
    const htCategories = extractHtCategories(item);
    let colors = colorsFromCategory(htCategories);
    let color = controlColor === 0 ? 'rgba(255, 206, 33, 0.7' : 'rgba(0, 60, 123, 0.7)'
    
    datasets.push({
      label: title[controlColor],
      data: item.map((item2) => parseInt(item2.ht_mentions_number)),
      tension: 0.3,
      borderColor: color,
      pointRadius: 6,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      backgroundColor: colors.map(item => item.color),
    })
    controlColor++
  })
  
  return datasets; 
}
// We have to check which array has the longest length
function createLabels(data){
  let labels = []
  data.forEach(item => {
    labels.push(
      item.map((item2) => item2.ht)
    )
  })
  if(labels.length > 1){
    let labels1 = labels[0]
    let labels2 = labels[1]
    let isOneLongest = labels1.length > labels2.length    
    labels = isOneLongest ?     
    labels1.map((item, index) => {
      let isLabelUndefined = labels2[index] === undefined
      return isLabelUndefined ? item : item + ' - ' + labels2[index]      
    }) :
    labels2.map((item, index) => {
      let isLabelUndefined = labels1[index] === undefined
      return isLabelUndefined ? item : item + ' - ' + labels1[index]
    })
    return labels
  } 
  return labels[0];
}
function sortLongestArray(data){
  let newArray = []
  if(data.length > 1){
    if(data[0].length > data[1].length){
      newArray.push(data[0])
      newArray.push(data[1])
    } else {
      newArray.push(data[1])
      newArray.push(data[0])
    }
  } else {
    return data
  }
  return newArray;
}
let listColors= [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#2F6B84',
  '#F6A6EB',
  '#CCCE56',
  '#666384',
  '#2FA3A4',
  '#CCFF56',


]
let colorsDictionary = [
  {
    category: 'COVID-19',
    color: '#FF6384'

  }
]
function colorsFromCategory(categories){
  let categoriesU = []
  let categoriesColor = []
  let colorControl = 0
  categories.forEach(item => {
    if(!categoriesU.includes(item.category)){
      categoriesU.push(item.category)
      categoriesColor.push({
        category: item.category,
        color: listColors[colorControl]
      })
      colorControl++
    } else {
      categoriesColor.forEach(item2 => {
        if(item2.category === item.category){
          return categoriesColor.push({
            category: item.category,
            color: item2.color
          })
          
        }
      })
    }
  } )
  
  return categoriesColor
}