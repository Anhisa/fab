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
    periods[1].id > 4
  ) {
    newData = [
      [...data[0]],
      [
        { ...data[0][0], tweets_number: 0 },
        { ...data[0][1], tweets_number: 0 },
        ...data[1]
      ]
    ]
  } else if (periods[0].id === 2 && periods[1].id === 6) {
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
