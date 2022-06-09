import { Button } from '@mui/material';
import React from 'react';
import handleClick from '../helpers/HandleClick';

const OptionsSearch = ({setDataComparing}) => {
  const [open, setOpen] = React.useState(false);
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
    options.forEach(option => {
      handleClick(option);
    })
  }


  return (
    <>
      <Button variant="contained" onClick={handleClear}>Limpiar busqueda</Button>
      <Button variant="contained" onClick={openTables}>Abrir tablas</Button>
    </>
  );
};

export default OptionsSearch;
