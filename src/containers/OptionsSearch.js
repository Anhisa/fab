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
    const options = [
      'monthy-tweets',
      'most-retweet',
      'most-ht',
      'most-mentioned',
      'most-replied',
    ];

    options.forEach((option) => {
      let element = document.getElementById(option);
      if (open) {
        if (element.classList.contains('open')) {
          element.classList.remove('open');
          element.classList.add('closed');
        }
        return;
      } else {
        if (element.classList.contains('closed')) {
          element.classList.remove('closed');
          element.classList.add('open');
        }
        return;
      }
    });
    let element = document.getElementById('monthy-tweets');
    element.scrollIntoView({ behavior: 'smooth' });
    setOpen((prev) => !prev);
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
