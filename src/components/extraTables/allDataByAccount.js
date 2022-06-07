let apiMostMentioned = 'https://fundacionandresbello.org/wp-json/fab/v1/most-mentioned'

let apiMostReplied = 'https://fundacionandresbello.org/wp-json/fab/v1/most-replied'

let apiMostRetweeted = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted'

let apiHtMostUsed = 'https://fundacionandresbello.org/wp-json/fab/v1/ht-most-used'

import React from 'react'

const allDataByAccount = () => {
  const dataMostMentioned = useGetData(apiMostMentioned);
  const dataMostReplied = useGetData(apiMostReplied);
  const dataMostRetweeted = useGetData(apiMostRetweeted);
  const dataHtMostUsed = useGetData(apiHtMostUsed);
  const [data, setData] = useState([]);

  

  return (
    <div>allDataByAccount</div>
  )
}

export default allDataByAccount