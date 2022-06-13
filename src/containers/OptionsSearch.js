import { Button } from '@mui/material';
import React from 'react';
import handleClick from '../helpers/HandleClick';

const OptionsSearch = ({setDataComparing, context}) => {
  const [open, setOpen] = React.useState(false);

const {accounts, periodComparison} = context;
const {accountIdA, accountIdB} = accounts;
const {periodA, periodB} = periodComparison;
if(accountIdA.id === accountIdB.id ){
  return []
}
  function handleClear(){
    setDataComparing(prev => {
      return {
        ...prev,
        accounts: {
          accountIdA: {
            id: '',
            name: '',
          },
          accountIdB: {
            id: '',
            name: '',
          },
        },
        periodComparison: {
          periodA: {
            id:'',
            name: '',
          },
          periodB: {
            id:'',
            name: '',
          },
        }
      }
    })
  }
  function openTables(){
    const options = [
      'monthy-tweets', 'most-retweet', 'most-ht', 'most-mentioned', 'most-replied',
    ]
    let close = open ? true : false;
    options.forEach(option => {
      handleClick(option, open);
    })
    setOpen(prev => !prev);
  }


  return (
    <>
      <Button variant="contained" onClick={handleClear}>Limpiar busqueda</Button>
      <Button variant="contained" onClick={openTables}>{!open ? 'Abrir' : 'Cerrar'} tablas</Button>
    </>
  );
};

export default OptionsSearch;
