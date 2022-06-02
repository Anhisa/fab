// let labels1 = data2[0].map((item) => item.month)
// labels1 =   labels1.map(
//   (item) =>
//     new Date(item).toLocaleString('es-ES', {
//       month: 'short',
//       timeZone: 'UTC',
//     }) 
    // + ' ' + new Date(item).getFullYear()

import { useEffect, useState } from "react";
import usePeriodComparison from "../hooks/periodComparison";

     
// );
// 
// let labels2 = data2[1].map((item) => item.month)
// labels2 = labels2.map(
//   (item) =>
//     new Date(item).toLocaleString('es-ES', {
//       month: 'short',
//       timeZone: 'UTC',
//     }) 
// );
//     
// 
// 
// if(periods[0].id === 3 && periods[1].id === 6){
//   data[1] = data[0].concat(data[1])
// }
// newLabels= labels1.concat(labels2)
// console.log('newLabels', newLabels)

export default function monthyHelper(data, periods){
  // copy of obj to avoid mutating the original  
  let data3 = {...data}
 
  if(periods[0].id === 1 || periods[0].id === 3){    
      let [a,b, ...rest] = data3[0]
      data3[0] = rest
  }
  if(periods[1].id === 1 || periods[1].id === 3){
    let [a,b, ...rest] = data3[1]
    data3[1] = rest
  }
  
  return data3

}

export function createLabels(data){
  let labels = []
  data.forEach((item) => {
    item.map(item2 => {
      labels.push(item2.month)
    })

  })
  labels = [...new Set(labels)]
  return labels
}