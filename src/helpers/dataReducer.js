/*
id 1 = 2020-01 // 8 meses [2019-11, 2019-12, 2020-01, 2020-02, 2020-03, 2020-04, 2020-05, 2020-06]
id 2 = 2020-02 // 6 meses [2020-07, 2020-08, 2020-09, 2020-10, 2020-11, 2020-12]
id 3 = 2020-Consolidado // 14 meses [2019-11, 2019-12, 2020-01, 2020-02, 2020-03, 2020-04, 2020-05, 2020-06, 2020-07, 2020-08, 2020-09, 2020-10, 2020-11, 2020-12]
// 2020 viene con dos meses adicionales correspondientes al año inmediatamente anterior 2019-11 y 2019-12
id 4 = 2021-01 // 6 meses
id 5 = 2021-02  // 6 meses
id 6 = 2021-Consolidado // 12 meses
*/

export function dataReducer (data, periods) {
  if (data.length <= 1) {
    const labels = data[0].map((item) => item.month)
    return [data, labels]
  }
  let newData
  if (
    (periods[0].id === 1 || periods[0].id === 4) &&
    (periods[1].id === 2 || periods[1].id === 5)
  ) {
    // add the first period to the second period
    newData = [
      [...data[0]],
      [
        ...data[0]
          .map((item) => {
            return {
              ...item,
              tweets_number: 0
            }
          })
          .concat(data[1])
      ]
    ]
  } else if (periods[0].id === 2 && periods[1].id === 3) {
    // add the second period to the first period
    newData = [
      [...data[1]
        .slice(0, 8)
        .map(item => {
          return {
            ...item,
            tweets_number: 0
          }
        })
        .concat(data[0])],
      [...data[1]]
    ]
  } else if (periods[0].id === 5 && periods[1].id === 6) {
    newData = [
      [...data[1]
        .slice(0, 6)
        .map(item => {
          return {
            ...item,
            tweets_number: 0
          }
        })
        .concat(data[0])],
      [...data[1]]
    ]
  } else if (
    (periods[0].id === 1 || periods[0].id === 3) &&
    periods[1].id === 4
  ) {
    newData = [
      [...data[0]],
      [
        { ...data[0][0], tweets_number: 0 },
        { ...data[0][1], tweets_number: 0 },
        ...data[1]
      ]
    ]
  } else if ((periods[0].id === 3 || periods[0].id === 1) && periods[1].id === 6) {
    // add two months to the second array
    newData = [
      [...data[0]],
      [
        { ...data[0][0], tweets_number: 0 },
        { ...data[0][1], tweets_number: 0 },
        ...data[1]
      ]
    ]
  } else if (periods[0].id === 3 && periods[1].id === 5) {
    // add eight months to the second array
    newData = [
      [...data[0]],
      [
        ...data[0]
          .slice(0, 8)
          .map((item) => {
            return {
              ...item,
              tweets_number: 0
            }
          })
          .concat(data[1])
      ]
    ]
  } else if (periods[0].id === 2 && periods[1].id === 6) {
    // add six months to the second array
    newData = [
      [
        ...data[1]
          .slice(0, 6)
          .map((item) => {
            return {
              ...item,
              tweets_number: 0
            }
          })
          .concat(data[0])
      ],

      [...data[1]]
    ]
  } else if (periods[0].id === 1 && periods[1].id === 4) {
    // add two months to the second array
    newData = [
      [...data[0]],
      [
        { ...data[0][0], tweets_number: 0 },
        { ...data[0][1], tweets_number: 0 },
        ...data[1]
      ]
    ]
  } else {
    newData = [[...data[0]], [...data[1]]]
  }
  const labels =
  newData[0].length > newData[1].length
    ? newData[0].map((item) => item.month)
    : newData[1].map((item) => item.month)
  return [newData, labels]
}
