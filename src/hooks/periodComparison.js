import { ConstructionOutlined } from '@mui/icons-material';
import {useContext} from 'react';
import {TableContext} from '../context/TableContext';

export default function usePeriodComparison(){
  const {periodComparison, isPeriodComparisonActive} = useContext(TableContext);
  
  if(isPeriodComparisonActive){
  const periods = [periodComparison.periodA, periodComparison.periodB];
  
  return {periods, isPeriodComparisonActive};
  } else {
    return {isPeriodComparisonActive};
  }
}