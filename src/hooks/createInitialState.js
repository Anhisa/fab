import { useState } from 'react'
export default function useCreateInitialState () {
  const [dataComparing, setDataComparing] = useState({
    accounts: {
      accountIdA: {
        id: '',
        name: ''
      },
      accountIdB: {
        id: '',
        name: ''
      }
    },
    periodComparison: {
      periodA: {
        id: '',
        name: ''
      },
      periodB: {
        id: '',
        name: ''
      }
    },
    isPeriodComparisonActive: false,
    isCountryFilterActive: false
  })
  return [dataComparing, setDataComparing]
}
