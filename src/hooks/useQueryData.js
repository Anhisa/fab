import { useQueryClient } from 'react-query'

export default function useQueryData () {
  const client = useQueryClient()
  return client.getQueryData('data')
}
