import { useContext } from 'react';
import { TableContext } from '../context/TableContext';
export default function useGetNameCountryActiveId(){
  const {country_id:{name}} = useContext(TableContext);  
  return name;
}