import { Button } from '@mui/material';
import React from 'react';

const OptionsSearch = ({ setDataComparing, context, dataComparing }) => {
  const [open, setOpen] = React.useState(false);
  const { categories } = dataComparing;
  
  if (categories === undefined) {
    return null;
  }
  let isCategoriesTrue = Object.keys(categories)
    .flatMap((key) => categories[key])
    .some((item) => item === true);

  if ( !isCategoriesTrue) {
    return null;
  }

  // console.log('isCategoriesTrue', isCategoriesTrue)
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
    let elements;
    if (open) {
      elements = document.getElementsByClassName('open');
    } else {
      elements = document.getElementsByClassName('closed');
    }

    let options = [];
    for (let element of elements) {
      options.push(element.getAttribute('id'));
    }
    options.forEach((item) => {
      let element = document.getElementById(item);
      if (open) {
        element.classList.remove('open');
        element.classList.add('closed');
      } else {
        element.classList.remove('closed');
        element.classList.add('open');
      }
    });
    let firstOption = document.getElementById(options[0]);
    if (!open) {
      firstOption.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(!open);
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
