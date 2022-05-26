import React from 'react';
import { useGetData } from '../hooks/useGetData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'bootstrap/dist/css/bootstrap.css';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const CompAccountSelector = ({ setAccounts }) => {
  const [accountA, setAccountA] = React.useState('');
  const [accountB, setAccountB] = React.useState('');

  const response = useGetData(api);
  const items = response.data;

  const handleChangeA = ({target:{value}}) => {
    setAccountA(value);
    const name = items.find(item => item.official_account_id === value);
 
    setAccounts((prevState) => ({
      ...prevState,
      accountIdA: {
        id: value,
        name: name.official_account,
      },
    }));
  };
  const handleChangeB = ({target:{value}}) => {
    const name = items.find(item => item.official_account_id === value);
    setAccounts((prevState) => ({
      ...prevState,
      accountIdB: {
        id: value,
        name: name.official_account,
      },
    }));
    setAccountB(value);
  };

  return (
    <div className="countSelector">
      <h4>Cuentas que deseas comparar</h4>
      <div className="selector-wrap container-fluid">
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-filled-label">Cuenta A</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled1"
            value={accountA}
            onChange={handleChangeA}
          >
            <MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem
                key={`oa-${item.official_account_id}`}
                value={item.official_account_id}
                
              >
                <div>
                  <span>{item.country_name_spa}</span>
                  <h6>{item.official_account}</h6>
                  <span>{item.official_account_name_spa}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-filled-label">Cuenta B</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled2"
            value={accountB}
            onChange={handleChangeB}
          >
            <MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem
                key={`oa-${item.official_account_id}`}
                value={item.official_account_id}
               
              >
                <div>
                  <span>{item.country_name_spa}</span>
                  <h6>{item.official_account}</h6>
                  <span>{item.official_account_name_spa}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
