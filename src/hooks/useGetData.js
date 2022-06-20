import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetData = (api) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    // setLoading(true);
    if (api) {
      const response = await axios(api)
      if (response.status === 200) {
        setData(response.data)
        setLoading(false)
      }
    }
  }, [])
  return { data, loading }
}
