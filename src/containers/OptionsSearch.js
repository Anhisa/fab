import { Button } from '@mui/material';
import React from 'react';
import handleClick from '../helpers/HandleClick';

const OptionsSearch = ({ setDataComparing, context }) => {
  const [open, setOpen] = React.useState(false);

  const { accounts, periodComparison } = context;
  const { accountIdA, accountIdB } = accounts;
  const { periodA, periodB } = periodComparison;
  if (accountIdA.id === accountIdB.id) {
    return [];
  }
  function handleClear() {
    setDataComparing((prev) => {
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
            id: '',
            name: '',
          },
          periodB: {
            id: '',
            name: '',
          },
        },
      };
    });
  }
  function openTables() {
  
    let elements ;
    if(open){
      elements = document.getElementsByClassName("open");
    } else {
      elements = document.getElementsByClassName("closed");
    }
    console.log('elements', elements);   

    // const options = [
    //   'monthy-tweets',
    //   'most-retweet',
    //   'most-ht',
    //   'most-mentioned',
    //   'most-replied',
    // ];
    for(let i = 0; i < elements.length; i++){    
     let element = elements[i];     
     console.log('element', element)
     if(!open){
      element.classList.remove('closed');
      element.classList.add('open');
     } else {
      element.classList.remove('open');
      element.classList.add('closed');
     }        
    };
    setOpen((prev) => !prev);
    
    console.log('open', open);
    
    // if (open) {
    //   let element = document.getElementById('monthy-tweets');
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  return (
    <>
      <Button variant="contained" onClick={handleClear}>
        Limpiar busqueda
      </Button>
      <Button variant="contained" onClick={openTables}>
        {!open ? 'Abrir' : 'Cerrar'} tablas
      </Button>
    </>
  );
};

export default OptionsSearch;
