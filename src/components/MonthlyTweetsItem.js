import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

import {Link} from 'react-router-dom';

export const MonthlyTweetsItem = ({ newData }) => {
  // const data = useGetData(api);

  const tweetNumber = newData.map((item) => parseInt(item.tweets_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  const accountInfo = [];
  const account = newData[0];
  
  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
  }

  // return (
  //   <div>
  //     <h1>cuenta oficial: {accountInfo[0]}</h1>
  //     {/* <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1> */}
  //     <h1>menciones totales del periodo: {totaltweets}</h1>
  //     {newData.map((data) => (
  //         <div key={`monthlytweets-${data.monthly_tweets_id}`}>
  //           <p>
  //             mes: {data.month} número de tweets: {data.tweets_number}
  //           </p>
  //         </div>
  //       ))}
  //   </div>
  // );
  function createData(
    month,
    tweets_number
  ) {
    let stringMonth = new Date(month).toLocaleString('es-ES', { month: 'long' , timeZone: 'UTC' }) + ' ' + new Date(month).getUTCFullYear();
    return {
      stringMonth, tweets_number,
    };
  }

  const rows = newData.map((item) =>
    createData(      
      item.month,
      parseInt(item.tweets_number)
  ));

  Row.propTypes = {
    row: PropTypes.shape({
      stringMonth: PropTypes.string.isRequired,
      tweets_number: PropTypes.number.isRequired,
    }),
  };

  function Row({row}) {
     
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="left">{row.stringMonth}</TableCell>
          <TableCell align="right">{row.tweets_number}</TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <div className="App">
      <div className="card">
        <h3> {accountInfo[2]} </h3>
        <h3>
          {' '}
          <Link to={`/diplomacia-digital/${accountInfo[0]}`}>
            {accountInfo[0]}
          </Link>{' '}
        </h3>
        <h5>
          {/* Periodo de {period.startDate.toString()} a{period.endDate.toString()} */}
        </h5>
        <h5>Tweets totales periodo - {totaltweets} </h5>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>                
                <TableCell align="right">Mes</TableCell>
                <TableCell align="right">Número de Tweets</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
