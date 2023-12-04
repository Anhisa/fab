import { useEffect, useState } from 'react'

export const usePeriod = (periodId) => {
  const [period, setPeriod] = useState('')

  useEffect(() => {
    const response = periodId
    setPeriod(response)
  }, [])
  return { period }
}
