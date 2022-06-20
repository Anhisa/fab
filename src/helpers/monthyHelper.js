
export default function monthyHelper (data, periods) {
  // copy of obj to avoid mutating the original
  const data3 = { ...data }
  //   console.log('pure data', data3);
  //
  //   if(periods[0].id === 1 || periods[0].id === 3){
  //       let [a,b, ...rest] = data3[0]
  //       data3[0] = rest
  //   }
  //   if(periods[1].id === 1 || periods[1].id === 3){
  //     let [a,b, ...rest] = data3[1]
  //     data3[1] = rest
  //   }

  return data3
}

export function createLabels (data) {
  let labels = []
  data.forEach((item) => {
    item.forEach(item2 => {
      labels.push(item2.month)
    })
  })
  labels = [...new Set(labels)]
  return labels
}
