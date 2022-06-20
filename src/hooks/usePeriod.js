import { useEffect, useState } from 'react'

export const usePeriod = (periodId) => {
  const [period, setPeriod] = useState('')

  useEffect(() => {
    const response = periodId
    console.log(response)
    setPeriod(response)
    console.log(period)
    console.log(periodId)
  }, [])
  return { period }
}
