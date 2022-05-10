import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetMonthlyTweets = (api) => {
  const [monthlyTweets, setMonthlyTweets] = useState([]);

  useEffect(async () => {
    const response = await axios(api);
    setMonthlyTweets(response.data);
  }, []);
};

export { useGetMonthlyTweets };
