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

export default function useMonthyHelper(data){
  const { isPeriodComparisonActive, periods } = usePeriodComparison();
  if(!isPeriodComparisonActive) return
  
  // copy of obj to avoid mutating the original
  let data3 = {...data}
  const [innerData , setInnerData] = useState(data)
  
  useEffect(()=> {
 console.log(periods)
    if(periods[0].id < periods[1].id ){
      setInnerData(data3[0].concat(data3[1]))

      console.log('innerData', innerData)
    }
  },[periods[0].id])
  
  return innerData

}