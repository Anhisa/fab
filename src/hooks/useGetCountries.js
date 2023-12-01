import { useGetData } from './useGetData'
const apiCountries =
  'https://fundacionandresbello.org/wp-json/fab/v1/countries'

export default function useGetCountries () {
  const { data, loading } = useGetData(apiCountries)
  return { data, loading }
}
