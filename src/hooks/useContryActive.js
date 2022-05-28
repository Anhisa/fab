import {useContext} from 'react';
import {TableContext} from '../context/TableContext';

export default function useCountryActive() {
  const {isCountryFilterActive} = useContext(TableContext);
  return isCountryFilterActive;
}