import {useContext} from 'react';
import {TableContext} from '../context/TableContext';

export default function useUserSearch(){
  const {accounts:{accountIdA, accountIdB}} = useContext(TableContext);  
  
  const users = {accountIdA, accountIdB};
  
  return users;
}