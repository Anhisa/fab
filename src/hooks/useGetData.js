import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true);
    const response = await axios(api);
    setData(response.data);
    setLoading(false);
  }, []);
  return { data, loading }
};
