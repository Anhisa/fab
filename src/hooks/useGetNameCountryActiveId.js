import { useContext } from 'react'
import { TableContext } from '../context/InitialState'
export default function useGetNameCountryActiveId () {
  const { country_id: { name } } = useContext(TableContext)
  return name
}
