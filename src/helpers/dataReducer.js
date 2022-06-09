export function dataReducer(data, periods) {
  let newData;
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
              tweets_number: 0,
            };
          })
          .concat(data[1]),
      ],
    ];
  } else if (periods[0].id === 2 && periods[1].id === 3) {
    newData = [[...data[1].slice(0, 8).concat(data[0])], [...data[1]]];
  } else if (periods[0].id === 5 && periods[1].id === 6) {
    newData = [[...data[1].slice(0, 6).concat(data[0])], [...data[1]]];
  } else if (
    (periods[0].id === 1 || periods[0].id === 3) &&
    periods[1].id > 4
  ) {
    newData = [
      [...data[0]],
      [
        { ...data[0][0], tweets_number: 0 },
        { ...data[0][1], tweets_number: 0 },
        ...data[1],
      ],
    ];
  } else if (periods[0].id === 2 && periods[1].id === 6) {
    newData = [
      [
        ...data[1]
          .slice(0, 6)
          .map((item) => {
            return {
              ...item,
              tweets_number: 0,
            };
          })
          .concat(data[0]),
      ],

      [...data[1]],
    ];
  } else {
    newData = [[...data[0]], [...data[1]]];
  }

  return newData;
}
